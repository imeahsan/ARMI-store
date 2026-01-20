import { useEffect, useState } from "react";
import { useRouter } from "next/router";
import Link from "next/link";

import Layout from "@layout/Layout";
import OrderServices from "@services/OrderServices";
import { notifyError, notifySuccess } from "@utils/toast";

const OrderSuccess = () => {
  const router = useRouter();
  const [loading, setLoading] = useState(true);
  const [status, setStatus] = useState("Checking");
  const [orderId, setOrderId] = useState("");
  const [reference, setReference] = useState("");

  useEffect(() => {
    // Resolve order id/reference from query or session storage
    const stored =
      typeof window !== "undefined"
        ? sessionStorage.getItem("pendingOrderId")
        : null;
    const storedObj = stored ? JSON.parse(stored) : {};
    const resolvedOrderId =
      router.query.orderId || router.query.id || storedObj.orderId || "";
    const resolvedReference =
      router.query.reference || storedObj.reference || "";

    if (!resolvedOrderId) {
      setStatus("Order not found");
      setLoading(false);
      return;
    }

    setOrderId(resolvedOrderId);
    setReference(resolvedReference);

    let attempts = 0;
    const poll = async () => {
      try {
        const res = await OrderServices.getNoonPaymentStatus(resolvedOrderId);
        const paymentStatus = res?.paymentStatus || res?.status || "Pending";
        setStatus(paymentStatus);

        if (paymentStatus === "Paid") {
          notifySuccess("Payment successful");
          sessionStorage.removeItem("pendingOrderId");
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

      const interval = setInterval(async () => {
        attempts += 1;
        const finished = await poll();
        if (finished || attempts >= 5) {
          clearInterval(interval);
          setLoading(false);
        }
      }, 4000);
    };

    startPoll();
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
            {orderId ? (
              <Link
                href={`/order/${orderId}`}
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
