import React from "react";
import "./leftbar.css";

const Leftbar = ({ image }) => {
  if (
    !image ||
    !(
      image instanceof Blob ||
      image instanceof File ||
      image instanceof MediaSource
    )
  ) {
    return (
      <div className="image-box">
        <img
          className="image"
          src="https://1.bp.blogspot.com/-Vd7e0FNcm-k/Xv7j8YIYRAI/AAAAAAAAAvE/B1R-kuAPlnopbLr6XhgViREGIQ2nx_i2wCLcBGAsYHQ/s1600/Preview%2BImage%2BBefore%2BUpload%2Bin%2BHTML%2BCSS%2B%2526%2BJavaScript.webp"
        />
      </div>
    );
  }
  return (
    <>
      <div className="image-box">
        <img
          className="image"
          src={URL.createObjectURL(image)}
          alt="Uploaded Image"
        />
      </div>
    </>
  );
};

export default Leftbar;
