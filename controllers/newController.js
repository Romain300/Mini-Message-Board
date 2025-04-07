const newMessage = (messages) => {
    return (req, res) => {

        messages.push({ 
            text: req.body.messageText, 
            user: req.body.messageUser, 
            added: new Date() 
        });
    
        res.redirect("/");

    };
};

module.exports = { newMessage };