const express=require('express');
const res = require('express/lib/response');
const connection=require('../database/database.js');

const router=express.Router();


//Consulta por todos los libros
router.get('/libros',(req,res)=>{
    connection.query("select * from libros",function(error, result, fields){
        if(error){
            throw error;
        }else{
            respuesta={
                error:false,
                codigo:200,
                mensaje: "Datos de todos los libros",
                datos: result
            }
            res.json(respuesta);
        }
    });
});

//Registrar un Libro
router.post('/libros',(req,res)=>{
    connection.query(`insert into libros (isbn,titulo,edicion,numeroPaginas,idAutor,idEditorial,idCategoria) values('${req.body.isbn}','${req.body.titulo}','${req.body.edicion}','${req.body.numeroPaginas}','${req.body.idAutor}','${req.body.idEditorial}','${req.body.idCategoria}')`,function(error,result,fields){
        if(error){
            throw error;
        }else{
            respuesta={
                error: false,
                codigo:200,
                mensaje:"Libro registrado"
            }
            res.json(respuesta);
        }
    })
});

//Consultar un libro a traves de su ID
router.get('/libros/:isbn',(req,res)=>{
    connection.query(`select * from libros where isbn='${req.params.isbn}'`,function(error,result,fields){
        if (error){
            throw error;
        }else{
            respuesta={
                error:false,
                codigo: 200,
                mensaje: "Datos del Libro",    
                datos: result[0]
            }
            res.json(respuesta);
        }  
    })
})

//Eliminar un Libro
router.delete('/libros/:isbn',(req,res)=>{
    connection.query(`delete from libros where isbn='${req.params.isbn}'`,function(error,result,fields){
        if (error){
            throw error;
        }else{
            respuesta={
                error:false,
                codigo: 200,
                mensaje: "Libro Eliminado"
            }
            res.json(respuesta);
        }    
    })
})

module.exports=router;