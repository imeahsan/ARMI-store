import React from "react";

//internal import
import Coupon from "@component/coupon/Coupon";
import useGetSetting from "@hooks/useGetSetting";
import useUtilsFunction from "@hooks/useUtilsFunction";
import Image from "next/image";

const AuctionCard = () => {
  const { storeCustomizationSetting } = useGetSetting();
  const { showingTranslateValue } = useUtilsFunction();

  return (
    <div className=" group px-10" style={{ width: '350px', height: '450px' }}>
      <div className="bg-gray-50 h-full border-2 border-red-500 transition duration-150 ease-linear transform group-hover:border-emerald-500 rounded shadow ">
        <div className="bg-orange-100 text-gray-900 px-6 py-2 rounded-t border-b flex items-center justify-center">
          <h3 className="text-base font-serif font-medium "></h3>
        </div>
        <div className="overflow-hidden" style={{alignItems:'center'}} >
          <p style={{ fontSize: '16px', lineHeight: '24px', textAlign: "center", letterSpacing: '5px' }}>Premium Recycled </p>
          <h1 style={{ fontSize: '42px', lineHeight: '38px', textAlign: "center", letterSpacing: '-1px' }}>
            VEHICLE<br />
            <b style={{color:"#D24549"}}>PARTS</b>
          </h1>
          <div style={{marginLeft:'auto', marginRight:'auto'}}>
          <Image  src={'/parts-animated-1.gif'} width={275} height={225}/>

          </div>
        </div>
      </div>
    </div>
  );
};

export default AuctionCard;
