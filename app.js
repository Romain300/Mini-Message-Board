const express = require("express");
const { indexRouter } = require("./routes/indexRouter");
const newRouter = require("./routes/newRouter");
const path = require("node:path");

const app = express();
app.set("views", path.join(__dirname, "views"));
app.set("view engine", "ejs");

const assetsPath = path.join(__dirname, "public");
app.use(express.static(assetsPath));

const PORT = 4000;

app.use(express.urlencoded({ extended: true }));
app.use("/new", newRouter);
app.use("/", indexRouter);


app.listen(PORT, () => {
    console.log(`Currently lisenting on port ${PORT}`);
});

