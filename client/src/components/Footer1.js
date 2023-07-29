import React from "react";
import FormData from "form-data";
import Axios from "axios";
import { useState } from "react";
const Footer1 = ({ onFileChange }) => {
  const [file, setFile] = useState(null);

  const upload = (e) => {
    e.preventDefault();
    onFileChange(file);
    let formData = new FormData();
    formData.append("ss", file);
    Axios.post("http://localhost:8000/", formData, {
      headers: {
        "Content-Type": "multipart/form-data",
      },
    }).then((res) => {
      console.log("Success ", res);
    });
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
        <button
          onClick={(e) => {
            upload(e);
          }}
        >
          upload
        </button>
      </div>
    </>
  );
};

export default Footer1;
