const { Router } = require("express");
const { getMessage } = require("../controllers/messageController");

const messages = [
  {
    text: "Hi there!",
    user: "Amando",
    added: new Date()
  },
  {
    text: "Hello World!",
    user: "Charles",
    added: new Date()
  }
];

const indexRouter = Router();

indexRouter.get("/", (req, res) => {
  res.render("index", { title: "Mini Messageboard", messages: messages})
});

indexRouter.get("/:idMessage", getMessage(messages));




// indexRouter.get("/:idMessage", (req, res) => {
//   const { idMessage } = req.params;
//   const message = messages[idMessage];
//   res.render("message", { message: message, idMessage: idMessage });
// })



module.exports = {indexRouter, messages};

