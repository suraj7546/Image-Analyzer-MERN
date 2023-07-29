// import React from "react";
// import FormData from "form-data";
// import Axios from "axios";
// import { useState } from "react";

// function Navbaasr() {
//   return (
//     <>
const [file, setFile] = useState(null);

const upload = (e) => {
  e.preventDefault();
  let formData = new FormData();
  formData.append("sss", file);
  Axios.post("http://localhost:8000/", formData, {
    headers: {
      "Content-Type": "multipart/form-data",
    },
  }).then((res) => {
    console.log("Success ", res);
  });
};
<div className="App">
  <input
    type="file"
    name="screenshot"
    onChange={(e) => {
      setFile(e.target.files[0]);
    }}
  />
  <button onClick={(e) => upload(e)}>Submit</button>
</div>;
//     </>
//   );
// }

// export default Navbar;
