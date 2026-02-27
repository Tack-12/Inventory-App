#! /usr/bin/env/ node

const { Client } = require("pg");
const envData = require("../utils/envData");

const SQL = ` 
DROP TABLE IF EXISTS items;
DROP TABLE IF EXISTS categories;

CREATE TABLE categories (
  category_id SERIAL PRIMARY KEY,
  name VARCHAR(255) NOT NULL
);

CREATE TABLE items (
  item_id SERIAL PRIMARY KEY,
  name VARCHAR(255) NOT NULL,
  price INT NOT NULL,
  description TEXT,
  cat_id INT,
  image_link TEXT,
  CONSTRAINT fk_catid
    FOREIGN KEY (cat_id)
    REFERENCES categories(category_id)
    ON DELETE CASCADE
);

INSERT INTO categories (name) VALUES
('Electronics'),
('Furniture'),
('Clothing'),
('Books');

INSERT INTO items (name, price, description, cat_id, image_link) VALUES
('iPhone 15', 999, 'Latest Apple smartphone with A16 chip and improved camera.', 1,
 'https://images.unsplash.com/photo-1695048133142-1a20484bce71'),
('Gaming Laptop', 1499, 'High performance laptop with RTX graphics and 16GB RAM.', 1,
 'https://images.unsplash.com/photo-1517336714731-489689fd1ca8'),
('Wireless Headphones', 199, 'Noise cancelling over-ear Bluetooth headphones.', 1,
 'https://images.unsplash.com/photo-1518444028785-8c4b7f2a0b87');

INSERT INTO items (name, price, description, cat_id, image_link) VALUES
('Office Chair', 250, 'Ergonomic office chair with lumbar support.', 2,
 'https://images.unsplash.com/photo-1582582429416-2d5d3b26f45c'),
('Wooden Desk', 450, 'Modern wooden work desk with storage drawer.', 2,
 'https://images.unsplash.com/photo-1555041469-a586c61ea9bc'),
('Sofa', 899, 'Comfortable 3-seater fabric sofa.', 2,
 'https://images.unsplash.com/photo-1567016432779-094069958ea5');

INSERT INTO items (name, price, description, cat_id, image_link) VALUES
('Denim Jacket', 89, 'Classic blue denim jacket.', 3,
 'https://images.unsplash.com/photo-1520975916090-3105956dac38'),
('Sneakers', 120, 'Casual everyday white sneakers.', 3,
 'https://images.unsplash.com/photo-1542291026-7eec264c27ff');

INSERT INTO items (name, price, description, cat_id, image_link) VALUES
('Clean Code', 45, 'A handbook of Agile software craftsmanship.', 4,
 'https://images.unsplash.com/photo-1512820790803-83ca734da794'),
('Atomic Habits', 25, 'Practical guide to building good habits.', 4,
 'https://images.unsplash.com/photo-1495446815901-a7297e633e8d');
 `;


async function main() {
    console.log("Working....");
    const client = new Client({
        host: envData.config.DATABASE.db_host,
        user: envData.config.DATABASE.db_user,
        database: envData.config.DATABASE.db_database,
        password: envData.config.DATABASE.db_password,
        port: envData.config.DATABASE.port
    });

    await client.connect();
    await client.query(SQL);
    await client.end();
    console.log("DONE ::::::: AND :::::::: DUSTED");
}

main();

