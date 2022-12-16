import React from "react";
import { Swiper, SwiperSlide } from "swiper/react";

import "swiper/css";
import "swiper/css/pagination";
import "swiper/css/navigation";

import { Pagination, Navigation } from "swiper";
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
      {/* <MDBCarousel showIndicators showControls fade className="carrousel">
        <MDBCarouselItem
          className="img"
          itemId={1}
          src="https://www.versace.com/on/demandware.static/-/Library-Sites-ver-shared-trans/default/dw0efd8305/images/homepage/holiday-hero-2-011222-desk.jpg"
          alt="..."
        >
          <h5>First slide label</h5>
          <p>Nulla vitae elit libero, a pharetra augue mollis interdum.</p>
        </MDBCarouselItem>

        <MDBCarouselItem
          className="img"
          itemId={2}
          src="https://img.hollisterco.com/is/image/anf/hco_HP_D_20221208_CozyJeans_DadJeans_WW_R.png"
          alt="..."
        >
          <h5>Second slide label</h5>
          <p>Lorem ipsum dolor sit amet, consectetur adipiscing elit.</p>
        </MDBCarouselItem>

        <MDBCarouselItem
          className="img"
          itemId={3}
          src="https://www.thenorthface.com/content/publish/caas/v1/media/274740/data/c19e4bf118506ae8e2b2a3d7706e299f/221230-hp-hero-1-item-d.jpg"
          alt="..."
        >
          <h5>Third slide label</h5>
          <p>
            Praesent commodo cursus magna, vel scelerisque nisl consectetur.
          </p>
        </MDBCarouselItem>
      </MDBCarousel> */}
    </>
  );
}
