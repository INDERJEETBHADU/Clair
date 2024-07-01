import React from "react";
import { Row, Col, Container } from "react-bootstrap";
import arrow_icon_right from "../assets/images/svg/icon-park_dot.svg";
import tokenomics from "../assets/images/webp/tokenomics (1).webp";
import dog_img from "../assets/images/svg/dog.svg";
import plus_sign from "../assets/images/svg/plus_sign.svg";
import baby_scailr from "../assets/images/svg/baby_scailer.svg";

function Tokenomics() {
  return (
    <>
      <div
        className=" bg-black mt_neg_2 overflow-x-hidden position-relative"
        id="tokenomics"
      >
        <Container>
          <Row className=" pt_54">
            <Col lg={6}>
              <div className=" pt-sm-3 mt-md-1">
                <h2 className=" mb-0  ff-maro fw-semibold text-48 lh-57  color-lightwhite">
                  Tokenomics
                </h2>
              </div>
              <div className=" d-flex mt-sm-3 pt-1 gap-3">
                <p className=" mb-0 ff-maro fw-normal text-24 lh-36  color-grey">
                  Baby Sinclair
                </p>
                <button className=" mb-0  ff-maro fw-normal text-24 lh-36 color-yellow clair_btn">
                  $Clair
                </button>
              </div>
              <p className=" mb-0 ff-maro fw-medium text-16 lh-24 color-grey mt-sm-4 mt-2">
                Total Tokens
              </p>
              <h3 className=" mb-0 ff-maro  fw-semibold text-40  lh-48 color-yellow mt-1">
                100,000,000,000
              </h3>
              <div className="  mt-sm-3 pt-2  d-flex align-items-end  gap_12">
                <img src={arrow_icon_right} alt="arrow_icon_right" />
                <h4 className=" mb-0 ff-maro fw-medium text-24 lh-36 color-grey">
                  1%
                </h4>
                <p className=" mb-0 ff-maro fw-normal  text-16 lh-24 color-grey">
                  Presale
                </p>
              </div>
              <div className="  mt-2 pt-1  d-flex align-items-end gap_12  ">
                <img src={arrow_icon_right} alt="arrow_icon_right" />
                <h4 className=" mb-0 ff-maro fw-medium text-24 lh-36 color-grey">
                  3%
                </h4>
                <p className=" mb-0 ff-maro fw-normal  text-16 lh-24 color-grey">
                  Marketing
                </p>
              </div>
              <div className="  mt-2 pt-1  d-flex align-items-end gap_12  ">
                <img src={arrow_icon_right} alt="arrow_icon_right" />
                <h4 className=" mb-0 ff-maro fw-medium text-24 lh-36 color-grey">
                  5%
                </h4>
                <p className=" mb-0 ff-maro fw-normal  text-16 lh-24 color-grey">
                  Team - locked for 24 months
                </p>
              </div>
              <div className="  mt-2 pt-1  d-flex align-items-end gap_12  ">
                <img src={arrow_icon_right} alt="arrow_icon_right" />
                <h4 className=" mb-0 ff-maro fw-medium text-24 lh-36 color-grey">
                  10%
                </h4>
                <p className=" mb-0 ff-maro fw-normal  text-16 lh-24 color-grey">
                  Investors - locked for 24 months
                </p>
              </div>
              <div className="  mt-2 pt-1  d-flex align-items-end gap_12  ">
                <img src={arrow_icon_right} alt="arrow_icon_right" />
                <h4 className=" mb-0 ff-maro fw-medium text-24 lh-36 color-grey">
                  21%
                </h4>
                <p className=" mb-0 ff-maro fw-normal  text-16 lh-24 color-grey">
                  Exchange listings & liquidity
                </p>
              </div>
              <div className="  mt-2 pt-1  d-flex align-items-end gap_12  ">
                <img src={arrow_icon_right} alt="arrow_icon_right" />
                <h4 className=" mb-0 ff-maro fw-medium text-24 lh-36 color-grey">
                  60%
                </h4>
                <p className=" mb-0 ff-maro fw-normal  text-16 lh-24 color-grey">
                  Rewards and burns
                </p>
              </div>
            </Col>
            <Col lg={6}>
              <img
                className="  max_w_491 w-100"
                src={tokenomics}
                alt="tokenomics"
              />
            </Col>
          </Row>
          <div className=" ">
            <div className=" mt_12   pt-5  pb_46">
              <div className="baby_siclair_box">
                <div className=" d-flex flex-wrap justify-content-between align-items-center">
                  <div className="  d-flex  align-items-center gap_19">
                    <div className="dog_box d-flex align-items-center justify-content-center">
                      <img src={dog_img} alt="dog_img" />
                    </div>
                    <div className="">
                      <img src={plus_sign} alt="plus_sign" />
                    </div>
                    <div className="dog_box d-flex align-items-center justify-content-center">
                      <img src={baby_scailr} alt="baby_scailr" />
                    </div>
                  </div>
                  <div className="">
                    <p className=" mb-0 mt-1 mt-sm-0 ff-maro fw-semibold text-20 lh-30 color-lightwhite">
                      Baby Sinclair Stands Strong with the Shiba Inu Community
                    </p>
                    <p className=" mb-0 ff-maro fw-normal text-16 lh-24 color-grey mt-2">
                      10% of every $CLAIR token sold post-presale will be
                      dedicated to burning SHIB.
                    </p>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </Container>
        <div className=" ylw_ellips position-absolute  d-none d-md-block  takenomics_ylw_ellipse"></div>
      </div>
    </>
  );
}

export default Tokenomics;
