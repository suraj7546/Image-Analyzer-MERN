const express = require("express");
const port = 8000;
const app = express();
const cors = require("cors");
const fileUpload = require("express-fileupload");

app.use(express.json());
app.use(cors());
app.use(fileUpload());

app.post("/", async (req, res) => {
  const file = await req.files.ss;
  const fileName = Date.now() + "_" + file.name;
  let uploadPath = __dirname + "/uploads/" + fileName;
  file.mv(uploadPath, (err) => {
    if (err) {
      return res.send(err);
    }
  });

  // console.log(fileName.ss.name);
  res.send("sa");
});
// app.get("/", async (req, res) => {
//   const fileName = res.files;
//   res.send("as");
// });

app.listen(port, (err) => {
  if (err) {
    console.log(err);
  }
  console.log("runnig server");
});
