const { Router } = require("express");
const { newMessage } = require("../controllers/newController")

const newRouter = Router();

newRouter.get("/", (req, res) => {
    res.render("form");
});

newRouter.post("/", newMessage);


module.exports = newRouter;