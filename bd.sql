
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

create table autores(
    id int not null auto_increment,
    nombre varchar(30),
    PRIMARY KEY (id)
);

create table editoriales(
    id int not null auto_increment,
    nombre varchar(30),
    url varchar(20),
    PRIMARY KEY (id)
);

create table categorias(
    id int not null auto_increment,
    nombre varchar(30),
    PRIMARY KEY (id)
);

alter table libros add foreign key (idEditorial) references editoriales(id) on delete cascade;
alter table libros add foreign key (idAutor) references autores(id) on delete cascade;
alter table libros add foreign key (idCategoria) references categorias(id) on delete cascade;


insert into autores (nombre) values('Pedro');
insert into autores (nombre) values('Juan');
insert into autores (nombre) values('Diego');

insert into editoriales (nombre,url) values ('Chile Libros','www.chilelibros.cl');
insert into editoriales (nombre, url) values('Libros Locos','www.libroloco.cl');

insert into categorias (nombre) values ('Suspenso');
insert into categorias (nombre) values ('Romantico');

insert into libros (isbn,titulo,edicion,numeroPaginas,idAutor,idCategoria,idEditorial) 
    values('AKSL14', 'Libro 1', 1, 250,1,1,1);
    
    insert into libros (isbn,titulo,edicion,numeroPaginas,idAutor,idCategoria,idEditorial) 
    values('IOER45', 'Libro 2', 1, 250,1,1,1);

insert into libros (isbn,titulo,edicion,numeroPaginas,idAutor,idCategoria,idEditorial) 
    values('ACOQR6', 'Libro 2', 2, 260,1,2,2);
