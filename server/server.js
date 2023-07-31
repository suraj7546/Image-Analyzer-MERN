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

  const apiKey = "acc_7508cb3229eb530";
  const apiSecret = "27ce40582e3a484c48e1dc9c0b4d0390";

  const imageUrl =
    "https://docs.imagga.com/static/images/docs/sample/japan-605234_1280.jpg";
  const url =
    "https://api.imagga.com/v2/tags?image_url=" + encodeURIComponent(imageUrl);

  try {
    // Use dynamic import() instead of require()
    const got = await import("got");
    const response = await got.default(url, {
      username: apiKey,
      password: apiSecret,
    });
    storedResponse = JSON.parse(response.body);

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
  // Sending the JSON data to the

  res.json(storedResponse);
});

app.get("/get-color-json", (req, res) => {
  // Sending the JSON data to the client
  const color = {
    result: {
      colors: {
        background_colors: [
          {
            b: 47,
            closest_palette_color: "light bronze",
            closest_palette_color_html_code: "#8c5e37",
            closest_palette_color_parent: "skin",
            closest_palette_distance: 1.70506228322597,
            g: 92,
            html_code: "#8c5c2f",
            percent: 48.0033950805664,
            r: 140,
          },
          {
            b: 146,
            closest_palette_color: "cerulean",
            closest_palette_color_html_code: "#0074a8",
            closest_palette_color_parent: "blue",
            closest_palette_distance: 5.53350780052479,
            g: 116,
            html_code: "#467492",
            percent: 39.0454025268555,
            r: 70,
          },
          {
            b: 30,
            closest_palette_color: "dark bronze",
            closest_palette_color_html_code: "#542e0c",
            closest_palette_color_parent: "skin",
            closest_palette_distance: 5.47689735887696,
            g: 48,
            html_code: "#4f301e",
            percent: 12.9512014389038,
            r: 79,
          },
        ],
        color_percent_threshold: 1.75,
        color_variance: 36,
        foreground_colors: [
          {
            b: 147,
            closest_palette_color: "larkspur",
            closest_palette_color_html_code: "#6e7e99",
            closest_palette_color_parent: "blue",
            closest_palette_distance: 8.60114706674971,
            g: 125,
            html_code: "#577d93",
            percent: 52.3429222106934,
            r: 87,
          },
          {
            b: 145,
            closest_palette_color: "pewter",
            closest_palette_color_html_code: "#84898c",
            closest_palette_color_parent: "grey",
            closest_palette_distance: 1.75501013175431,
            g: 142,
            html_code: "#898e91",
            percent: 30.0293598175049,
            r: 137,
          },
          {
            b: 42,
            closest_palette_color: "brownie",
            closest_palette_color_html_code: "#584039",
            closest_palette_color_parent: "brown",
            closest_palette_distance: 4.99189248709017,
            g: 58,
            html_code: "#593a2a",
            percent: 17.6277160644531,
            r: 89,
          },
        ],
        image_colors: [
          {
            b: 146,
            closest_palette_color: "cerulean",
            closest_palette_color_html_code: "#0074a8",
            closest_palette_color_parent: "blue",
            closest_palette_distance: 7.85085588656478,
            g: 121,
            html_code: "#547992",
            percent: 48.3686981201172,
            r: 84,
          },
          {
            b: 46,
            closest_palette_color: "light bronze",
            closest_palette_color_html_code: "#8c5e37",
            closest_palette_color_parent: "skin",
            closest_palette_distance: 3.05634270891355,
            g: 86,
            html_code: "#83562e",
            percent: 47.9353446960449,
            r: 131,
          },
          {
            b: 46,
            closest_palette_color: "navy blue",
            closest_palette_color_html_code: "#2b2e43",
            closest_palette_color_parent: "navy blue",
            closest_palette_distance: 6.62790662069936,
            g: 27,
            html_code: "#1f1b2e",
            percent: 3.60131478309631,
            r: 31,
          },
        ],
        object_percentage: 20.790994644165,
      },
    },
    status: {
      text: "",
      type: "success",
    },
  };

  res.json(color);
});

app.listen(port, (err) => {
  if (err) {
    console.log(err);
  }
  console.log("runnig server");
});
