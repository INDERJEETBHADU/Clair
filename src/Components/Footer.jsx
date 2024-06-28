import React from "react";
import { Container } from "react-bootstrap";

function Footer() {
  return (
    <>
      <div className="  bg-black footer_bg_img mt_neg_2 position-relative overflow-x-hidden">
        <Container>
          <div className=" pt_54">
            <h2 className=" mb-0 text-center ff-maro fw-semibold  text-60 lh-72 color-yellow">
              $CLAIR
            </h2>
          </div>
          <div className="   d-flex justify-content-center">
            <div className=" mt-3 pt-1">
              <p className=" mb-0 ff-maro fw-normal text-16 lh-24 text-center  color-darkgrey max_w_626_footer">
                In this meme-driven world, laughter is not just a reaction; it's
                a powerful tool for chang and Baby Sinclair is wielding it with
                style. The bad players better watch out; the crypto defender is
                here, armed with memes and ready to act.
              </p>
            </div>
          </div>
          <ul className=" d-flex mb-0 flex-wrap justify-content-center ff-maro fw-medium  text-16 lh-24 text-center pt-5 align-items-center gap_32">
            <li>
              <a className=" nav_link color-lightgrey" href="#about">
                About
              </a>
            </li>
            <li>
              <a className=" nav_link color-lightgrey" href="#tokenomics">
                Tokenomics
              </a>
            </li>
            <li>
              <a className=" nav_link color-lightgrey" href="#audit">
                Audit
              </a>
            </li>
            <li>
              <a className=" nav_link color-lightgrey" href="#roadmap">
                Roadmap
              </a>
            </li>
            <li>
              <a className="nav_link color-lightgrey" href="#whitepaper">
                White Paper
              </a>
            </li>
            <li>
              <a className="nav_link color-lightgrey" href="">
                Privacy
              </a>
            </li>
            <li>
              <a className="nav_link color-lightgrey" href="">
                Cookies
              </a>
            </li>
            <li>
              <a className="nav_link color-lightgrey" href="">
                Disclaimer
              </a>
            </li>
          </ul>
          <div className=" pt-3  pb-4">
            <div className="footer_line mt-4"></div>
          </div>
        </Container>
        <div className=" ylw_ellips position-absolute  d-none d-md-block  footer_left_ellipse"></div>
      </div>
    </>
  );
}

export default Footer;
