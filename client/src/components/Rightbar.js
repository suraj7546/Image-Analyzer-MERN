import React from "react";
import { Route, Routes } from "react-router-dom";
import Abouts from "./Abouts";

const Rightbar = ({ data }) => {
  return (
    <>
      <Routes>
        <Route path="/about" element={<Abouts data={data} />} />
      </Routes>
    </>
  );
};

export default Rightbar;
