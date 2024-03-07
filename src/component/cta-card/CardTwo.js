import React from "react";
import Image from "next/image";
import Link from "next/link";

//internal import
import useGetSetting from "@hooks/useGetSetting";
import CMSkeleton from "@component/preloader/CMSkeleton";
import useUtilsFunction from "@hooks/useUtilsFunction";
import { useDirection } from "@context/DirectionContext";

const CardTwo = () => {
  const { storeCustomizationSetting, error, loading } = useGetSetting();
  const { showingTranslateValue } = useUtilsFunction();
  const { direction } = useDirection();
  return (
    <>
      <div className="w-full bg-red-100 shadow-sm lg:px-10 lg:py-5  rounded-lg">
        <div className="flex  justify-between items-center flex-col-reverse sm:flex-row ">
          <div className="lg:w-3/5 md:w-1/2 pt-2 pl-2 pr-2">
            {/* <span className="text-base lg:text-lg">
              <CMSkeleton
                count={1}
                height={20}
                error={error}
                loading={loading}
                data={storeCustomizationSetting?.home?.quick_delivery_subtitle}
              />
            </span> */}
            <h2 className="font-serif text-lg lg:text-2xl font-bold mb-1">
              <CMSkeleton
                count={1}
                height={30}
                error={error}
                loading={loading}
                data={storeCustomizationSetting?.home?.quick_delivery_title}
              />
            </h2>
            <p className="text-sm font-sans leading-6">
              <CMSkeleton
                count={4}
                height={20}
                error={error}
                loading={loading}
                data={
                  storeCustomizationSetting?.home?.quick_delivery_description
                }
              />
            </p>
            <Link
              href={`/request-quotation`}
              className="lg:w-1/3 text-xs font-serif font-medium inline-block mt-5 mb-5  px-8 py-3 bg-red-500 text-center text-white rounded-full hover:text-white contact-btn"
            >
              {showingTranslateValue(
                storeCustomizationSetting?.home?.quick_delivery_button
              )}
            </Link>
          </div>
          <div className="w-full sm:w-1/5  md:w-1/2 lg:w-2/5 flex-grow  lg:flex md:flex md:justify-items-end lg:justify-end right-500  relative left-16">
            <div className="absolute md:-top-20 lg:-top-40	hidden md:block">
              <Image
                width={500}
                height={250}
                alt="Quick Delivery to Your Home"
                className={`block w-auto object-contain right-500  ${
                  direction === "rtl"
                    ? "transform scale-x-[-1] relative -left-20"
                    : ""
                }`}
                src={
                  // storeCustomizationSetting?.home?.quick_delivery_img ||
                  "/car-image.png"
                }
              />
            </div>
          </div>
        </div>
      </div>
    </>
  );
};

export default CardTwo;
