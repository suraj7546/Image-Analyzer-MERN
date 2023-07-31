import React from "react";
import { Route, Routes } from "react-router-dom";
import Abouts from "./Abouts";
import Color from "./Color";

const Rightbar = ({ data, color }) => {
  return (
    <>
      <Routes>
        <Route path="/about" element={<Abouts data={data} />} />
        <Route path="/color" element={<Color color={color} />} />
      </Routes>
    </>
  );
};

export default Rightbar;
