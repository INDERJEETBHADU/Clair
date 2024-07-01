import React, { useState } from "react";
import { Container } from "react-bootstrap";
import { CopyToClipboard } from "react-copy-to-clipboard";
import { ToastContainer, toast } from "react-toastify";
import "react-toastify/dist/ReactToastify.css";

function Address() {
  const [textToCopy, setTextToCopy] = useState(
    "0xFD1929755F73f974648daD00ab491a7C44a00eeD"
  );

  const onCopyText = () => {
    toast.success("Text copied to clipboard!");
  };

  return (
    <div
      className="bg_address_img bg_color_yellow mt_neg_2 position-relative"
      id="address"
    >
      <div className="adress_sec_padding">
        <Container>
          <h2 className="mb-0 ff-maro fw-semibold text-48 lh-57 text-center color-lightwhite">
            <span className="color-yellow">$CLAIR</span> Smart Contract Address
          </h2>
          <div className="d-flex justify-content-center">
            <div className="w-100 max_w_600">
              <form className="mt-4 d-flex">
                <input
                  value={textToCopy}
                  onChange={(e) => setTextToCopy(e.target.value)}
                  className="copy_input ff-maro fw-normal text-16 lh-24 color-grey"
                  type="text"
                  placeholder="0xFD1929755F73f974648daD00ab491a7C44a00eeD"
                />
                <CopyToClipboard text={textToCopy} onCopy={onCopyText}>
                  <button
                    type="button"
                    className="mb-0 ff-maro fw-bold text-16 lh-24 color-lightblack copy_btn"
                  >
                    Copy
                  </button>
                </CopyToClipboard>
              </form>
            </div>
          </div>
          <p className="mb-0 ff-maro mx-auto mt_16 fw-normal text-16 lh-24 text-center color-darkgrey max_w_806_para">
            Built on the Ethereum blockchain and powered by the most advanced AI
            technology, Baby Sinclair has the potential to make millions in both
            early stages and long-term investment. Our strategic burn system,
            which will burn millions of $CLAIR quarterly, aims to increase its
            value significantly. Don't miss out! Get in early and secure your
            chance to become the next millionaire.
          </p>
        </Container>
      </div>
      <ToastContainer />
      <div className="  ylw_ellips position-absolute d-none d-md-block adress_ellipse_pos"></div>
    </div>
  );
}

export default Address;
