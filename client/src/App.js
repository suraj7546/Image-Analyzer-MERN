import React, { useState, useEffect } from "react";
import { BrowserRouter, Route, Routes } from "react-router-dom";
import Navbar from "./components/Navbar";
import Body from "./components/Body";
import Footer1 from "./components/Footer1";
import Rightbar from "./components/Rightbar";

const App = () => {
  const [file, setFile] = useState(null);
  const [nData, setNData] = useState(null);
  const [colors, setColors] = useState(null);

  const handleFileChange = (selectedFile) => {
    setFile(selectedFile);
  };

  const fetchData = async () => {
    try {
      // Make a GET request to the server to fetch the JSON data
      const response = await fetch("http://localhost:8000/get-json");
      const data = await response.json();
      setNData(data); // Update the state with the fetched data
      // console.log(nData);
    } catch (error) {
      console.error("Error fetching JSON data:", error);
    }
  };
  const color = async () => {
    try {
      // Make a GET request to the server to fetch the JSON data
      const response = await fetch("http://localhost:8000/get-color-json");
      const data = await response.json();
      setColors(data); // Update the state with the  data
    } catch (error) {
      console.error("Error fetching JSON data:", error);
    }
  };

  return (
    <BrowserRouter>
      <Navbar />
      {console.log(file)}
      <Body image={file} data={nData} color={colors} />
      <Footer1
        onFileChange={handleFileChange}
        fetchData={fetchData}
        color={color}
      />
    </BrowserRouter>
  );
};

export default App;
