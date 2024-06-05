const express = require("express");
const mongoose = require("mongoose");
require('dotenv').config();

const app = express();



// set the view engine to ejs
app.set("view engine", "ejs");


// index page
app.get("/", (req, res) => {
    res.render("index");
});

mongoose.connect(process.env.MONGO_URL).then(()=>{
    console.log("Connected to mongodb");
    app.listen(process.env.PORT,()=>{
        console.log(`Server is running on port ${process.env.PORT}`);
    
    })
})

 