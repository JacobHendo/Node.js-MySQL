DROP DATABASE IF EXISTS bamazonDB;
CREATE DATABASE bamazonDB;
USE bamazonDB;
CREATE TABLE products(
id INT(10) NOT NULL AUTO_INCREMENT,
item_name VARCHAR (225) NOT NULL,
dept VARCHAR(255) NOT NULL,
price DECIMAL(10,2) NOT NULL,
stock INT (10) NOT NULL,
PRIMARY KEY(id)
);

INSERT INTO products (name, dept, price, stock)
VALUES ("Hammers", "Tool", 20.99, 12);

INSERT INTO products (name, dept, price, stock)
VALUES ("Nails", "Hard Ware", 9.89, 15);

INSERT INTO products (name, dept, price, stock)
VALUES ("Screws", "Hard Ware", 7.50, 10);

INSERT INTO products (name, dept, price, stock)
VALUES ("Leaf Blower", "Lawn & Garden", 175.99, 6);

INSERT INTO products (name, dept, price, stock)
VALUES ("Hand Saw", "Tool", 26.99, 8);

INSERT INTO products (name, dept, price, stock)
VALUES ("4x4", "Lumber", 6.99, 32);

INSERT INTO products (name, dept, price, stock)
VALUES ("2x4", "Lumber", 20.99, 40);

INSERT INTO products (name, dept, price, stock)
VALUES ("Plywood", "Lumber", 13.29, 15);

INSERT INTO products (name, dept, price, stock)
VALUES ("Hanging Hooks", "Hard Ware", 8.99, 13);

INSERT INTO products (name, dept, price, stock)
VALUES ("Hammer Drill", "Power Tools", 77.90, 4);

INSERT INTO products (name, dept, price, stock)
VALUES ("1/2 PVC", "Plumming", 7.10, 18);

INSERT INTO products (name, dept, price, stock)
VALUES ("3/4 PVC", "Plumming", 9.30, 12);
