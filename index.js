const connect=require('./src/database/database.js');
const app = require('./src/server.js');

async function main(){
    await app.listen(app.get('port'));
    console.log('Iniciando Organizacion Territorial Chilena');

    console.log('Autor: climoralesg');
    console.log('Correo: climoralesg@gmail.com');

    console.log('Servidor en puerto ', app.get('port'));
}

main();