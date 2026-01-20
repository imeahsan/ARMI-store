import Cookies from "js-cookie";
import dayjs from "dayjs";
import { useRouter } from "next/router";
import { useContext, useEffect, useRef, useState } from "react";
import { useForm } from "react-hook-form";
import { useCart } from "react-use-cart";

//internal import
import useAsync from "@hooks/useAsync";
import { UserContext } from "@context/UserContext";
import OrderServices from "@services/OrderServices";
import CouponServices from "@services/CouponServices";
import { notifyError, notifySuccess } from "@utils/toast";
import SettingServices from "@services/SettingServices";
import NotificationServices from "@services/NotificaitonServices";

const useCheckoutSubmit = () => {
  const {
    state: { userInfo, shippingAddress },
    dispatch,
  } = useContext(UserContext);

  const [total, setTotal] = useState("");
  const [couponInfo, setCouponInfo] = useState({});
  const [minimumAmount, setMinimumAmount] = useState(0);
  const [shippingCost, setShippingCost] = useState(0);
  const [discountAmount, setDiscountAmount] = useState(0);
  const [discountPercentage, setDiscountPercentage] = useState(0);
  const [isCheckoutSubmit, setIsCheckoutSubmit] = useState(false);
  const [isCouponApplied, setIsCouponApplied] = useState(false);

  const router = useRouter();
  const couponRef = useRef("");
  const { isEmpty, emptyCart, items, cartTotal } = useCart();

  const {
    register,
    handleSubmit,
    setValue,
    formState: { errors },
  } = useForm();

  // use public coupon endpoint to avoid 401/logout from admin-only route
  const { data } = useAsync(CouponServices.getShowingCoupons);
  const { data: globalSetting } = useAsync(SettingServices.getGlobalSetting);
  const currency = globalSetting?.default_currency || "$";

  useEffect(() => {
    if (Cookies.get("couponInfo")) {
      const coupon = JSON.parse(Cookies.get("couponInfo"));
      // console.log('coupon information',coupon)
      setCouponInfo(coupon);
      setDiscountPercentage(coupon.discountType);
      setMinimumAmount(coupon.minimumAmount);
    }
  }, [isCouponApplied]);

  //remove coupon if total value less then minimum amount of coupon
  useEffect(() => {
    if (minimumAmount - discountAmount > total || isEmpty) {
      setDiscountPercentage(0);
      Cookies.remove("couponInfo");
    }
  }, [minimumAmount, total]);

  //calculate total and discount value
  //calculate total and discount value
  useEffect(() => {
    const discountProductTotal = items?.reduce(
      (preValue, currentValue) => preValue + currentValue.itemTotal,
      0,
    );

    let totalValue = "";
    let subTotal = parseFloat(cartTotal + Number(shippingCost)).toFixed(2);
    const discountAmount =
      discountPercentage?.type === "fixed"
        ? discountPercentage?.value
        : discountProductTotal * (discountPercentage?.value / 100);

    const discountAmountTotal = discountAmount ? discountAmount : 0;

    totalValue = Number(subTotal) - discountAmountTotal;

    setDiscountAmount(discountAmountTotal);

    setTotal(totalValue);
  }, [cartTotal, shippingCost, discountPercentage]);

  //if not login then push user to home page
  useEffect(() => {
    if (!userInfo) {
      router.push("/");
    }

    setValue("firstName", shippingAddress.firstName);
    setValue("lastName", shippingAddress.lastName);
    setValue("address", shippingAddress.address);
    setValue("contact", shippingAddress.contact);
    setValue("email", shippingAddress.email);
    setValue("city", shippingAddress.city);
    setValue("country", shippingAddress.country);
    setValue("zipCode", shippingAddress.zipCode);
  }, []);

  const submitHandler = async (data) => {
    setIsCheckoutSubmit(true);
    try {
      dispatch({ type: "SAVE_SHIPPING_ADDRESS", payload: data });
      Cookies.set("shippingAddress", JSON.stringify(data));

      const userDetails = {
        name: `${data.firstName} ${data.lastName}`,
        contact: data.contact,
        email: data.email,
        address: data.address,
        country: data.country,
        city: data.city,
        zipCode: data.zipCode,
      };

      let orderInfo = {
        user_info: userDetails,
        shippingOption: data.shippingOption,
        paymentMethod: data.paymentMethod,
        status: "Pending",
        cart: items,
        subTotal: cartTotal,
        shippingCost: shippingCost,
        discount: discountAmount,
        total: total,
      };

      if (data.paymentMethod === "Card") {
        const res = await OrderServices.initiateNoonPayment(orderInfo);

        if (!res?.paymentUrl) {
          throw new Error("Unable to initiate payment");
        }

        sessionStorage.setItem(
          "pendingOrderId",
          JSON.stringify({ orderId: res.orderId, reference: res.reference }),
        );

        Cookies.remove("couponInfo");
        sessionStorage.removeItem("products");
        // Redirect to Noon hosted payment page
        window.location.href = res.paymentUrl;
        return;
      }
      if (data.paymentMethod === "Cash") {
        const res = await OrderServices.addOrder(orderInfo);

        // notification info
        const notificationInfo = {
          orderId: res._id,
          message: `${res.user_info.name}, Placed ${currency}${parseFloat(
            res.total,
          ).toFixed(2)} order!`,
          image: "image.png",
        };
        // notification api call
        await NotificationServices.addNotification(notificationInfo);

        router.push(`/order/${res._id}`);
        notifySuccess("Your Order Confirmed!");
        Cookies.remove("couponInfo");
        sessionStorage.removeItem("products");
        emptyCart();
      }
    } catch (err) {
      notifyError(err?.response?.data?.message || err.message);
    } finally {
      setIsCheckoutSubmit(false);
    }
  };

  const handleShippingCost = (value) => {
    setShippingCost(value);
  };

  const handleCouponCode = (e) => {
    e.preventDefault();

    if (!couponRef.current.value) {
      notifyError("Please Input a Coupon Code!");
      return;
    }
    const result = data.filter(
      (coupon) => coupon.couponCode === couponRef.current.value,
    );

    if (result.length < 1) {
      notifyError("Please Input a Valid Coupon!");
      return;
    }

    if (dayjs().isAfter(dayjs(result[0]?.endTime))) {
      notifyError("This coupon is not valid!");
      return;
    }

    if (total < result[0]?.minimumAmount) {
      notifyError(
        `Minimum ${result[0].minimumAmount} USD required for Apply this coupon!`,
      );
      return;
    } else {
      notifySuccess(
        `Your Coupon ${result[0].couponCode} is Applied on ${result[0].productType}!`,
      );
      setIsCouponApplied(true);
      setMinimumAmount(result[0]?.minimumAmount);
      setDiscountPercentage(result[0].discountType);
      dispatch({ type: "SAVE_COUPON", payload: result[0] });
      Cookies.set("couponInfo", JSON.stringify(result[0]));
    }
  };

  return {
    handleSubmit,
    submitHandler,
    handleShippingCost,
    register,
    errors,
    couponInfo,
    couponRef,
    handleCouponCode,
    discountPercentage,
    discountAmount,
    shippingCost,
    total,
    isEmpty,
    items,
    cartTotal,
    currency,
    isCheckoutSubmit,
    isCouponApplied,
  };
};

export default useCheckoutSubmit;
