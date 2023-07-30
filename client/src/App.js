import React, { useState, useEffect } from "react";
import { BrowserRouter, Route, Routes } from "react-router-dom";
import Navbar from "./components/Navbar";
import Body from "./components/Body";
import Footer1 from "./components/Footer1";
import Rightbar from "./components/Rightbar";

const App = () => {
  const [file, setFile] = useState(null);
  const [nData, setNData] = useState(null);

  const handleFileChange = (selectedFile) => {
    setFile(selectedFile);
  };

  const fetchData = async () => {
    try {
      // Make a GET request to the server to fetch the JSON data
      const response = await fetch("http://localhost:8000/get-json");
      const data = await response.json();
      setNData(data); // Update the state with the fetched data
    } catch (error) {
      console.error("Error fetching JSON data:", error);
    }
  };

  // Fetch data when the component mounts
  // useEffect(() => {
  //   fetchData();
  // }, []);

  return (
    <BrowserRouter>
      <Navbar />
      {/* {console.log(nData)} */}
      <Body image={file} data={nData} />
      <Footer1 onFileChange={handleFileChange} fetchData={fetchData} />
      <Rightbar />
    </BrowserRouter>
  );
};

export default App;
