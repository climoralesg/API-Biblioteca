let mysql=require('mysql2');

require('dotenv').config();

let connection=mysql.createConnection({
    host:process.env.DB_HOST,
    user:process.env.DB_USER,
    password:process.env.DB_USER_PASSWORD,
    database:process.env.DB_NAME,
    port : 3306
})

connection.connect(function(err){
    
    if(err){
        console.log("Error",err);
        console.log("Fatal",err.fatal);
    }else{
        console.log("Conectado, Conexion funcionando correctamente");
    }
    
});