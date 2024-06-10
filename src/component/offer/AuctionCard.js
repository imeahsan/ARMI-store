import React from "react";

//internal import
import Coupon from "@component/coupon/Coupon";
import useGetSetting from "@hooks/useGetSetting";
import useUtilsFunction from "@hooks/useUtilsFunction";
import Image from "next/image";
import Link from "next/link";
import useTranslation from "next-translate/useTranslation";
import { useDirection } from "@context/DirectionContext";

const AuctionCard = () => {
  const { storeCustomizationSetting } = useGetSetting();
  const { showingTranslateValue } = useUtilsFunction();
  const { t } = useTranslation();
  const { direction } = useDirection();

  return (
    <div className=" group mr-1 " style={{ width: "100%", height: "475px" }}>
      <div className="bg-gray-50 h-full shadow-2xl   transition duration-150 ease-linear transform  rounded-2xl  ">
        <div className=" rounded-t-2xl text-gray-900 px-6 py-2   flex items-center  justify-center">
          <h3 className="text-base font-serif font-medium "></h3>
        </div>
        <div className="overflow-hidden pt-4" style={{ alignItems: "center" }}>
          <p
            style={
              direction === "rtl"
                ? {
                    fontWeight: 500,
                    fontSize: "16px",
                    lineHeight: "24px",
                    textAlign: "center",
                    letterSpacing: "0px",
                  }
                : {
                    fontWeight: 500,
                    fontSize: "14px",
                    lineHeight: "24px",
                    textAlign: "center",
                    letterSpacing: "5px",
                  }
            }
          >
            {t("common:online247")}
          </p>
          <h1
            style={
              direction === "rtl"
                ? {
                    fontSize: "38px",
                    fontWeight: "bold",

                    lineHeight: "50px",
                    textAlign: "center",
                    letterSpacing: "-1px",
                  }
                : {
                    fontSize: "42px",
                    fontWeight: "bold",

                    lineHeight: "50px",
                    textAlign: "center",
                    letterSpacing: "-1px",
                  }
            }
          >
              {t("common:AUCTIONS")}

              <br />
            <b style={{ color: "#D24549", marginTop: "5px !important" }}>
                {t("common:VEHICLE")}
            </b>
          </h1>
          <div
            style={{
              marginTop: "10px",
              display: "flex",
              justifyContent: "center",
              alignItems: "center",
              height: "225px",
            }}
          >
            <Image src={"/auction.png"} width={275} height={225} />
          </div>

          <div
            style={{
              textAlign: "center",
              marginTop: "25px",
              marginBottom: "25px",
            }}
          >
            <Link
              href={`/auctions`}
              className="text-lg font-serif font-medium px-6 py-2 mt-2 bg-red-500 text-center rounded-full text-white hover:bg-gray-500"
            >
              {t("common:BidNow")}
            </Link>
          </div>
        </div>
      </div>
    </div>
  );
};

export default AuctionCard;
