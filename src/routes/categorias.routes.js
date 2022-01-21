const express=require('express');
const res = require('express/lib/response');
const connection=require('../database/database.js');

const router=express.Router();

//Consulta por todas las categorias
router.get('/categorias',(req, res)=>{
    connection.query("select * from categorias",function(error,result,fields){

        if (error){
            throw error;
        }else{
            respuesta={
                error:false,
                codigo: 200,
                mensaje: "Datos de las Categorias",    
                datos: result
            }
            res.json(respuesta);
        }         
    });
});

//Registrar una Categoria
router.post('/categorias',(req, res)=>{
    connection.query( `insert into categorias (nombre) values ('${req.body.nombre}') `,function(error,result,fields){
        if (error){
            throw error;
        }else{
            respuesta={
                error:false,
                codigo: 200,
                mensaje: "Categoria registrada"
            }
            res.json(respuesta);
        }     
    })
});

//Consultar una categoria a traves de su ID
router.get('/categorias/:id',(req, res)=>{
    connection.query(`select * from categorias where id='${req.params.id}'`,function(error,result,fields){
        if (error){
            throw error;
        }else{
            respuesta={
                error:false,
                codigo: 200,
                mensaje: "Datos de Categoria",    
                datos: result[0]
            }
            res.json(respuesta);
        }    
    });
});

//Elimina una Categoria
router.delete('/categorias/:id',(req,res)=>{
    connection.query(`delete from categorias where id='${req.params.id}'`,function(error,result,fields){
        if (error){
            throw error;
        }else{
            respuesta={
                error:false,
                codigo: 200,
                mensaje: "Categoria Eliminado"
            }
            res.json(respuesta);
        }    
    });
});

module.exports=router;