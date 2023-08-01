const express = require("express");
const port = 8000;
const app = express();
const cors = require("cors");
const fileUpload = require("express-fileupload");

app.use(express.json());
app.use(cors());
app.use(fileUpload());
app.use("/uploads", express.static("uploads"));

const apiKey = "acc_7508cb3229eb530";
const apiSecret = "27ce40582e3a484c48e1dc9c0b4d0390";

// Endpoint to handle file upload
app.post("/", async (req, res) => {
  const file = await req.files.ss;
  const fileName = Date.now() + "_" + file.name;
  let uploadPath = __dirname + "/uploads/" + fileName;
  const fileUrl = `http://localhost:8000/uploads/${fileName}`;
  file.mv(uploadPath, (err) => {
    if (err) {
      return res.send(err);
    }

    res.send("Image uploaded and analyzed successfully.");
  });
  console.log(fileUrl);
});

// Endpoint to get JSON data from the Imagga API for tags
app.get("/get-json", async (req, res) => {
  let storedResponse = null;
  const imageUrl = ""; // Provide the URL of the image you want to analyze
  const url =
    "https://api.imagga.com/v2/tags?image_url=" + encodeURIComponent(imageUrl);

  try {
    const got = await import("got"); // Dynamic import instead of require()
    const response = await got.default(url, {
      username: apiKey,
      password: apiSecret,
    });
    storedResponse = JSON.parse(response.body);
    res.json(storedResponse);
  } catch (error) {
    console.log(error.response.body);
  }
});

// Endpoint to get JSON data from the Imagga API for colors
app.get("/get-color-json", async (req, res) => {
  let color = null;
  const imageUrl = ""; // Provide the URL of the image you want to analyze
  const url =
    "https://api.imagga.com/v2/colors?image_url=" +
    encodeURIComponent(imageUrl);

  try {
    const got = await import("got"); // Dynamic import instead of require()
    const response = await got.default(url, {
      username: apiKey,
      password: apiSecret,
    });
    color = JSON.parse(response.body);
    res.json(color);
    console.log(response.body);
  } catch (error) {
    console.log(error.response.body);
  }
});

// Endpoint to get JSON data from the Imagga API for safe (NSFW) content detection
app.get("/get-safe-json", async (req, res) => {
  let safe = null;
  const imageUrl = ""; // Provide the URL of the image you want to analyze
  const url =
    "https://api.imagga.com/v2/categories/nsfw_beta?image_url=" +
    encodeURIComponent(imageUrl);

  try {
    const got = await import("got"); // Dynamic import instead of require()
    const response = await got.default(url, {
      username: apiKey,
      password: apiSecret,
    });
    safe = JSON.parse(response.body);
    res.json(safe);
  } catch (error) {
    console.log(error.response.body);
  }
});

app.listen(port, (err) => {
  if (err) {
    console.log(err);
  }
  console.log("Server running on port " + port);
});
