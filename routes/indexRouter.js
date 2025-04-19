const { Router } = require("express");
const { displayAllMessages } = require("../controllers/messageController");
const { displayMessage } = require("../controllers/messageController");

const indexRouter = Router()
indexRouter.get("/", displayAllMessages);
indexRouter.get("/:idMessage", displayMessage)

module.exports = { indexRouter };

