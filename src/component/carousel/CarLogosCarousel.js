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

import useAsync from "@hooks/useAsync";
import { SidebarContext } from "@context/SidebarContext";
import CategoryServices from "@services/CategoryServices";
import useUtilsFunction from "@hooks/useUtilsFunction";
import useTranslation from "next-translate/useTranslation";
import ProductCard from "@component/product/ProductCard";
import CarLogoCard from "@component/product/CarLogoCard";

const CarLogosCarousel = () => {
  SwiperCore.use([Autoplay]);

  const prevRef = useRef(null);
  const nextRef = useRef(null);
 let logos = ['/ford.png', '/mazda.png','/6.png', '/8.png','/9.png', '/daewoo.png','/fiat.png', '/gmc.png', '/wolks.png', '/toyota.png'];
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

          <div className="px-10 mx-auto max-w-screen-xl   ">
            {logos.map((logo, i) => (
              <SwiperSlide key={i + 1} className=" px-1 md:px-4">
                <CarLogoCard
                  key={i}
                  logo ={logo}

                />
              </SwiperSlide>
            ))}
          </div>

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

export default React.memo(CarLogosCarousel
);
