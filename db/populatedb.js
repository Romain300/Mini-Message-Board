require('dotenv').config();
const { Client } = require("pg");

const now = new Date();
const SQL = `
CREATE TABLE IF NOT EXISTS messages (
    id INTEGER PRIMARY KEY GENERATED ALWAYS AS IDENTITY,
    message TEXT,
    username TEXT,
    date TEXT
);

INSERT INTO messages (message, username, date) VALUES ('Hi there!', 'Amando', '${now}');
INSERT INTO messages (message, username, date) VALUES ('Hello World!', 'Charles', '${now}');
`;

async function main() {
    console.log("seeding...");
    const client = new Client({
        connectionString: `postgresql://${process.env.DB_USER}:${process.env.DB_PASSWORD}@${process.env.DB_HOST}:${process.env.DB_PORT}/${process.env.DB_NAME}`,
    });
    await client.connect();
    await client.query(SQL);
    await client.end();
    console.log("done");
};

main();