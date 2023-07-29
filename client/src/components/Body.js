import React from "react";
import Leftbar from "./Leftbar";
import Rightbar from "./Rightbar";
import "./body.css";
const Body = ({ image }) => {
  return (
    <>
      <div className="body">
        <div className="left">
          <Leftbar image={image} />
        </div>
        <div className="right">
          <Rightbar />
        </div>
      </div>
    </>
  );
};

export default Body;
