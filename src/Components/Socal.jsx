import React from "react";
import { Container } from "react-bootstrap";
import { Discord, Twiiter, TeleGramm } from "../Common/Icon";
import dino_social from "../assets/images/webp/social_dino.webp";

function Socal() {
  return (
    <>
      <div className=" bg-black mt_neg_2 overflow-hidden">
        <Container>
          <div className=" d-flex  pt_42  pb-4 mb-2 justify-content-center">
            <div className="social_large_box position-relative    social_bg_img">
              <h2 className=" mb-0 ff-maro fw-semibold text-48 text-white text-center lh-57">
                Our <span className=" color-yellow">Socials</span>
              </h2>
              <p className=" mb-0 ff-maro  fw-normal text-16 lh-24 text-center color-darkgrey mt-3">
                Join us on social media for exclusive giveaways and stay
                connected!
              </p>
              <div className=" pt-2">
                <p className=" mb-0 ff-maro fw-normal mt-4 text-20 lh-30 text-center color-yellow">
                  “Exciting Releases of 'Bad Players' Avatars Coming Soon: Be
                  Ready for the Fun!"
                </p>
              </div>
              <div className=" d-flex align-items-center gap-3 justify-content-center mt-4 pt-2">
                <div className="social_icons position-relative z-2 d-flex align-items-center justify-content-center">
                  <a
                    href="https://www.instagram.com/accounts/password/reset/"
                    target="_blank"
                  >
                    <Discord />
                  </a>
                </div>
                <div className="social_icons d-flex position-relative z-2 align-items-center justify-content-center">
                  <a href="https://twiiter.com/" target="_blank">
                    <Twiiter />
                  </a>
                </div>
                <div className="social_icons d-flex position-relative z-2 align-items-center justify-content-center">
                  <a href="https://telegram.com/" target="_blank">
                    <TeleGramm />
                  </a>
                </div>
              </div>
              <div className="dino_social_pos position-absolute">
                <img src={dino_social} alt="dino_social" />
              </div>
            </div>
          </div>
        </Container>
      </div>
    </>
  );
}

export default Socal;
