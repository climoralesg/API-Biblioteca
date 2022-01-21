const express=require('express');
const res = require('express/lib/response');
const connection=require('../database/database.js');

const router=express.Router();

//Consulta por todos los autores
router.get('/autores',(req, res)=>{
    connection.query("select * from autores",function(error,result,fields){

        if (error){
            throw error;
        }else{
            respuesta={
                error:false,
                codigo: 200,
                mensaje: "Datos de los Autores",    
                datos: result
            }
            res.json(respuesta);
        }         
    });
});

//Registrar un Autor
router.post('/autores',(req, res)=>{
    connection.query( `insert into autores (nombre) values ('${req.body.nombre}') `,function(error,result,fields){
        if (error){
            throw error;
        }else{
            respuesta={
                error:false,
                codigo: 200,
                mensaje: "Autor registrado",    
            }
            res.json(respuesta);
        }     
    })
});

//Consultar un autor a traves de su ID
router.get('/autores/:id',(req, res)=>{
    connection.query(`select * from autores where id='${req.params.id}'`,function(error,result,fields){
        if (error){
            throw error;
        }else{
            respuesta={
                error:false,
                codigo: 200,
                mensaje: "Datos de Autor",    
                datos: result[0]
            }
            res.json(respuesta);
        }    
    });
});

//Eliminar autor
router.delete('/autores/:id',(req,res)=>{
    connection.query(`delete from autores where id='${req.params.id}'`,function(error,result,fields){
        if (error){
            throw error;
        }else{
            respuesta={
                error:false,
                codigo: 200,
                mensaje: "Autor Eliminado"
            }
            res.json(respuesta);
        }    
    });
});

module.exports=router;