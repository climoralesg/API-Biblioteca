const express=require('express');
const res = require('express/lib/response');
const connection=require('../database/database.js');

const router=express.Router();

//Consulta por todas las categorias
router.get('/categories',(req, res)=>{
    connection.query("select * from categories",function(error,result,fields){

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
router.post('/categories',(req, res)=>{
    connection.query( `insert into categories (name) values ('${req.body.name}') `,function(error,result,fields){
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
router.get('/categories/:id',(req, res)=>{
    connection.query(`select * from categories where id='${req.params.id}'`,function(error,result,fields){
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
router.delete('/categories/:id',(req,res)=>{
    connection.query(`delete from categories where id='${req.params.id}'`,function(error,result,fields){
        if (error){
            throw error;
        }else{
            respuesta={
                error:false,
                codigo: 200,
                mensaje: "Categoria Eliminada"
            }
            res.json(respuesta);
        }    
    });
});

/*Editar un autor */
router.put(`/categories/:id`,(req,res)=>{
    connection.query(`UPDATE categories set name='${req.body.name}'`,function(error,result,fields){
        if (error){
            throw error;
        }else{
            respuesta={
                error:false,
                codigo: 200,
                mensaje: "Categoria Editada"
            }
            res.json(respuesta);
        } 
    });
});



module.exports=router;