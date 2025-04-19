const customNotFoundError = require("../errors/customNotFoundError");
const { getAllMessages } = require("../db/queries");
const { getMessage } = require("../db/queries");

// const getMessage = (messages) => {

//     return (req, res) => {
//         const { idMessage } = req.params;
//         const message = messages[idMessage];

//         if(!message) {
//            throw new customNotFoundError("Message Not Found");
//         }
//         res.render("message", { message: message, idMessage: idMessage });
//     };
// };

async function displayAllMessages(req, res) {
    const messages = await getAllMessages();
    res.render("index", { title: "Mini Messageboard", messages: messages});
};

async function displayMessage(req, res) {
    const message = await getMessage(req.params.idMessage);
    res.render("message", { message: message });

};

module.exports = { 
    // getMessage,
    displayAllMessages,
    displayMessage
};

//add error message for no found id