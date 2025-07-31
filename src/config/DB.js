const { Client } = require('pg');
require('dotenv').config(); // Load environment variables from .env file

// Create a new client instance
const client = new Client({
    user: process.env.USER,
    host: process.env.HOST,
    database: process.env.DATABASE,
    password: process.env.PASSWORD,
    port: process.env.PORT
})


// Connect to the database
client.connect()
    .then(() => {
        console.log('Connected to PostgreSQL database');
    })
    .catch(err => {
        console.log('Error connecting to PostgreSQL database', err);
    })

module.exports = client;