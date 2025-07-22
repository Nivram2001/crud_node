const { Client } = require('pg');

// Create a new client instance
const client = new Client({
    user: 'postgres',
    host: 'localhost',
    database: 'API_StatsArena',
    password: '20Carvalho01*',
    port: 5432
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