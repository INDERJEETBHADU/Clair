import React from "react";
import { Container } from "react-bootstrap";
import roadmap_btm from "../assets/images/webp/roadmap_bottom_layer.webp";
import phase_1_btm from "../assets/images/svg/phase_1_svg.svg";
import phase_2_btm from "../assets/images/svg/phase_2_svg.svg";
import phase_3_btm from "../assets/images/svg/phase_3_svg.svg";

function Roadmap() {
  return (
    <>
      <div
        className="bg_img_roadmap position-relative overflow-x-hidden pb_78  mt_neg_2"
        id="roadmap"
      >
        <Container>
          <div className=" pt_44 ">
            <h2 className=" mb-0 mb-5 ff-maro fw-semibold text-48 lh-57 text-center  color-lightwhite">
              Roadmap
            </h2>
          </div>
          <div className=" d-flex mt_100   flex-wrap   justify-content-around">
            <div className="phase_box mb-5 mb-lg-0  mt_184">
              <h5 className=" mb-0 ff-maro fw-medium text-32 lh-48  text-white">
                Phase 1
              </h5>
              <div className="  d-flex align-items-center gap-3 mt-3">
                <div className="dot_phase"></div>
                <p className=" mb-0 ff-maro fw-medium text-16 lh-24 color-grey">
                  Team Recruitment
                </p>
              </div>
              <div className="  d-flex align-items-center gap-3 mt-2">
                <div className="dot_phase"></div>
                <p className=" mb-0 ff-maro fw-medium text-16 lh-24 color-grey">
                  Social Media
                </p>
              </div>
              <div className="  d-flex align-items-center gap-3 mt-2">
                <div className="dot_phase"></div>
                <p className=" mb-0 ff-maro fw-medium text-16 lh-24 color-grey">
                  Audit Smart Contract
                </p>
              </div>
              <div className="  d-flex align-items-center gap-3 mt-2">
                <div className="dot_phase"></div>
                <p className=" mb-0 ff-maro fw-medium text-16 lh-24 color-grey">
                  Whitepaper
                </p>
              </div>
              <div className="  d-flex align-items-center gap-3 mt-2">
                <div className="dot_phase"></div>
                <p className=" mb-0 ff-maro fw-medium text-16 lh-24 color-grey">
                  Presale Launch
                </p>
              </div>
              <div className="  d-flex align-items-center gap-3 mt-2">
                <div className="dot_phase"></div>
                <p className=" mb-0 ff-maro fw-medium text-16 lh-24 color-grey">
                  Community Growth
                </p>
              </div>
              <div className="  d-flex align-items-center gap-3 mt-2">
                <div className="dot_phase"></div>
                <p className=" mb-0 ff-maro fw-medium text-16 lh-24 color-grey">
                  AI Avatars Release
                </p>
              </div>
              <div className="phase_one_btm_pos d-none  d-sm-block position-absolute">
                <img src={phase_1_btm} alt="phase_1_btm" />
              </div>
            </div>
            <div className="phase_box   mt_78  h-100">
              <h5 className=" mb-0 ff-maro fw-medium text-32 lh-48  text-white">
                Phase 2
              </h5>
              <div className="  d-flex align-items-center gap-3 mt-3">
                <div className="dot_phase"></div>
                <p className=" mb-0 ff-maro fw-medium text-16 lh-24 color-grey">
                  Official Launch
                </p>
              </div>
              <div className="  d-flex align-items-center gap-3 mt-2">
                <div className="dot_phase"></div>
                <p className=" mb-0 ff-maro fw-medium text-16 lh-24 color-grey">
                  Burns 5%
                </p>
              </div>
              <div className="  d-flex align-items-center gap-3 mt-2">
                <div className="dot_phase"></div>
                <p className=" mb-0 ff-maro fw-medium text-16 lh-24 color-grey">
                  Major DEX & CEX Listings
                </p>
              </div>
              <div className="  d-flex align-items-center gap-3 mt-2">
                <div className="dot_phase"></div>
                <p className=" mb-0 ff-maro fw-medium text-16 lh-24 color-grey">
                  Coinmarketcap
                </p>
              </div>
              <div className="  d-flex align-items-center gap-3 mt-2">
                <div className="dot_phase"></div>
                <p className=" mb-0 ff-maro fw-medium text-16 lh-24 color-grey">
                  CoinGecko
                </p>
              </div>
              <div className="  d-flex align-items-center gap-3 mt-2">
                <div className="dot_phase"></div>
                <p className=" mb-0 ff-maro fw-medium text-16 lh-24 color-grey">
                  Influencers Marketing
                </p>
              </div>
              <div className="  d-flex align-items-center gap-3 mt-2">
                <div className="dot_phase"></div>
                <p className=" mb-0 ff-maro fw-medium text-16 lh-24 color-grey">
                  More AI Avatars Release
                </p>
              </div>
              <div className="phase_two_btm_pos d-none  d-sm-block position-absolute">
                <img src={phase_2_btm} alt="phase_1_btm" />
              </div>
            </div>
            <div className="phase_box  mt-5 mt-lg-0  h-100 ">
              <h5 className=" mb-0 ff-maro fw-medium text-32 lh-48  text-white">
                Phase 3
              </h5>
              <div className="  d-flex align-items-center gap-3 mt-3">
                <div className="dot_phase"></div>
                <p className=" mb-0 ff-maro fw-medium text-16 lh-24 color-grey">
                  Burns (5% quarterly)
                </p>
              </div>
              <div className="  d-flex align-items-center gap-3 mt-2">
                <div className="dot_phase"></div>
                <p className=" mb-0 ff-maro fw-medium text-16 lh-24 color-grey">
                  Rewards Program
                </p>
              </div>
              <div className="  d-flex align-items-center gap-3 mt-2">
                <div className="dot_phase"></div>
                <p className=" mb-0 ff-maro fw-medium text-16 lh-24 color-grey">
                  Multiple Partnerships
                </p>
              </div>
              <div className="  d-flex   align-items-baseline gap-3 mt-2">
                <div className="dot_phase"></div>
                <p className=" mb-0 ff-maro fw-medium text-16 lh-24 color-grey">
                  Create your own AI Avatar Voiceover.
                </p>
              </div>
              <div className="  d-flex    align-items-baseline gap-3 mt-2">
                <div className="dot_phase"></div>
                <p className=" mb-0 ff-maro fw-medium text-16 lh-24 color-grey">
                  AI Metaverse Avatar Play-to-Earn
                </p>
              </div>
              <div className="phase_three_btm_pos d-none d-md-block position-absolute">
                <img src={phase_3_btm} alt="phase_1_btm" />
              </div>
            </div>
          </div>
        </Container>
        <div className="roadmap_btm_layer_pos d-none d-xl-block     position-absolute">
          <img className=" w-100" src={roadmap_btm} alt="roadmap_btm" />
        </div>
        <div className=" ylw_ellips position-absolute  d-none d-md-block  roadmap_ylw_ellipse2"></div>
        <div className=" ylw_ellips position-absolute  d-none d-md-block  roadmap_ylw_ellipse_left"></div>
      </div>
    </>
  );
}

export default Roadmap;
