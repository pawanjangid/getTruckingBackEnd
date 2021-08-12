const { createPool } = require("mysql");

const pool = createPool({
    port:'3306',
    host:'database-1.ch8qa0e6nj94.us-east-2.rds.amazonaws.com',
    user:'admin',
    password:'pawan1234',
    database:'gettruckingdatabase',
    connectionLimit:10
});

module.exports = pool;
