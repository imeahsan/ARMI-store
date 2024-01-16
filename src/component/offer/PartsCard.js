import React from "react";

//internal import
import Coupon from "@component/coupon/Coupon";
import useGetSetting from "@hooks/useGetSetting";
import useUtilsFunction from "@hooks/useUtilsFunction";
import Image from "next/image";
import Link from "next/link";
import useTranslation from "next-translate/useTranslation";

const PartsCard = () => {
  const { storeCustomizationSetting } = useGetSetting();
  const { showingTranslateValue } = useUtilsFunction();
  const { t } = useTranslation();

  return (
    <div className=" group mr-1 " style={{ width: "100%", height: "500px" }}>
      <div className="bg-gray-50 h-full shadow-2xl border-red-500 transition duration-150 ease-linear transform group-hover:border-emerald-500 rounded shadow ">
        <div className="bg-orange-100 text-gray-900 px-6 py-2 rounded-t border-b flex items-center justify-center">
          <h3 className="text-base font-serif font-medium "></h3>
        </div>
        <div className="overflow-hidden" style={{ alignItems: "center" }}>
          <p
            style={{
              fontSize: "16px",
              lineHeight: "24px",
              textAlign: "center",
              letterSpacing: "5px",
            }}
          >
            PREMIUN RECYCLED{" "}
          </p>
          <h1
            style={{
              fontSize: "42px",
              lineHeight: "38px",
              textAlign: "center",
              letterSpacing: "-1px",
            }}
          >
            VEHICLE
            <br />
            <b style={{ color: "#D24549" }}>PARTS</b>
          </h1>
          <div
            style={{
              marginTop: "25px",
              display: "flex",
              justifyContent: "center",
              alignItems: "center",
            }}
          >
            <Image src={"/parts-animated-1.gif"} width={275} height={225} />
          </div>
          <div
            style={{
              textAlign: "center",
              marginTop: "25px",
              marginBottom: "25px",
            }}
          >
            <Link
              href={`${storeCustomizationSetting?.home?.promotion_button_link}`}
              className="text-lg font-serif font-medium px-6 py-2 bg-emerald-500 text-center rounded-full text-white hover:bg-emerald-700"
            >
              {t("common:buyNow")}
            </Link>
          </div>
        </div>
      </div>
    </div>
  );
};

export default PartsCard;
