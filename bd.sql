
drop database if exists API_BIBLIOTECA;
create database API_BIBLIOTECA;
use API_BIBLIOTECA;

drop table if exists libros;
drop table if exists editoriales;
drop table if exists autores;
drop table if exists categorias;

create table libros(
    isbn varchar(10),
    titulo varchar(30),
    edicion int,
    numeroPaginas int,

    idAutor int,
    idEditorial int,
    idCategoria int,
    
    primary key (isbn)
    
);

create table editoriales(
    id int not null auto_increment,
    nombre varchar(10),
    url varchar(10),
    PRIMARY KEY (id)
);

create table autores(
    id int not null auto_increment,
    nombre varchar(10),
    PRIMARY KEY (id)
);


create table categorias(
    id int not null auto_increment,
    nombre varchar(10),
    PRIMARY KEY (id)
);

alter table libros add foreign key (idEditorial) references editoriales(id);
alter table libros add foreign key (idAutor) references autores(id);
alter table libros add foreign key (idCategoria) references categorias(id);