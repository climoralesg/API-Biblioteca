const express=require('express');
const res = require('express/lib/response');
const connection=require('../database/database.js');

const router=express.Router();


//Consulta por todos los libros
router.get('/books',(req,res)=>{
    connection.query("select * from books",function(error, result, fields){
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
router.post('/books',(req,res)=>{
    connection.query(`insert into books (isbn,title,edition,numberPages,idAuthor,idEditorial,idCategory) values('${req.body.isbn}','${req.body.title}','${req.body.edition}','${req.body.numberPages}','${req.body.idAuthor}','${req.body.idEditorial}','${req.body.idCategory}')`,function(error,result,fields){
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

//Consultar la informacion de libro a traves de su ID
router.get('/books/:isbn',(req,res)=>{
    connection.query(`select b.isbn, b.title, b.edition, b.numberPages, a.name as authorName, e.name as editorialName, c.name as categoryName from books as b INNER JOIN categories as c on b.idCategory=c.id INNER JOIN authors as a on b.idAuthor= a.id INNER JOIN editorials as e on b.idEditorial=e.id where b.isbn='${req.params.isbn}'`,function(error,result,fields){
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
    });
});

//Eliminar un Libro
router.delete('/books/:isbn',(req,res)=>{
    connection.query(`delete from books where isbn='${req.params.isbn}'`,function(error,result,fields){
        if (error){
            throw error;
        }else{
            connection.query("select * from books",function(error,result,fields){
                if (error){
                    throw error;
                }else{
                    respuesta={
                        error:false,
                        codigo: 200,
                        mensaje: "Libro Eliminado",    
                        datos: result
                    }
                    res.json(respuesta);
                }         
            });
        }    
    })
})

//Editar un Libro
router.put('/books/:id',(req,res)=>{
    connection.query(`update books set title='${req.body.title}',edition='${req.body.edition}',numberPages='${req.body.numberPages}',idAuthor='${req.body.idAuthor}',idEditorial='${req.body.idEditorial}',idCategory='${req.body.idCategory}' where isbn='${req.body.isbn}'`,function(error,result,fields){
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