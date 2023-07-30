const express = require("express");
const port = 8000;
const app = express();
const cors = require("cors");
const fileUpload = require("express-fileupload");

app.use(express.json());
app.use(cors());
app.use(fileUpload());
app.use("/uploads", express.static("uploads"));

let storedResponse = null;

app.post("/", async (req, res) => {
  const file = await req.files.ss;
  const fileName = Date.now() + "_" + file.name;
  let uploadPath = __dirname + "/uploads/" + fileName;
  const fileUrl = `http://localhost:8000/uploads/${fileName}`;
  console.log(fileUrl);

  // console.log(storedResponse);

  const apiKey = "acc_7508cb3229eb530";
  const apiSecret = "27ce40582e3a484c48e1dc9c0b4d0390";

  const imageUrl = "";
  // "https://docs.imagga.com/static/images/docs/sample/japan-605234_1280.jpg";
  const url =
    "https://api.imagga.com/v2/tags?image_url=" + encodeURIComponent(imageUrl);

  try {
    // Use dynamic import() instead of require()
    const got = await import("got");
    const response = await got.default(url, {
      username: apiKey,
      password: apiSecret,
    });
    // storedResponse = JSON.parse(response.body);

    console.log(response.body);
  } catch (error) {
    console.log(error.response.body);
  }
  file.mv(uploadPath, (err) => {
    if (err) {
      return res.send(err);
    }

    // After processing the file and getting the API response,
    // now send the success response to the client.
    res.send("Image uploaded and analyzed successfully.");
  });
});
app.get("/get-json", (req, res) => {
  // Sending the JSON data to the client
  storedResponse = {
    result: {
      tags: [
        {
          confidence: 61.4116096496582,
          tag: {
            en: "mountain",
          },
        },
        {
          confidence: 54.3507270812988,
          tag: {
            en: "landscape",
          },
        },
      ],
    },
    status: {
      text: "",
      type: "success",
    },
  };

  res.json(storedResponse);
});

app.listen(port, (err) => {
  if (err) {
    console.log(err);
  }
  console.log("runnig server");
});
