import React, { useState } from "react";
import { Container } from "react-bootstrap";

import { Dollar, Tlogo, Diamond, Group, Watch } from "../Common/Icon";
import dino from "../assets/images/webp/dino_bg_img.png";

function About() {
  const [days, setDays] = useState(0);
  const [hours, setHours] = useState(0);
  const [minutes, setMinutes] = useState(0);
  const [seconds, setSeconds] = useState(0);
  const [tokensSold, setTokensSold] = useState(98212738);
  const [tokensRemaining, setTokensRemaining] = useState(80212738);

  const deadline = "July, 30, 2024";

  const getTime = () => {
    const time = Date.parse(deadline) - Date.now();

    setDays(Math.floor(time / (1000 * 60 * 60 * 24)));
    setHours(Math.floor((time / (1000 * 60 * 60)) % 24));
    setMinutes(Math.floor((time / 1000 / 60) % 60));
    setSeconds(Math.floor((time / 1000) % 60));
  };

  React.useEffect(() => {
    const interval = setInterval(() => getTime(deadline), 1000);

    return () => clearInterval(interval);
  }, []);
  const handleRangeChange = (e) => {
    const newValue = parseInt(e.target.value, 10);
    // Example calculation to update tokens sold and remaining
    const totalTokens = 100000000; // Example total tokens
    const newTokensSold = Math.floor((newValue / 100) * totalTokens);
    const newTokensRemaining = totalTokens - newTokensSold;

    setTokensSold(newTokensSold);
    setTokensRemaining(newTokensRemaining);
  };
  return (
    <>
      <div
        className=" bg-black mt_neg_2 position-relative overflow-hidden"
        id="about"
      >
        <Container>
          <div className=" d-flex   justify-content-center  pt-5">
            <div className="purchase_box">
              <div className=" d-flex  flex-column flex-md-row   gap_20">
                <div className="">
                  <div className=" d-flex align-items-center gap_28">
                    <div className="">
                      <p className=" mb-0 ff-maro  fw-normal text-16 lh-24  color-grey">
                        1 $Clair
                      </p>
                      <p className=" mb-0  ff-maro fw-bold text-16 lh-24 color-yellow mt-1">
                        0.00387 $
                      </p>
                    </div>
                    <div className="border_line"></div>
                    <div className="">
                      <p className=" mb-0 ff-maro  fw-normal text-16 lh-24  color-grey">
                        Raised Amount
                      </p>
                      <p className=" mb-0  ff-maro fw-bold text-16 lh-24 color-yellow mt-1">
                        332,123$
                      </p>
                    </div>
                  </div>
                  <div className=" mt-3 d-flex align-items-center gap_14">
                    <div className="icon_boxes  d-flex justify-content-center align-items-center">
                      <Dollar />
                    </div>
                    <div className="icon_boxes  d-flex justify-content-center align-items-center">
                      <Tlogo />
                    </div>
                    <div className="icon_boxes  d-flex justify-content-center align-items-center">
                      <Diamond />
                    </div>
                    <div className="icon_boxes  d-flex justify-content-center align-items-center">
                      <Group />
                    </div>
                  </div>
                  <button className=" mb-0 about_btn text-nowrap ff-maro fw-bold text-16 lh-24 text-center color-lightblack mt_16">
                    <span className=" position-relative z-1">Buy Now</span>
                  </button>
                </div>
                {/* function */}

                <div className=" max_w_404 w-100 ">
                  <div className="  d-flex w-100 align-items-center max_w_364  justify-content-between">
                    <div className="ms-3 position-relative">
                      <p className=" mb-0 ff-maro  fw-normal text-16 lh-24  color-grey">
                        Tokens are Sold
                      </p>
                      <p className=" mb-0  ff-maro fw-bold text-16 lh-24 color-yellow mt-1">
                        {tokensSold.toLocaleString()}
                      </p>
                      <div className=" position-absolute d-none d-lg-block range_left_svg">
                        <svg
                          width="42"
                          height="32"
                          viewBox="0 0 42 32"
                          fill="none"
                          xmlns="http://www.w3.org/2000/svg"
                        >
                          <path
                            d="M41.5 3.5H42V3H41.5V3.5ZM0.833333 3.5C0.833333 4.97276 2.02724 6.16667 3.5 6.16667C4.97276 6.16667 6.16667 4.97276 6.16667 3.5C6.16667 2.02724 4.97276 0.833333 3.5 0.833333C2.02724 0.833333 0.833333 2.02724 0.833333 3.5ZM42 31.5V3.5H41V31.5H42ZM41.5 3H3.5V4H41.5V3Z"
                            fill="#FEF538"
                          />
                        </svg>
                      </div>
                    </div>
                    <div className=" position-relative">
                      <p className=" mb-0 ff-maro  fw-normal text-16 lh-24  color-grey">
                        Tokens Remaining
                      </p>
                      <p className=" mb-0  ff-maro fw-bold text-16 lh-24  text-white   mt-1">
                        {tokensRemaining.toLocaleString()}
                      </p>
                      <div className=" position-absolute d-none d-lg-block range_right_svg ">
                        <svg
                          width="42"
                          height="32"
                          viewBox="0 0 42 32"
                          fill="none"
                          xmlns="http://www.w3.org/2000/svg"
                        >
                          <path
                            d="M41 3.5H41.5V3H41V3.5ZM0.333333 3.5C0.333333 4.97276 1.52724 6.16667 3 6.16667C4.47276 6.16667 5.66667 4.97276 5.66667 3.5C5.66667 2.02724 4.47276 0.833333 3 0.833333C1.52724 0.833333 0.333333 2.02724 0.333333 3.5ZM41.5 31.5V3.5H40.5V31.5H41.5ZM41 3H3V4H41V3Z"
                            fill="white"
                          />
                        </svg>
                      </div>
                    </div>
                  </div>
                  <div className=" translte_y_ax mt-3 is">
                    <input
                      className=" position-relative z-1  cursor_pointer"
                      type="range"
                      min="0"
                      max="100"
                      onChange={handleRangeChange}
                    />
                  </div>
                  <p className=" mb-0  ff-maro fw-normal text-14 lh-21  color-darkgrey">
                    Purchase $Clair fast until the price increase.
                  </p>
                  <div className="  d-flex flex-wrap  flex-lg-nowrap align-items-center gap_18 mt-3">
                    <div className=" d-flex align-items-center gap-2">
                      <Watch />
                      <p className=" mb-0 ff-maro fw-normal  text-16 lh-20  color-lightwhite max_w_80">
                        Price increase in
                      </p>
                    </div>
                    <div className="  d-flex  gap_12">
                      <div className="">
                        <div className="max_w_50 w-100">
                          <p className=" mb-0  text-center  ff-maro fw-normal text-14  lh-21 color-darkgrey">
                            Days
                          </p>
                        </div>
                        <div className="  d-flex  align-items-center gap-2">
                          <div className="timer_box  d-flex justify-content-center align-items-center">
                            <p
                              className=" mb-0 ff-maro fw-normal text-24 lh-36 color-darkgrey"
                              id="day"
                            >
                              {days < 10 ? "0" + days : days}
                            </p>
                          </div>
                          <div className=" d-flex flex-column  gap-2">
                            <div className=" dot_timer"></div>
                            <div className=" dot_timer"></div>
                          </div>
                        </div>
                      </div>
                      <div className="">
                        <div className="max_w_50 w-100">
                          <p className=" mb-0  text-center  ff-maro fw-normal text-14  lh-21 color-darkgrey">
                            Hours
                          </p>
                        </div>
                        <div className="  d-flex  align-items-center gap-2">
                          <div className="timer_box  d-flex justify-content-center align-items-center">
                            <p
                              id="hour"
                              className=" mb-0 ff-maro fw-normal text-24 lh-36 color-darkgrey"
                            >
                              {hours < 10 ? "0" + hours : hours}
                            </p>
                          </div>
                          <div className=" d-flex flex-column  gap-2">
                            <div className=" dot_timer"></div>
                            <div className=" dot_timer"></div>
                          </div>
                        </div>
                      </div>
                      <div className="">
                        <div className="max_w_50 w-100">
                          <p className=" mb-0  text-center  ff-maro fw-normal text-14  lh-21 color-darkgrey">
                            Mins
                          </p>
                        </div>
                        <div className="  d-flex  align-items-center gap-2">
                          <div className="timer_box  d-flex justify-content-center align-items-center">
                            <p
                              id="minute"
                              className=" mb-0 ff-maro fw-normal text-24 lh-36 color-darkgrey"
                            >
                              {minutes < 10 ? "0" + minutes : minutes}
                            </p>
                          </div>
                          <div className=" d-flex flex-column  gap-2">
                            <div className=" dot_timer"></div>
                            <div className=" dot_timer"></div>
                          </div>
                        </div>
                      </div>
                      <div className="">
                        <div className="max_w_50 w-100">
                          <p className=" mb-0  text-center  ff-maro fw-normal text-14  lh-21 color-darkgrey">
                            Secs
                          </p>
                        </div>
                        <div>
                          <div className="timer_box  d-flex justify-content-center align-items-center">
                            <p
                              id="second"
                              className=" mb-0 ff-maro fw-normal text-24 lh-36 color-darkgrey"
                            >
                              {seconds < 10 ? "0" + seconds : seconds}
                            </p>
                          </div>
                        </div>
                      </div>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>
          {/* about______++++++++++paragraph */}
          <div className=" pt_29 pb-5 overflow-hidden position-relative">
            <h2 className=" mb-0 ff-maro text-center  fw-semibold text-48 lh-57 text-white">
              About <span className=" color-yellow">$CLAIR</span>
            </h2>
            <p className=" mb-0 ff-maro  fw-normal mx-auto text-center mt-sm-3 mt-2 text-16 lh-24 color-darkgrey max_w_776">
              As you navigate through the avatars, you'll find each one has a
              unique voice, bringing laughter and a touch of sarcasm to the
              otherwise serious discussions in the crypto space.
            </p>
            <p className=" mb-0 ff-maro  fw-normal mx-auto text-center  mt_12 text-16 lh-24 color-darkgrey max_w_776">
              In a landscape where tensions can run high, Baby Sinclair’s memes
              serve as a reminder that, sometimes, the best way to confront
              challenges is with a good laugh.
            </p>
            <p className=" mb-0 ff-maro  fw-normal mx-auto text-center  mt_12 text-16 lh-24 color-darkgrey max_w_856">
              In this meme-driven world, laughter is not just a reaction; it's a
              powerful tool for change, and Baby Sinclair is wielding it with
              style. The bad players better watch out; the crypto defender is
              here, armed with memes and ready to act.
            </p>
            <div className=" d-flex justify-content-center   mt_16">
              <button className=" mb-0 ff-maro fw-bold text-16 lh-24   learn_more_btn">
                <span className=" position-relative z-2 color-lightblack">
                  Learn More
                </span>
              </button>
            </div>
            <img
              className=" position-absolute d-none d-lg-block  dino_pos"
              src={dino}
              alt="dino"
            />
          </div>
        </Container>
        <div className=" ylw_ellips position-absolute  d-none d-md-block  about_ylw_ellipse"></div>
      </div>
    </>
  );
}

export default About;
