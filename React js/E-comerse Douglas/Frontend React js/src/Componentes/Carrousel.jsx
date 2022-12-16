import React from "react";
import { Swiper, SwiperSlide } from "swiper/react";
import { Navigation } from "swiper";
import "swiper/css";
import "swiper/css/pagination";
import "swiper/css/navigation";
export function Carrousel() {
  return (
    <>
      <Swiper navigation={true} modules={[Navigation]} className="mySwiper">
        <SwiperSlide>
          <img
            className="img"
            src="https://www.versace.com/on/demandware.static/-/Library-Sites-ver-shared-trans/default/dw0efd8305/images/homepage/holiday-hero-2-011222-desk.jpg"
            alt=""
          />
        </SwiperSlide>
        <SwiperSlide>
          <img
            className="img"
            src="https://www.versace.com/on/demandware.static/-/Library-Sites-ver-shared-trans/default/dw0efd8305/images/homepage/holiday-hero-2-011222-desk.jpg"
            alt=""
          />
        </SwiperSlide>
        <SwiperSlide>
          <img
            src="https://www.versace.com/on/demandware.static/-/Library-Sites-ver-shared-trans/default/dw0efd8305/images/homepage/holiday-hero-2-011222-desk.jpg"
            alt=""
            className="img"
          />
        </SwiperSlide>
      </Swiper>
    </>
  );
}
