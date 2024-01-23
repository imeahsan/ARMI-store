import React from "react";

//internal import
import Coupon from "@component/coupon/Coupon";
import useGetSetting from "@hooks/useGetSetting";
import useUtilsFunction from "@hooks/useUtilsFunction";
import Image from "next/image";
import Link from "next/link";
import useTranslation from "next-translate/useTranslation";

const AuctionCard = () => {
  const { storeCustomizationSetting } = useGetSetting();
  const { showingTranslateValue } = useUtilsFunction();
  const { t } = useTranslation();
  return (
    <div
      className=""
      style={{
        width: "30vw",
        height: "500px",
        backgroundImage: "url('/bg-image.jpg')",
      }}
    >
      <div className="bg-gray-50 h-full shadow-2xl   transition duration-150 ease-linear transform group-hover:border-emerald-500 rounded shadow ">
        <div className=" text-gray-900 px-6 py-2 rounded-t  flex items-center justify-center">
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
            ONLINE 24/7{" "}
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
            <b style={{ color: "#D24549" }}>AUCTIONS</b>
          </h1>
          <div
            style={{
              marginTop: "25px",
              display: "flex",
              justifyContent: "center",
              alignItems: "center",
            }}
          >
            <Image
              src={"/online-auctions-small.png"}
              width={275}
              height={225}
            />
          </div>

          <div
            style={{
              textAlign: "center",
              marginTop: "25px",
              marginBottom: "25px",
            }}
          >
            <Link
              href={`/request-quotation`}
              className="text-lg font-serif font-medium px-6 py-2 bg-emerald-500 text-center rounded-full text-white hover:bg-emerald-700"
            >
              {t("common:getQuote")}
            </Link>
          </div>
        </div>
      </div>
    </div>
  );
};

export default AuctionCard;
