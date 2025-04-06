const express = require("express");
const { indexRouter } = require("./routes/indexRouter");
const newRouter = require("./routes/newRouter");
const path = require("node:path");

const app = express();
app.set("views", path.join(__dirname, "views"));
app.set("view engine", "ejs");

const PORT = 4000;

app.use(express.urlencoded({ extended: true }));
app.use("/", indexRouter);
app.use("/new", newRouter);

app.listen(PORT, () => {
    console.log(`Currently lisenting on port ${PORT}`);
});

