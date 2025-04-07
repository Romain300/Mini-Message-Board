const customNotFoundError = require("../errors/customNotFoundError");

const getMessage = (messages) => {

    return (req, res) => {
        const { idMessage } = req.params;
        const message = messages[idMessage];

        if(!message) {
           throw new customNotFoundError("Message Not Found");
        }
        res.render("message", { message: message, idMessage: idMessage });
    };
};

module.exports = { getMessage };