const express = require("express");
const app = express();
const mongoose = require("mongoose");
require("dotenv").config();
mongoose.connect(process.env.MONGO_URI);
const db = mongoose.connection;
const router = require("./router/reading");

db.on("error", (error) => console.log(error));
db.on("open", () => console.log("success"));

app.use(express.json());
app.use(express.static("public"));
app.use("/api/reading", router);
app.listen(3000, () => {
  console.log("server is listening");
});
