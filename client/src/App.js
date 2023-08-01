import React, { useState, useEffect } from "react";
import { BrowserRouter, Route, Routes } from "react-router-dom";
import Navbar from "./components/Navbar";
import Body from "./components/Body";
import Footer1 from "./components/Footer1";

const App = () => {
  // State variables to hold the selected file, fetched data, colors, and safe information
  const [file, setFile] = useState(null);
  const [nData, setNData] = useState(null);
  const [colors, setColors] = useState(null);
  const [safes, setSafe] = useState(null);

  // Function to handle changes to the selected file
  const handleFileChange = (selectedFile) => {
    setFile(selectedFile);
  };

  // Function to fetch JSON data from the server
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

  // Function to fetch color information from the server
  const color = async () => {
    try {
      // Make a GET request to the server to fetch the JSON data
      const response = await fetch("http://localhost:8000/get-color-json");
      const data = await response.json();
      setColors(data); // Update the state with the fetched data
    } catch (error) {
      console.error("Error fetching JSON data:", error);
    }
  };

  // Function to fetch safe information from the server
  const safe = async () => {
    try {
      // Make a GET request to the server to fetch the JSON data
      const response = await fetch("http://localhost:8000/get-safe-json");
      const data = await response.json();
      setSafe(data); // Update the state with the fetched data
    } catch (error) {
      console.error("Error fetching JSON data:", error);
    }
  };

  return (
    <BrowserRouter>
      {/* Rendering the 'Navbar' component */}
      <Navbar />

      {/* Rendering the 'Body' component and passing 'image', 'data', 'color', and 'safe' props */}
      <Body image={file} data={nData} color={colors} safe={safes} />

      {/* Rendering the 'Footer1' component and passing functions and props */}
      <Footer1
        onFileChange={handleFileChange}
        fetchData={fetchData}
        color={color}
        safe={safe}
      />
    </BrowserRouter>
  );
};

export default App;
