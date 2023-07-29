import React from "react";

const Leftbar = ({ image }) => {
  if (
    !image ||
    !(
      image instanceof Blob ||
      image instanceof File ||
      image instanceof MediaSource
    )
  ) {
    return <div>No image available.</div>;
  }
  return (
    <>
      <img
        src={URL.createObjectURL(image)}
        alt="Uploaded Image"
        style={{ maxWidth: "100%" }}
      />
      <div>left bar :{console.log(image)}</div>
    </>
  );
};

export default Leftbar;
