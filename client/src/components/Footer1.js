import React, { useState } from "react";
import Axios from "axios";
import "./footer.css";

const Footer1 = ({ onFileChange, fetchData, color, safe }) => {
  const [file, setFile] = useState(null);

  // Function to handle file upload
  const upload = async (e) => {
    e.preventDefault();

    // Call the functions passed as props to handle data fetching
    onFileChange(file);
    fetchData();
    color();
    safe();

    // Create a new FormData instance to send the file
    let formData = new FormData();
    formData.append("ss", file);

    try {
      // Make a POST request to the server to upload the file
      const response = await Axios.post("http://localhost:8000/", formData, {
        headers: {
          "Content-Type": "multipart/form-data",
        },
      });
    } catch (error) {
      console.error("Error uploading file:", error);
    }
  };

  return (
    <>
      <div className="footer">
        {/* Input element to choose a file */}
        <input
          type="file"
          name="ss"
          onChange={(e) => {
            setFile(e.target.files[0]); // Update the file state with the selected file
          }}
        ></input>
        {/* Button to trigger the file upload */}
        <button onClick={(e) => upload(e)}>upload</button>
      </div>
    </>
  );
};

export default Footer1;
