import React from "react";
import Header from "./Header";
import { Container } from "react-bootstrap";
import hero_btm from "../assets/images/webp/hero-bottom.webp";
import car_btn from "../assets/images/svg/cart_btn.svg";
import hero_btm_layer from "../assets/images/webp/hero-bottom-layer.webp";
import mouse_pos_hero from "../assets/images/svg/,ouse_hero.svg";
function Hero() {
  return (
    <>
      <div className="bg_img_hero position-relative">
        <Header />
        <Container>
          <h2 className=" mb-0 ff-maro fw-bold mt-5  text-60 lh-72 text-center text-white">
            Presale is <span className=" color-yellow">Live</span>
          </h2>
          <p className=" mb-0 ff-maro  mt-3 fw-normal text-16 lh-24 text-center  color-lightgrey hero_para_max_w mx-auto">
            Led by the most advanced AI technology, with a unique burn system to
            potentially increase its value significantly. Secure your chance to
            become the next millionaire!
          </p>
          <div className=" d-flex justify-content-center mt-4 pt_11">
            <button className=" hero_btn mb-0  d-flex align-items-center gap-2  ">
              <span className=" position-relative z-2 ff-maro fw-bold text-16 lh-24 text-center color-lightblack">
                Buy $Clair{" "}
                <span className="  ">
                  <img src={car_btn} alt="car_btn" />
                </span>
              </span>
            </button>
          </div>
          <div className="  d-flex mb_neg_36 pt-4 pt-sm-0 justify-content-center">
            <img
              className=" hero_btm_wid_810   w-100"
              src={hero_btm}
              alt="hero_btm"
            />
          </div>
          <div className=" d-flex align-items-center   justify-content-center">
            <div className=" ">
              <img
                className=" hero_btm_layer w-100"
                src={hero_btm_layer}
                alt="hero_btm_layer"
              />
            </div>
          </div>
        </Container>
        <div className=" position-absolute d-none d-md-block mouse_pos_hero">
          <a href="#adress">
            <img
              className=" cursor_pointer"
              src={mouse_pos_hero}
              alt="mouse_img"
            />
          </a>
        </div>
        <div className="ylw_ellips position-absolute d-none d-md-block hero_ellipse_pos"></div>
      </div>
    </>
  );
}

export default Hero;
