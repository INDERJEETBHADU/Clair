import React from "react";
import { Row, Col, Container } from "react-bootstrap";
import secure_img from "../assets/images/webp/secure_img.webp";
import slide_1 from "../assets/images/svg/slide_1.svg";
import slide_2 from "../assets/images/svg/slide_2.svg";
import slide_3 from "../assets/images/svg/slide_3.svg";
import slide_4 from "../assets/images/svg/slide_4.svg";
import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";
import Slider from "react-slick";

function Secure() {
  var settings = {
    dots: false,
    infinite: true,
    autoplay: true,
    arrows: false,
    speed: 3000,
    autoplaySpeed: 0,
    slidesToShow: 1.5,
    cssEase: "linear",
    responsive: [
      {
        breakpoint: 1200,
        settings: {
          slidesToShow: 1.5,
          slidesToScroll: 1.5,
        },
      },
      {
        breakpoint: 992,
        settings: {
          slidesToShow: 1.5,
          slidesToScroll: 1.5,
        },
      },
      {
        breakpoint: 820,
        settings: {
          slidesToShow: 1.5,
          slidesToScroll: 1.5,
        },
      },

      {
        breakpoint: 600,
        settings: {
          slidesToShow: 1,
          slidesToScroll: 1,
        },
      },
    ],
  };
  return (
    <>
      <div
        className="secure_bg_img  overflow-hidden mt_neg_2 bg_color_yellow position-relative"
        id="audit"
      >
        <Container>
          <Row className=" pt_45 pb_43">
            <Col className=" d-flex   justify-content-center" lg={6}>
              <img src={secure_img} alt="secure_img" />
            </Col>
            <Col lg={6} className=" pt-4 pt-md-0">
              <p className=" mb-0 ff-maro fw-normal text-20 lh-30 color-grey">
                Rest easy knowing that $CLAIR is{" "}
              </p>
              <h4 className=" mb-0 ff-maro fw-semibold text-32 lh-48 color-yellow mt-2">
                Fully Audited and 100% Secure.
              </h4>
              <p className=" mb-0 ff-maro fw-normal text-20 lh-30 color-grey mt-2">
                Zero Room for Rug Pulls: Invest with Confidence.
              </p>
              <div className=" pt-2 mt-3">
                <button className=" mb-0 audit_btn ">
                  <span className=" ff-maro fw-bold text-16 lh-24 text-center color-lightblack position-relative z-1">
                    Audit
                  </span>
                </button>
              </div>
            </Col>
          </Row>
          <div className=" pb-5">
            <div className="divider_line_secure"></div>
          </div>
          <Row className=" pb_50">
            <Col lg={6} className=" d-flex justify-content-center">
              <div className="">
                <h3 className="  mb-0 ff-maro fw-semibold text-32 lh-48  color-lightwhite">
                  Listing on{" "}
                  <span className=" color-yellow">Major Exchanges</span>
                </h3>
                <p className=" mb-0 ff-maro fw-normal max_w_475 text-20 lh-30 mt-3 color-grey">
                  Baby Sinclair’s Team is in action to secure the{" "}
                  <span className=" color-yellow">$CLAIR</span> listing on major
                  exchanges. Exciting milestones ahead.
                </p>
              </div>
            </Col>
            <Col lg={6} className=" pt-5 pt-md-0">
              <div className=" d-flex justify-content-center">
                <div className="slider_box overflow-hidden">
                  <Slider {...settings}>
                    <div className="slider_inner_box">
                      <img src={slide_1} alt="slide_1" />
                    </div>
                    <div className="slider_inner_box">
                      <img src={slide_2} alt="slide_1" />
                    </div>
                    <div className="slider_inner_box">
                      <img src={slide_3} alt="slide_1" />
                    </div>
                    <div className="slider_inner_box">
                      <img src={slide_4} alt="slide_1" />
                    </div>
                  </Slider>
                  <div className=" d-flex gap-3 mt-4">
                    <div className="slider_btm_line"></div>
                    <div className="slider_btm_line_small "></div>
                    <div className="slider_btm_line_last "></div>
                  </div>
                </div>
              </div>
            </Col>
          </Row>
        </Container>
        <div className=" ylw_ellips position-absolute  d-none d-md-block  roadmap_ylw_ellipse"></div>
      </div>
    </>
  );
}

export default Secure;
