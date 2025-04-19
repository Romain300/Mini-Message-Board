const { postMessage } = require("../db/queries");

async function newMessage(req, res) {
    const message = req.body.messageText;
    const username = req.body.messageUser;
    const date = new Date();
    await postMessage(message, username, date);

    res.redirect("/");
};

module.exports = { newMessage };