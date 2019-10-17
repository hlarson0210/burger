DROP DATABASE IF EXISTS burgers_bd;

CREATE DATABASE burgers_db;

USE burgers_db;

CREATE TABLE burgers (
    id INT NOT NULL AUTO_INCREMENT PRIMARY KEY,
    burger_name VARCHAR(100) NOT NULL,
    devoured BOOLEAN DEFAULT false
);

SELECT * FROM burgers;

UPDATE burgers SET devoured=false WHERE burger_name="Juicy Lucy";