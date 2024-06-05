const express = require("express");
const mongoose = require("mongoose");
require("dotenv").config();
const indexRoutes = require("./routes/index.route");

const app = express();

// set the view engine to ejs
app.set("view engine", "ejs");
app.use(express.json());
app.use(express.urlencoded({extended:true}))

// for using public folder
app.use(express.static("public"));

// index page
app.use("/", indexRoutes);

mongoose.connect(process.env.MONGO_URL).then(() => {
  console.log("Connected to mongodb");
  app.listen(process.env.PORT, () => {
    console.log(`Server is running on port ${process.env.PORT}`);
  });
});
