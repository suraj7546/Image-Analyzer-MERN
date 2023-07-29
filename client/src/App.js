import React from "react";

import { BrowserRouter, Route, Routes } from "react-router-dom";
import Navbar from "./components/Navbar.js";
import Body from "./components/Body.js";
import Footer1 from "./components/Footer1.js";
import { useState } from "react";
const App = () => {
  const [file, setFile] = useState(null);

  const handleFileChange = (selectedFile) => {
    setFile(selectedFile);
  };

  return (
    <BrowserRouter>
      <Navbar />
      <Body image={file} />
      <Routes>
        <Route path="/about" element={"as"} />
      </Routes>
      <Footer1 onFileChange={handleFileChange} />
    </BrowserRouter>
  );
};

export default App;
