const express=require('express');
const res = require('express/lib/response');
const connection=require('../database/database.js');

const router=express.Router();

//Consulta por todos los authors
router.get('/authors',(req, res)=>{
    connection.query("select * from authors",function(error,result,fields){

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
router.post('/authors',(req, res)=>{
    connection.query( `insert into authors (name) values ('${req.body.name}') `,function(error,result,fields){
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
router.get('/authors/:id',(req, res)=>{
    connection.query(`select * from authors where id='${req.params.id}'`,function(error,result,fields){
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
router.delete('/authors/:id',(req,res)=>{
    connection.query(`delete from authors where id='${req.params.id}'`,function(error,result,fields){
        if (error){
            throw error;
        }else{
            connection.query("select * from authors",function(error,result,fields){
                if (error){
                    throw error;
                }else{
                    respuesta={
                        error:false,
                        codigo: 200,
                        mensaje: "Autor Eliminado",    
                        datos: result
                    }
                    res.json(respuesta);
                }         
            });
        }    
    });
});



//Editar un autor a traves de su ID
router.put('/authors/:id',(req, res)=>{
    connection.query(`UPDATE authors SET name='${req.body.name}' WHERE id='${req.params.id}'`,function(error,result,fields){
        if (error){
            throw error;
        }else{
            respuesta={
                error:false,
                codigo: 200,
                mensaje: "Datos de Autor modificados",    
            }
            res.json(respuesta);
        }    
    });
    
});



module.exports=router;