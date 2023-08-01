import React from "react";
import Leftbar from "./Leftbar";
import Rightbar from "./Rightbar";
import "./body.css";
// Functional component 'Body' that represents the main content area of the application
const Body = ({ image, data, color, safe }) => {
  return (
    <>
      <div className="body">
        <div className="left">
          <Leftbar image={image} />
        </div>
        <div className="right">
          <Rightbar data={data} color={color} safe={safe} />
        </div>
      </div>
    </>
  );
};

export default Body;
