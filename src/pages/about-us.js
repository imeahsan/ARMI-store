import React, { useEffect } from "react";
import Image from "next/image";
import useTranslation from "next-translate/useTranslation";

//internal import
import Layout from "@layout/Layout";
import useGetSetting from "@hooks/useGetSetting";
import PageHeader from "@component/header/PageHeader";
import CMSkeleton from "@component/preloader/CMSkeleton";
import useUtilsFunction from "@hooks/useUtilsFunction";
import VideoPlayer from "@component/common/VideoPlayer";


const AboutUs = () => {
  const { t, lang } = useTranslation();
  const { storeCustomizationSetting, loading, error } = useGetSetting();
  const { showingTranslateValue } = useUtilsFunction();
  useEffect(() => {
    const hash = window.location.hash;

    setTimeout(() => {
      if (hash) {
        const elementToScrollTo = document.querySelector(hash);
        if (elementToScrollTo) {
          elementToScrollTo.scrollIntoView({ behavior: "smooth" });
        }
      }
    }, 3000);
  }, []);
  console.log(storeCustomizationSetting);
  // console.log("data", data, );

  return (
    <Layout title="About Us" description="This is about us page">
      <PageHeader
        headerBg={storeCustomizationSetting?.about_us?.header_bg}
        title={showingTranslateValue(
          storeCustomizationSetting?.about_us?.title
        )}
      />

      <div className="bg-white">
        <div className="max-w-screen-2xl mx-auto lg:py-20 py-10 px-4 sm:px-10">
          <div className="grid grid-flow-row lg:grid-cols-2 gap-4 lg:gap-16 items-center">
            <div className="">
              <h3 className="text-xl lg:text-3xl mb-2 font-serif font-bold">
                {/* {t("common:about-section-title")} */}

                <CMSkeleton
                  count={1}
                  height={50}
                  // error={error}
                  loading={loading}
                  data={storeCustomizationSetting?.about_us?.top_title}
                />
              </h3>
              <div className="mt-3 text-base opacity-90 leading-7">
                <p>
                  <CMSkeleton
                    count={5}
                    height={20}
                    // error={error}
                    loading={loading}
                    data={storeCustomizationSetting?.about_us?.top_description}
                  />
                </p>
              </div>
              <div className="grid md:grid-cols-2 gap-6 lg:grid-cols-2 xl:gap-6 mt-8">
                <div className="p-8 bg-indigo-50 shadow-sm rounded-lg">
                  {loading ? (
                    <CMSkeleton
                      count={8}
                      height={20}
                      error={error}
                      loading={loading}
                    />
                  ) : (
                    <>
                      <span className="text-3xl block font-extrabold font-serif mb-4 text-red-600">
                        {showingTranslateValue(
                          storeCustomizationSetting?.about_us?.card_two_title
                        )}
                      </span>
                      <h4 className="text-lg font-serif font-bold mb-1">
                        {showingTranslateValue(
                          storeCustomizationSetting?.about_us?.card_two_sub
                        )}
                      </h4>
                      <p className="mb-0 opacity-90 leading-7">
                        {showingTranslateValue(
                          storeCustomizationSetting?.about_us
                            ?.card_two_description
                        )}
                      </p>
                    </>
                  )}
                </div>
                <div className="p-8 bg-indigo-50 shadow-sm rounded-lg">
                  {loading ? (
                    <CMSkeleton
                      count={8}
                      height={20}
                      error={error}
                      loading={loading}
                    />
                  ) : (
                    <>
                      <span className="text-3xl block font-extrabold font-serif mb-4 text-red-600">
                        {showingTranslateValue(
                          storeCustomizationSetting?.about_us?.card_one_title
                        )}
                      </span>
                      <h4 className="text-lg font-serif font-bold mb-1">
                        {showingTranslateValue(
                          storeCustomizationSetting?.about_us?.card_one_sub
                        )}
                      </h4>
                      <p className="mb-0 opacity-90 leading-7">
                        {showingTranslateValue(
                          storeCustomizationSetting?.about_us
                            ?.card_one_description
                        )}
                      </p>
                    </>
                  )}
                </div>
              </div>
            </div>

            <div className="mt-10 lg:mt-0">
              <Image
                width={920}
                height={750}
                src={
                  storeCustomizationSetting?.about_us?.content_right_img ||
                  "/about-us.jpg"
                }
                alt="logo"
              />
            </div>
          </div>
          <div className="mt-10 lg:mt-16 text-base opacity-90 leading-7">
            <p>
              <CMSkeleton
                count={5}
                height={20}
                // error={error}
                loading={loading}
                data={
                  storeCustomizationSetting?.about_us?.middle_description_one
                }
              />
            </p>

            <p>
              <CMSkeleton
                count={8}
                height={20}
                error={error}
                loading={loading}
                data={
                  storeCustomizationSetting?.about_us?.middle_description_two
                }
              />
            </p>
          </div>
          <div className="mt-10 lg:mt-12 flex flex-col sm:grid gap-4">
            {/* <Image
              width={1920}
              height={570}
              src={
                storeCustomizationSetting?.about_us?.content_middle_Img ||
                "/about-banner.jpg"
              }
              alt="logo"
              className="block rounded-lg"
            /> */}

            <VideoPlayer />
          </div>
        </div>

        {/* CEO Message Section - Professional & Modern */}
        <div className="relative bg-gradient-to-b from-gray-50 to-gray-100 lg:py-20 py-10" id="team">
          <div className="max-w-screen-2xl mx-auto px-3 sm:px-10">
            {/* Section Header */}
            <div className="text-center mb-12 lg:mb-16">
              {lang === 'en' && (
                <span className="text-red-600 font-semibold text-sm uppercase tracking-wide mb-2 block">
                  Leadership Message
                </span>
              )}
              <h3 className="text-3xl lg:text-4xl font-serif font-bold text-gray-900 mb-3">
                {t('common:ceo-title')}
              </h3>
              <div className="h-1 w-24 bg-red-600 mx-auto"></div>
            </div>

            {/* CEO Card - Two Column Layout */}
            <div className="grid lg:grid-cols-2 gap-8 lg:gap-32 items-start">
              {/* Left Side - CEO Image & Info */}
              <div className="flex justify-center lg:sticky lg:top-24 mb-20">
                <div className="relative group w-full flex flex-col items-center">
                  {/* Image Container */}
                  <div className="relative flex justify-center">
                    <div className="rounded-full overflow-hidden bg-white transform group-hover:scale-105 transition-all duration-500 w-64 h-64 sm:w-80 sm:h-80 lg:w-[22rem] lg:h-[22rem]" style={{
                      boxShadow: '0 0 0 8px white, 0 0 0 10px #dc2626,  0 0 0 1px #eab308, 0 25px 50px -12px rgba(0, 0, 0, 0.25)'
                    }}>
                      <Image
                        width={500}
                        height={500}
                        src="/ceo/ceo.jpg"
                        alt="CEO - Eng. Salem H. Balharith"
                        className="w-full h-full object-cover group-hover:scale-110 transition-transform duration-700 rounded-full"
                      />
                    </div>
                    
                    {/* Name Badge */}
                    <div className="absolute -bottom-40 left-1/2 transform -translate-x-1/2 w-max">
                      <div className=" pb-9 ">
                        <h5 className="text-lg lg:text-2xl font-bold font-serif text-gray-900 whitespace-nowrap">
                          {t('common:ceo-name')}
                        </h5>
                        <span className="text-red-600 font-semibold text-sm lg:text-base block mt-1">
                          {t('common:ceo-position')}
                        </span>
                        <span className="text-gray-600 text-sm lg:text-base block mt-1">
                          {t('common:ceo-company')}
                        </span>
                      </div>
                    </div>
                  </div>
                </div>
              </div>

              {/* Right Side - CEO Message */}
              <div className=" mt-12 lg:mt-0 space-y-6">
                {/* Quote Card */}
                <div className="bg-white rounded-2xl p-8 lg:p-10 shadow-lg border-l-4 border-red-600">
                 
                  <svg className="w-10 h-10 text-red-600 opacity-30 mb-4" fill="currentColor" viewBox="0 0 24 24">
                    <path d="M6 17h3l2-4V7H5v6h3zm8 0h3l2-4V7h-6v6h3z"/>
                  </svg>

                  {/* Message Content */}
                  <div className="space-y-5 text-gray-700">
                    <p className="text-base lg:text-lg leading-relaxed">
                      {t('common:ceo-message-p1')}
                    </p>
                    
                    <p className="text-base lg:text-lg leading-relaxed">
                      {t('common:ceo-message-p2')}
                    </p>
                    
                    <p className="text-base lg:text-lg leading-relaxed">
                      {t('common:ceo-message-p3')}
                    </p>
                    
                    <p className="text-base lg:text-lg leading-relaxed italic text-gray-800 font-medium">
                      {t('common:ceo-message-p4')}
                    </p>
                  </div>

                  {/* Signature */}
                  <div className="mt-8 pt-6 border-t border-gray-200">
                    <p className="text-gray-900 font-serif font-bold text-lg">
                      {t('common:ceo-name')}
                    </p>
                    <p className="text-gray-600 text-sm mt-1">
                      {t('common:ceo-position')} – {t('common:ceo-company')}
                    </p>
                  </div>
                </div>

              
                
              

              
              </div>
            </div>
          </div>
        </div>
      </div>
    </Layout>
  );
};

export default AboutUs;
