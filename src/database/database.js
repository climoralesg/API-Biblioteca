let mysql=require('mysql2');
require('dotenv').config();

let connection=mysql.createPool({
    connectionLimit : 15,
    host:process.env.DB_HOST,
    user:process.env.DB_USER,
    password:process.env.DB_USER_PASSWORD,
    database:process.env.DB_NAME,
    port : process.env.DB_PORT
})

module.exports=connection;