const pool = require("./pool");

async function getAllMessages() {
    const { rows } = await pool.query("SELECT * FROM messages");
    return rows;
};

async function getMessage(idMessage){
    const { rows } = await pool.query("SELECT * FROM messages WHERE id = $1", [idMessage]);
    return rows[0];
};

async function postMessage(message, username, date) {
    await pool.query("INSERT INTO messages (message, username, date) VALUES ($1, $2, $3)", [message, username, date]);
};

module.exports = {
    getAllMessages,
    getMessage,
    postMessage
};