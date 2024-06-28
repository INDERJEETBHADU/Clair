import React from "react";
import { Container } from "react-bootstrap";
import Accordion from "react-bootstrap/Accordion";

function Frequently() {
  return (
    <>
      <div
        className="Frequently_bg_img bg-black position-relative mt_neg_2 overflow-x-hidden"
        id="whitepaper"
      >
        <Container className=" py_59">
          <div className=" pt-3">
            <h3 className=" mb-0 ff-maro  fw-semibold text-center   text-48 lh-57 color-lightwhite">
              {" "}
              Frequently Asked <span className=" color-yellow">Questions</span>
            </h3>
          </div>
          <div className=" d-flex mt-5 pt-3 justify-content-center ">
            <div className=" max_w_800_accordion   w-100    ">
              <Accordion className=" d-flex flex-column gap-4">
                <Accordion.Item eventKey="0">
                  <Accordion.Header className=" mb-0 ff-maro fw-semibold text-16 lh-24 color-lightwhite">
                    WHAT IS $CLAIR?
                  </Accordion.Header>
                  <Accordion.Body className=" accordion_para_max_w_540 ff-maro  fw-normal text-16  lh-24 color-darkgrey">
                    Built on the Ethereum blockchain and powered by the most
                    advanced AI technology, Baby Sinclair has the potential to
                    make millions.
                  </Accordion.Body>
                </Accordion.Item>
                <Accordion.Item eventKey="1">
                  <Accordion.Header className=" mb-0 ff-maro fw-semibold text-16 lh-24 color-lightwhite">
                    Arcu in pellentesque sit odio.
                  </Accordion.Header>
                  <Accordion.Body className=" accordion_para_max_w_540 ff-maro  fw-normal text-16  lh-24 color-darkgrey">
                    Built on the Ethereum blockchain and powered by the most
                    advanced AI technology, Baby Sinclair has the potential to
                    make millions.
                  </Accordion.Body>
                </Accordion.Item>
                <Accordion.Item eventKey="2">
                  <Accordion.Header className=" mb-0 ff-maro fw-semibold text-16 lh-24 color-lightwhite">
                    Lorem gravida feugiat aliquet arcu porttitor sodales tellus
                    habitant sed.
                  </Accordion.Header>
                  <Accordion.Body className=" accordion_para_max_w_540 ff-maro  fw-normal text-16  lh-24 color-darkgrey">
                    Built on the Ethereum blockchain and powered by the most
                    advanced AI technology, Baby Sinclair has the potential to
                    make millions.
                  </Accordion.Body>
                </Accordion.Item>
                <Accordion.Item eventKey="3">
                  <Accordion.Header className=" mb-0 ff-maro fw-semibold text-16 lh-24 color-lightwhite">
                    Metus augue dictumst sit amet.
                  </Accordion.Header>
                  <Accordion.Body className=" accordion_para_max_w_540 ff-maro  fw-normal text-16  lh-24 color-darkgrey">
                    Built on the Ethereum blockchain and powered by the most
                    advanced AI technology, Baby Sinclair has the potential to
                    make millions.
                  </Accordion.Body>
                </Accordion.Item>
                <Accordion.Item eventKey="4">
                  <Accordion.Header className=" mb-0 ff-maro fw-semibold text-16 lh-24 color-lightwhite">
                    Elementum viverra tellus tincidunt nunc odio at id ipsum.
                  </Accordion.Header>
                  <Accordion.Body className=" accordion_para_max_w_540 ff-maro  fw-normal text-16  lh-24 color-darkgrey">
                    Built on the Ethereum blockchain and powered by the most
                    advanced AI technology, Baby Sinclair has the potential to
                    make millions.
                  </Accordion.Body>
                </Accordion.Item>
                <Accordion.Item eventKey="5">
                  <Accordion.Header className=" mb-0 ff-maro fw-semibold text-16 lh-24 color-lightwhite">
                    Sagittis morbi aliquam facilisis ornare lacus tempus massa.
                  </Accordion.Header>
                  <Accordion.Body className=" accordion_para_max_w_540 ff-maro  fw-normal text-16  lh-24 color-darkgrey">
                    Built on the Ethereum blockchain and powered by the most
                    advanced AI technology, Baby Sinclair has the potential to
                    make millions.
                  </Accordion.Body>
                </Accordion.Item>
                <Accordion.Item eventKey="6">
                  <Accordion.Header className=" mb-0 ff-maro fw-semibold text-16 lh-24 color-lightwhite">
                    Elementum at dui varius consequat fringilla.
                  </Accordion.Header>
                  <Accordion.Body className=" accordion_para_max_w_540 ff-maro  fw-normal text-16  lh-24 color-darkgrey">
                    Built on the Ethereum blockchain and powered by the most
                    advanced AI technology, Baby Sinclair has the potential to
                    make millions.
                  </Accordion.Body>
                </Accordion.Item>
              </Accordion>
            </div>
          </div>
        </Container>
        <div className=" ylw_ellips position-absolute  d-none d-md-block  faq_ellipse_pos"></div>
      </div>
    </>
  );
}

export default Frequently;
