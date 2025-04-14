const sqlite3 = require ('sqlite3').verbose();
const path = require('path');

const db = new sqlite3.Database(
    path.join (__dirname, 'grocery.db'),
    (err) => {
        if (err) {
            console.error('Error opening database.', err.message);
        } else {
            console.log('Connected to the SQLite Database.');
            db.run(`
                CREATE TABLE IF NOT EXISTS groceries (
                id INTEGER PRIMARY KEY AUTOINCREMENT,
                item TEXT NOT NULL
                )
            `, (err) => {
                if (err) {
                    console.error('Error creating groceries table', err.message);
                } else { 
                    console.log('Table is ready.');
                }
            });
        }
    }
);

module.exports = db;