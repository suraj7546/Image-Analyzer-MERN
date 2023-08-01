import React from "react";
import { Route, Routes } from "react-router-dom";
import Abouts from "./Abouts";
import Color from "./Color";
import Safe from "./Safe";

// Functional component 'Rightbar' responsible for rendering different routes based on the URL
const Rightbar = ({ data, color, safe }) => {
  return (
    <>
      <Routes>
        {/* Route for the '/about' path */}
        <Route path="/about" element={<Abouts data={data} />} />

        {/* Route for the '/color' path */}
        <Route path="/color" element={<Color color={color} />} />

        {/* Route for the '/safe' path */}
        <Route path="/safe" element={<Safe safe={safe} />} />
      </Routes>
    </>
  );
};

export default Rightbar;
