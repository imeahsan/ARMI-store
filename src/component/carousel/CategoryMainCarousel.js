import Image from "next/image";
import { useRouter } from "next/router";
import React, { useContext, useRef } from "react";
import { IoChevronBackOutline, IoChevronForward } from "react-icons/io5";
import { Autoplay, Navigation } from "swiper";
import "swiper/css";
import "swiper/css/navigation";
import "swiper/css/pagination";
import { Swiper, SwiperSlide } from "swiper/react";
import Link from "next/link";

//internal import
import useAsync from "@hooks/useAsync";
import { SidebarContext } from "@context/SidebarContext";
import CategoryServices from "@services/CategoryServices";
import useUtilsFunction from "@hooks/useUtilsFunction";
import useTranslation from "next-translate/useTranslation";

const CategoryMainCarousel = () => {
  const router = useRouter();

  const prevRef = useRef(null);
  const nextRef = useRef(null);

  const { showingTranslateValue } = useUtilsFunction();
  const { isLoading, setIsLoading } = useContext(SidebarContext);
  const { data, error } = useAsync(() => CategoryServices.getShowingCategory());

  // console.log('category',data)

  const handleCategoryClick = (id, categoryName) => {
    const category_name = categoryName
      ?.toLowerCase()
      ?.replace(/[^A-Z0-9]+/gi, "-");
    const url = `/search?category=${category_name}&_id=${id}`;
    router.push(url);
    setIsLoading(!isLoading);
  };
  const { t } = useTranslation();
  return (
    <>
      <Swiper
        onInit={(swiper) => {
          swiper.params.navigation.prevEl = prevRef.current;
          swiper.params.navigation.nextEl = nextRef.current;
          swiper.navigation.init();
          swiper.navigation.update();
        }}
        spaceBetween={8}
        navigation={false}
        allowTouchMove={true}
        loop={true}
        breakpoints={{
          // when window width is >= 640px

          375: {
            width: 375,
            slidesPerView: 2.5,
          },
          // when window width is >= 768px
          414: {
            width: 414,
            slidesPerView: 2.5,
          },
          // when window width is >= 768px
          640: {
            width: 640,
            slidesPerView: 2.5,
          },
          660: {
            width: 660,
            slidesPerView: 3.5,
          },

          // when window width is >= 768px
          768: {
            width: 768,
            slidesPerView: 3.5,
          },

          // when window width is >= 768px
          991: {
            width: 991,
            slidesPerView: 3.5,
          },

          // when window width is >= 768px
          1140: {
            width: 1140,
            slidesPerView: 3.5,
          },
          1680: {
            width: 1680,
            slidesPerView: 4.5,
          },
          1920: {
            width: 1680,
            slidesPerView: 4,
          },
        }}
        autoplay={{
          delay: 25000,
          disableOnInteraction: false,
        }}
        modules={[Navigation, Autoplay]}
        className="mySwiper category-slider "
      >
        {error ? (
          <p className="flex justify-center align-middle items-center m-auto text-xl text-red-500">
            <span> {error}</span>
          </p>
        ) : (
          <div className="px-10 mx-auto max-w-screen-xl   ">
            {data[0]?.children?.map((category, i) => (
              <SwiperSlide key={i + 1} className="">
                <div
                  onClick={
                    () => {}
                    // handleCategoryClick(category?._id, category.name)
                  }
                  className="bg-gray-50 lg:py-8     sm:px-4 mb-2 category-container"
                >
                  <div className="flex w-full h-full border shadow-md rounded-lg	 bg-gray-200   cursor-pointer  image-container">
                    <div className=" w-full justify-center	 items-center pb">
                      <div class="  relative h-72 lg:h-96">
                        {/* <!-- Text Overlay --> */}
                        <div class="absolute top-0 left-0 right-0 bottom-0 flex items-start mb-8 justify-center">
                          <div class="text-center ">
                            <h2 class="lg:text-2xl font-black mb-2  mt-4 uppercase italic">
                              {showingTranslateValue(category?.name)}
                            </h2>
                            <p class="text-sm text-gray-600 pl-2 pr-2">
                              {" "}
                              {showingTranslateValue(category?.description)}
                            </p>
                            <Image
                              src={category?.icon}
                              alt="category"
                              width={275}
                              height={275}
                              style={{
                                objectFit: "contain",
                              }}
                              sizes="100%"
                              className="mt-4 object-contain transition duration-150 ease-linear transform hover:-translate-y-2"
                            />

                            {/* </div> */}
                          </div>
                        </div>
                        <div class="absolute top-0  left-0 right-0 bottom-0  flex items-end mb-8 justify-center ">
                          <div class="text-center ">
                            <Link
                              href={`#`}
                              className="text-sm font-serif font-medium px-6 py-2 bg-red-500 text-center rounded-full text-white hover:bg-red-700"
                            >
                              {t("common:shopNow")}
                            </Link>
                          </div>
                        </div>
                      </div>
                    </div>
                  </div>
                  {/* <h3 className="text-xs text-gray-600 mt-2 font-serif group-hover:text-gray-500">
                    {showingTranslateValue(category?.name)}
                  </h3> */}
                </div>
              </SwiperSlide>
            ))}
          </div>
        )}
        <button ref={prevRef} className="prev drop-shadow-lg">
          <IoChevronBackOutline />
        </button>
        <button
          ref={nextRef}
          className="next drop-shadow-lg"
          // style={{ left: "110%", zIndex: 9999 }}
        >
          <IoChevronForward />
        </button>
      </Swiper>
    </>
  );
};

export default React.memo(CategoryMainCarousel);
