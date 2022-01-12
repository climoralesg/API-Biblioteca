const IndexRoutes=require('./routes/index.routes')

const express=require('express');

const app=express();

app.set('port',process.env.API_PORT || 4000);

//Middlewares
app.use(express.json());

app.use(IndexRoutes);


module.exports=app;