import React, { useRef, useState } from "react";
import { Swiper, SwiperSlide } from "swiper/react";
import styles from "./ProductsPage.css";
import "swiper/css";
import "swiper/css/effect-cards";
import "swiper/css/navigation";
import "swiper/css/pagination";
import "swiper/css/scrollbar";
import { EffectCards } from "swiper";
import "swiper/css";
import "swiper/css/pagination";
import { Pagination } from "swiper";
import Iphone from "./images/juri.png";
import Client from "./images/client.png";
import Login from "./images/login.png";
import { Helmet } from "react-helmet-async";

function ProductsPage() {
  return (
    <>
      <Helmet>
        <title>Products - Valsco</title>
        <meta
          name="description"
          content="Discover our range of innovative products designed to enhance your experience. For all your software solutions, explore the future with Valsco."
        />{" "}
        // Add the description instead of lorem
        <link rel="canonical" href="/products" />
      </Helmet>

      <div id="productspage">
        <div className="lap">
          {" "}
          <div className="lap1">
            <div className="fulls">
              <div className="iphone1">
                <img className="mock1" src={Iphone} alt="" />
              </div>
              <div className="iphone2">
                <img className="mock1" src={Client} alt="" />
              </div>
              <div className="iphone3">
                <img className="mock1" src={Login} alt="" />
              </div>
            </div>
          </div>
        </div>
      </div>
    </>
  );
}

export default ProductsPage;
