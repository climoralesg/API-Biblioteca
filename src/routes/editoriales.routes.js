const express=require('express');
const res = require('express/lib/response');
const connection=require('../database/database.js');

const router=express.Router();



//Consulta por todas las editoriales
router.get('/editoriales',(req, res)=>{
    connection.query("select * from editoriales",function(error,result,fields){

        if (error){
            throw error;
        }else{
            respuesta={
                error:false,
                codigo: 200,
                mensaje: "Datos de las Editoriales",    
                datos: result
            }
            res.json(respuesta);
        }         
    });
});

//Registrar una editorial
router.post('/editoriales',(req, res)=>{
    connection.query( `insert into editoriales (nombre,url) values ('${req.body.nombre}','${req.body.url}') `,function(error,result,fields){
        if (error){
            throw error;
        }else{
            respuesta={
                error:false,
                codigo: 200,
                mensaje: "Editorial registrada"
            }
            res.json(respuesta);
        }     
    })
});

//Consultar una editorial a traves de su ID
router.get('/editoriales/:id',(req, res)=>{
    connection.query(`select * from editoriales where id='${req.params.id}'`,function(error,result,fields){
        if (error){
            throw error;
        }else{
            respuesta={
                error:false,
                codigo: 200,
                mensaje: "Datos de Editorial",    
                datos: result[0]
            }
            res.json(respuesta);
        }    
    });
});

//Elimina una editorial
router.delete('/editoriales/:id',(req,res)=>{
    connection.query(`delete from editoriales where id='${req.params.id}'`,function(error,result,fields){
        if (error){
            throw error;
        }else{
            respuesta={
                error:false,
                codigo: 200,
                mensaje: "Editorial Eliminada"
            }
            res.json(respuesta);
        }    
    });
});

module.exports=router;