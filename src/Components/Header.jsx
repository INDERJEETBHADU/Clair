import React, { useState } from "react";
import { Container } from "react-bootstrap";
import nav_logo from "../assets/images/svg/Header_logo.svg";
import dropdown_logo from "../assets/images/svg/dropdown_logo.svg";

function Header() {
  const [show, setfirst] = useState(false);
  if (show === true) {
    document.body.classList.add("overflow_hidden");
  } else {
    document.body.classList.remove("overflow_hidden");
  }
  return (
    <>
      <div className=" bg-black">
        <div className=" nav_box w-100   d-flex align-items-center ">
          <Container>
            <div className=" d-flex align-items-center justify-content-between">
              <div className=" d-flex align-items-center  gap_12">
                <img
                  className=" cursor_pointer"
                  src={nav_logo}
                  alt="nav_logonav_logo"
                />
                <h2 className=" mb-0 cursor_pointer  ff-maro   fw-semibold text-32 lh-48 color-yellow ">
                  $CLAIR
                </h2>
              </div>
              <div className="  d-flex align-items-center gap_60">
                <ul
                  className={`${
                    show ? "end-0" : "right_100"
                  } mb-0  d-flex align-items-center gap_32 mobile-view   ff-maro fw-medium text-16 lh-24`}
                >
                  <li>
                    <a
                      onClick={() => {
                        setfirst(!show);
                      }}
                      className=" nav_link  color-grey"
                      href="#about"
                    >
                      About
                    </a>
                  </li>
                  <li>
                    <a
                      onClick={() => {
                        setfirst(!show);
                      }}
                      className=" nav_link color-grey"
                      href="#tokenomics"
                    >
                      Tokenomics
                    </a>
                  </li>
                  <li>
                    <a
                      onClick={() => {
                        setfirst(!show);
                      }}
                      className=" nav_link color-grey"
                      href="#audit"
                    >
                      Audit
                    </a>
                  </li>
                  <li>
                    <a
                      onClick={() => {
                        setfirst(!show);
                      }}
                      className=" nav_link color-grey"
                      href="#roadmap"
                    >
                      Roadmap
                    </a>
                  </li>
                  <li>
                    <a
                      onClick={() => {
                        setfirst(!show);
                      }}
                      className=" nav_link color-grey"
                      href="#whitepaper"
                    >
                      White Paper
                    </a>
                  </li>
                </ul>
                <div className="position-relative dropdown">
                  <img
                    src={dropdown_logo}
                    alt="Dropdown Logo"
                    className="cursor_pointer dropdown-toggle"
                  />
                  <div className="dropdown-menu">
                    <a className="dropdown-item" href="#profile">
                      Spanish
                    </a>
                    <a className="dropdown-item" href="#settings">
                      Hindi
                    </a>
                    <a className="dropdown-item" href="#logout">
                      German
                    </a>
                  </div>
                </div>
              </div>
              <div
                onClick={() => {
                  setfirst(!show);
                }}
                class="menu d-block d-lg-none z_9  "
              >
                <span></span>
                <span class="my-2"></span>
                <span></span>
              </div>
            </div>
          </Container>
        </div>
      </div>
    </>
  );
}

export default Header;
