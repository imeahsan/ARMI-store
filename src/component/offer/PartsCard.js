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
    <div className=" group mr-1 " style={{ width: "100%", height: "475px" }}>
      <div className="bg-gray-50 h-full shadow-2xl   transition duration-150 ease-linear transform  rounded-2xl  ">
        <div className=" rounded-t-2xl text-gray-900 px-6 py-2   flex items-center  justify-center">
          <h3 className="text-base font-serif font-medium "></h3>
        </div>
        <div className="overflow-hidden pt-4" style={{ alignItems: "center" }}>
          <p
            style={{
              fontWeight: 500,
              fontSize: "14px",
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
              fontWeight: "bold",
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
              height: "225px",
            }}
          >
            <Image
              src={"/parts.png"}
              width={275}
              height={225}
              // style={{  }}
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
              href={`/search`}
              className="text-lg font-serif font-medium px-6 py-2 bg-red-500 text-center rounded-full text-white hover:bg-gray-500"
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
