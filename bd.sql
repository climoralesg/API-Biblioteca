
drop database if exists API_BIBLIOTECA;
create database API_BIBLIOTECA;
use API_BIBLIOTECA;

drop table if exists books;
drop table if exists editorials;
drop table if exists authors;
drop table if exists categories

create table books(
    isbn varchar(10),
    title varchar(30),
    edition int,
    numberPages int,

    idAuthor int,
    idEditorial int,
    idCategory int,
    
    primary key (isbn)
    
);

create table authors(
    id int not null auto_increment,
    name varchar(30),
    PRIMARY KEY (id)
);

create table editorials(
    id int not null auto_increment,
    name varchar(30),
    url varchar(20),
    PRIMARY KEY (id)
);

create table categories(
    id int not null auto_increment,
    name varchar(30),
    PRIMARY KEY (id)
);

alter table books add foreign key (idEditorial) references editorials(id) on delete cascade;
alter table books add foreign key (idAuthor) references authors(id) on delete cascade;
alter table books add foreign key (idCategory) references categories(id) on delete cascade;


insert into authors (name) values('Pedro');
insert into authors (name) values('Juan');
insert into authors (name) values('Diego');

insert into editorials (name,url) values ('Chile Libros','www.chilebooks.cl');
insert into editorials (name, url) values('Libros Locos','www.libroloco.cl');

insert into categories (name) values ('Suspenso');
insert into categories (name) values ('Romantico');

insert into books (isbn,title,edition,numberPages,idAuthor,idCategory,idEditorial) 
    values('AKSL14', 'Libro 1', 1, 250,1,1,1);
    
    insert into books (isbn,title,edition,numberPages,idAuthor,idCategory,idEditorial) 
    values('IOER45', 'Libro 2', 1, 250,1,1,1);

insert into books (isbn,title,edition,numberPages,idAuthor,idCategory,idEditorial) 
    values('ACOQR6', 'Libro 2', 2, 260,1,2,2);
