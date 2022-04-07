const app = require('./src/server.js');

async function main(){
    await app.listen(app.get('port'));
    console.log('Iniciando Api Biblioteca');

    console.log('Autor: climoralesg');
    console.log('Correo: climoralesg@gmail.com');

}

main();