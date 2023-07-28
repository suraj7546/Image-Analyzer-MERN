const mongoose = require("mongoose");

mongoose.connect("mongodb://127.0.0.1/mearn-analiyzer");

const db = mongoose.connection();

db.on("error", (err) => {
  console.log(err);
});

db.once("connection", () => {
  console.log("Ah, we have our first user!");
});

module.exports = db;
