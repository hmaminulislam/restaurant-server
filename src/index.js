const express = require("express");
const app = express();
const dotenv = require("dotenv").config();
const cors = require("cors");
const dbConnect = require("./utiles/dbConnect");
const Router = require("./app/modules/blog/blog.router");

// port 
const port = process.env.PORT || 4000;

// cors
app.use(cors());

// parse data
app.use(express.json());
app.use(express.urlencoded({ extended: true }));

// database connected
dbConnect();


// routes

app.use("/api/v1", Router)






app.get("/", (req, res) => {
  res.send("Restaurant server running...");
});

app.listen(port, () => {
  console.log(`Restaurant app port ${port}`);
});