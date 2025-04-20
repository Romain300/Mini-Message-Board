require('dotenv').config();
const express = require("express");
const { indexRouter } = require("./routes/indexRouter");
const newRouter = require("./routes/newRouter");
const path = require("node:path");
const { body, validationResult } = require("express-validator");

const app = express();

console.log("Starting the app...");
console.log("DATABASE_URL:", process.env.DATABASE_URL);
console.log("PORT:", process.env.PORT || 4000);

app.set("views", path.join(__dirname, "views"));
app.set("view engine", "ejs");

const assetsPath = path.join(__dirname, "public");
app.use(express.static(assetsPath));

const PORT = 4000;

app.use(express.urlencoded({ extended: true }));
app.get("/favicon.ico", (req, res) => res.status(204)); 
app.use("/new", newRouter);
app.use("/", indexRouter);


app.listen(PORT, '0.0.0.0', () => {
  console.log(`Listening on port ${PORT}`);
});

