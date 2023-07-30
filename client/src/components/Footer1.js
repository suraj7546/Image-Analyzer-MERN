import React, { useState } from "react";
import Axios from "axios";

const Footer1 = ({ onFileChange, fetchData }) => {
  const [file, setFile] = useState(null);

  const upload = async (e) => {
    e.preventDefault();
    onFileChange(file);
    fetchData();
    let formData = new FormData();
    formData.append("ss", file);
    try {
      const response = await Axios.post("http://localhost:8000/", formData, {
        headers: {
          "Content-Type": "multipart/form-data",
        },
      });
      console.log("Success ", response);
    } catch (error) {
      console.error("Error uploading file:", error);
    }
  };

  return (
    <>
      <div className="footer">
        <input
          type="file"
          name="ss"
          onChange={(e) => {
            setFile(e.target.files[0]);
          }}
        ></input>
        <button onClick={(e) => upload(e)}>upload</button>
      </div>
    </>
  );
};

export default Footer1;
