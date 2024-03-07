import Image from "next/image";
import { useRouter } from "next/router";
import React, { useContext, useRef } from "react";
import { IoChevronBackOutline, IoChevronForward } from "react-icons/io5";
import { Navigation } from "swiper";
import "swiper/css";
import "swiper/css/navigation";
import "swiper/css/pagination";
import { Swiper, SwiperSlide } from "swiper/react";
import SwiperCore, { Autoplay } from "swiper";
// import {  Pagination, Navigation } from "swiper";

//internal import
import useAsync from "@hooks/useAsync";
import { SidebarContext } from "@context/SidebarContext";
import CategoryServices from "@services/CategoryServices";
import useUtilsFunction from "@hooks/useUtilsFunction";
import useTranslation from "next-translate/useTranslation";
import ProductCard from "@component/product/ProductCard";

const CategoryMainCarousel = ({ popularProducts, attributes }) => {
  const router = useRouter();
  SwiperCore.use([Autoplay]);

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
        spaceBetween={4}
        navigation={false}
        allowTouchMove={true}
        loop={true}
        autoplay={{
          delay: 2500,
          disableOnInteraction: false,
        }}
        breakpoints={{
          // when window width is >= 640px
          300: {
            width: 300,
            slidesPerView: 2.5,
          },
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
            slidesPerView: 3,
          },
          660: {
            width: 660,
            slidesPerView: 4,
          },

          // when window width is >= 768px
          768: {
            width: 768,
            slidesPerView: 4,
          },

          // when window width is >= 768px
          991: {
            width: 991,
            slidesPerView: 5,
          },

          // when window width is >= 768px
          1140: {
            width: 1140,
            slidesPerView: 5,
          },
          1680: {
            width: 1680,
            slidesPerView: 5,
          },
          1920: {
            width: 1680,
            slidesPerView: 5,
          },
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
            {popularProducts.map((product, i) => (
              <SwiperSlide key={i + 1} className=" px-1 md:px-4">
                <ProductCard
                  key={product._id}
                  product={product}
                  attributes={attributes}
                />
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
