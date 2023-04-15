drop database if exists figuras;

create database figuras;

use figuras;

create table circulo(
    id_circulo INT AUTO_INCREMENT,
    radio INT,
    area float(255, 5),
    PRIMARY KEY (id_circulo)
);

create table cuadrado(
    id_cuadrado INT AUTO_INCREMENT,
    lado INT,
    area float(255, 5),
    PRIMARY KEY (id_cuadrado)
);

create table triangulo(
    id_triangulo INT AUTO_INCREMENT,
    base INT,
    altura INT,
    area float(255, 5),
    PRIMARY KEY (id_triangulo)
);