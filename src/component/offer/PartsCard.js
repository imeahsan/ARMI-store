import React from "react";

//internal import
import Coupon from "@component/coupon/Coupon";
import useGetSetting from "@hooks/useGetSetting";
import useUtilsFunction from "@hooks/useUtilsFunction";

const PartsCard = () => {
  const { storeCustomizationSetting } = useGetSetting();
  const { showingTranslateValue } = useUtilsFunction();

  return (
    <div className=" group px-10">
      <div className="bg-gray-50 h-full border-2 border-red-500 transition duration-150 ease-linear transform group-hover:border-emerald-500 rounded shadow ">
        <div className="bg-orange-100 text-gray-900 px-6 py-2 rounded-t border-b flex items-center justify-center">
          <h3 className="text-base font-serif font-medium ">
            {"lkl"}
            </h3>
        </div>
        {/* <div className="overflow-hidden">
          <Coupon couponInHome />
        </div> */}
      </div>
    </div>
  );
};

export default PartsCard;
