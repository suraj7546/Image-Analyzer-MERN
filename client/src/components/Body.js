import React from "react";
import Leftbar from "./Leftbar";
import Rightbar from "./Rightbar";
import "./body.css";
const Body = ({ image, data }) => {
  return (
    <>
      <div className="body">
        <div className="left">
          <Leftbar image={image} />
        </div>
        <div className="right">
          <Rightbar data={data} />
        </div>
      </div>
    </>
  );
};

export default Body;
