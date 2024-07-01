import React from "react";

function Loader() {
  return (
    <div className="preloader-container d-flex gap-3">
      <h2 className=" mb-0 text-center ff-maro fw-semibold  text-60 lh-72 color-yellow">
        $CLAIR
      </h2>
      <div className="preloader"></div>
    </div>
  );
}

export default Loader;
