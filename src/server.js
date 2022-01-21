const indexRoutes=require('./routes/index.routes')
const autoresRoutes=require('./routes/autores.routes');

const express=require('express');

const app=express();

app.set('port',process.env.API_PORT || 4000);

//Middlewares
app.use(express.json());

app.use(indexRoutes);
app.use(autoresRoutes);


module.exports=app;