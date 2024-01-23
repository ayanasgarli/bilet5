import React, { useRef, useState } from "react";
import { Swiper, SwiperSlide } from "swiper/react";
import "swiper/css";
import "swiper/css/navigation";
import { Navigation } from "swiper/modules";
import "./index.scss";
import Trending from "../Trending";
import { Helmet } from "react-helmet";
import Customer from "../Customer";

export default function Home() {
  return (
    <>
    <Helmet>
        <meta charSet="utf-8" />
        <title>Home</title>
        <link rel="icon" href="https://cdn-icons-png.flaticon.com/512/25/25694.png"/>
      </Helmet>
      <Swiper navigation={true} modules={[Navigation]} className="mySwiper">
        <SwiperSlide>
          <div className="swiper-img">
            <img
              src="https://preview.colorlib.com/theme/capitalshop/assets/img/hero/h1_hero1.jpg"
              alt="first image"
            />
          </div> 

          <div className="swiper-text">
            <h4>Fashion Sale</h4>
            <h2>Minimal Menz Style</h2>
            <p>
              Consectetur adipisicing elit. Laborum fuga incidunt <br />
              laboriosam voluptas iure, delectus dignissimos facilis <br />{" "}
              neque nulla earum.
            </p>
            <button>SHOP NOW</button>
          </div>
        </SwiperSlide>
        <SwiperSlide>
          <div className="swiper-img">
            <img
              src="https://preview.colorlib.com/theme/capitalshop/assets/img/hero/h1_hero2.jpg"
              alt="second image"
            />
          </div>

          <div className="swiper-text" style={{left: "70%"}}>
            <h4>Fashion Sale</h4>
            <h2>Minimal Menz Style</h2>
            <p>
              Consectetur adipisicing elit. Laborum fuga incidunt <br />
              laboriosam voluptas iure, delectus dignissimos facilis <br />{" "}
              neque nulla earum.
            </p>
            <button>SHOP NOW</button>
          </div>
        </SwiperSlide>
      </Swiper>

      <Trending/>
      <Customer/>
    </>
  );
}
