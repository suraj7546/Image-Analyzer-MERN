import React from "react";
import "./leftbar.css";

// Functional component 'Leftbar' responsible for rendering the image display area
const Leftbar = ({ image }) => {
  // Check if 'image' is not available or not of the expected types (Blob, File, MediaSource)
  if (
    !image ||
    !(
      image instanceof Blob ||
      image instanceof File ||
      image instanceof MediaSource
    )
  ) {
    // If 'image' is not available or not of the expected types, render a default image
    return (
      <div className="image-box">
        <img
          className="image"
          src="https://1.bp.blogspot.com/-Vd7e0FNcm-k/Xv7j8YIYRAI/AAAAAAAAAvE/B1R-kuAPlnopbLr6XhgViREGIQ2nx_i2wCLcBGAsYHQ/s1600/Preview%2BImage%2BBefore%2BUpload%2Bin%2BHTML%2BCSS%2B%2526%2BJavaScript.webp"
          alt="Default Image"
        />
      </div>
    );
  }

  // If 'image' is available and of the expected types (Blob, File, MediaSource), render the uploaded image
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
