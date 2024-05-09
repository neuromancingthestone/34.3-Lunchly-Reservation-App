/** Database for lunchly */

const { Client } = require("pg");

let DB_URI;

// If we're running in test "mode", use our test db
// Make sure to create both databases!
if (process.env.NODE_ENV === "test") {
  DB_URI = "lunchly_test";
} else {
  DB_URI = "lunchly";
}

let db = new Client({
  database: DB_URI,
  user: 'robleo',
  password: 'pass',
});

db.connect();

module.exports = db;
