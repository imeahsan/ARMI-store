import React, { useEffect } from "react";
import Image from "next/image";

//internal import
import Layout from "@layout/Layout";
import useGetSetting from "@hooks/useGetSetting";
import PageHeader from "@component/header/PageHeader";
import CMSkeleton from "@component/preloader/CMSkeleton";
import useUtilsFunction from "@hooks/useUtilsFunction";
import VideoPlayer from "@component/common/VideoPlayer";

const AboutUs = () => {
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

        {/* About Us  */}
        <div className="bg-gray-50 lg:py-20 py-10" id="team">
          <div className="max-w-screen-2xl mx-auto px-3 sm:px-10">
            <div className="relative flex flex-col sm:flex-row sm:items-end justify-between mb-8">
              <div className="max-w-2xl">
                <h3 className="text-xl lg:text-3xl mb-2 font-serif font-bold">
                  {showingTranslateValue(
                    storeCustomizationSetting?.about_us?.ceo_title
                  )}
                </h3>
                <p className="mt-2 md:mt-3 font-normal block text-base">
                  {showingTranslateValue(
                    storeCustomizationSetting?.about_us?.ceo_description
                  )}
                </p>
              </div>
            </div>
            <div className="flex justify-center">
              <div className="max-w-sm">
                <Image
                  width={420}
                  height={420}
                  src={
                    storeCustomizationSetting?.about_us?.ceo_img ||
                    "/team/team-1.jpg"
                  }
                  alt="ceo"
                  className="block rounded-lg"
                />
                <div className="py-4 text-center">
                  <h5 className="text-lg font-bold font-serif">
                    {showingTranslateValue(
                      storeCustomizationSetting?.about_us?.ceo_name
                    )}
                  </h5>
                  <span className="opacity-75 text-sm">
                    {showingTranslateValue(
                      storeCustomizationSetting?.about_us?.ceo_sub
                    )}
                  </span>
                </div>
                {/* CEO Message */}
                {storeCustomizationSetting?.about_us?.ceo_message && (
                  <div className="mt-6 p-4 bg-white rounded-lg shadow text-center">
                    <h6 className="font-serif font-semibold text-base mb-2">
                      {showingTranslateValue(
                        storeCustomizationSetting?.about_us?.ceo_message_title ||
                          "Message from CEO"
                      )}
                    </h6>
                    <p className="text-gray-700 text-sm">
                      {showingTranslateValue(
                        storeCustomizationSetting?.about_us?.ceo_message
                      )}
                    </p>
                  </div>
                )}
              </div>
            </div>
          </div>
        </div>
      </div>
    </Layout>
  );
};

export default AboutUs;
