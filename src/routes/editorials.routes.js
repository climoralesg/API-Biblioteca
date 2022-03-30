const express=require('express');
const res = require('express/lib/response');
const connection=require('../database/database.js');

const router=express.Router();



//Consulta por todas las editoriales
router.get('/editorials',(req, res)=>{
    connection.query("select * from editorials",function(error,result,fields){

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
router.post('/editorials',(req, res)=>{
    connection.query( `insert into editorials (nombre,url) values ('${req.body.nombre}','${req.body.url}') `,function(error,result,fields){
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
router.get('/editorials/:id',(req, res)=>{
    connection.query(`select * from editorials where id='${req.params.id}'`,function(error,result,fields){
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
router.delete('/editorials/:id',(req,res)=>{
    connection.query(`delete from editorials where id='${req.params.id}'`,function(error,result,fields){
        if (error){
            throw error;
        }else{
            connection.query("select * from editorials",function(error,result,fields){
                if (error){
                    throw error;
                }else{
                    respuesta={
                        error:false,
                        codigo: 200,
                        mensaje: "Editorial Eliminada",    
                        datos: result
                    }
                    res.json(respuesta);
                }         
            });
        }    
    });
});

//Editar una editorial
router.put('/editorials/:id',(req,res)=>{
    connection.query(`update editorials set name=${req.params.name} where id=${req.params.name}`,function(error,result,fields){
        if (error){
            throw error;
        }else{
            respuesta={
                error:false,
                codigo: 200,
                mensaje: "Editorial modificada"
            }
            res.json(respuesta);
        }    
    })
})



module.exports=router;