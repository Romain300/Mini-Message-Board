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
app.use("/app", indexRouter);


app.listen(PORT, () => {
    console.log(`Currently listening on port ${PORT}`);
}).on('error', (err) => {
    console.error('Error while starting the server:', err);
});


// const express = require("express");
// const app = express();

// const PORT = 4000;

// app.get("/", (req, res) => {
//   res.send("Hello from Railway!");
// });

// app.listen(PORT, () => {
//   console.log(`Listening on port ${PORT}`);
// });
