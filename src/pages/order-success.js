import { useEffect, useState } from "react";
import { useRouter } from "next/router";
import { useCart } from "react-use-cart";
import Cookies from "js-cookie";
import Link from "next/link";

import Layout from "@layout/Layout";
import OrderServices from "@services/OrderServices";
import { notifyError, notifySuccess } from "@utils/toast";

const OrderSuccess = () => {
  const router = useRouter();
  const { emptyCart } = useCart();
  const [loading, setLoading] = useState(true);
  const [status, setStatus] = useState("Checking");
  const [orderId, setOrderId] = useState("");
  const [reference, setReference] = useState("");

  useEffect(() => {
    // Resolve order id/reference from query or session storage
    let storedObj = {};
    if (typeof window !== "undefined") {
      try {
        const stored = sessionStorage.getItem("pendingOrderId");
        storedObj = stored ? JSON.parse(stored) : {};
      } catch (_) {
        storedObj = {};
      }
    }

    const resolvedOrderId = router.query.orderId || storedObj?.orderId || "";
    const resolvedReference =
      router.query.merchantReference ||
      router.query.reference ||
      storedObj?.reference ||
      "";
    const orderIdentifier = resolvedOrderId || resolvedReference;

    if (!orderIdentifier) {
      setStatus("Order not found");
      setLoading(false);
      return;
    }

    setOrderId(resolvedOrderId);
    setReference(resolvedReference);

    let attempts = 0;
    let intervalId = null;
    const poll = async () => {
      try {
        const res = await OrderServices.getNoonPaymentStatus({
          orderId: resolvedOrderId,
          merchantReference: resolvedReference,
        });
        const paymentStatus = res?.paymentStatus || res?.status || "Pending";
        setStatus(paymentStatus);
        if (!orderId && res?.orderId) {
          setOrderId(res.orderId);
        }
        if (!reference && res?.reference) {
          setReference(res.reference);
        }

        if (paymentStatus === "Paid") {
          notifySuccess("Payment successful");
          // Clear cart and checkout data
          emptyCart();
          Cookies.remove("couponInfo");
          sessionStorage.removeItem("pendingOrderId");
          sessionStorage.removeItem("products");
          setLoading(false);
          return true;
        }

        if (paymentStatus === "Failed") {
          notifyError("Payment failed");
          sessionStorage.removeItem("pendingOrderId");
          setLoading(false);
          return true;
        }

        return false;
      } catch (err) {
        notifyError(err?.response?.data?.message || err?.message || "Error");
        setLoading(false);
        return true;
      }
    };

    const startPoll = async () => {
      const done = await poll();
      if (done) return;

      intervalId = setInterval(async () => {
        attempts += 1;
        const finished = await poll();
        if (finished || attempts >= 5) {
          clearInterval(intervalId);
          setLoading(false);
        }
      }, 4000);
    };

    startPoll();

    return () => {
      if (intervalId) {
        clearInterval(intervalId);
      }
    };
  }, [router.query]);

  return (
    <Layout title="Order Status" description="Order payment status">
      <div className="flex flex-col items-center justify-center py-16 px-4">
        <h1 className="text-2xl font-semibold mb-4">Order Payment Status</h1>
        {loading ? (
          <p className="text-gray-600">Checking payment status...</p>
        ) : (
          <div className="text-center space-y-3">
            <p className="text-lg">
              Status: <span className="font-semibold">{status}</span>
            </p>
            {reference ? (
              <p className="text-sm text-gray-500">Reference: {reference}</p>
            ) : null}
            {reference ? (
              <Link
                href={`/order/${reference.replace("ORD-", "")}`}
                className="inline-flex items-center justify-center px-4 py-2 bg-red-500 text-white rounded hover:bg-red-600"
              >
                View Order
              </Link>
            ) : null}
            <div>
              <button
                onClick={() => router.push("/")}
                className="mt-2 inline-flex items-center justify-center px-4 py-2 border rounded text-gray-700 hover:bg-gray-100"
              >
                Back to Home
              </button>
            </div>
          </div>
        )}
      </div>
    </Layout>
  );
};

export default OrderSuccess;
