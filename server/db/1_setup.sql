-- USERS
DROP TABLE IF EXISTS users;

CREATE TABLE users (
    id serial PRIMARY KEY,
    username VARCHAR(50) NOT NULL,
    password VARCHAR(30) NOT NULL,
    email VARCHAR(50)NOT NULL,

);


-- ENTRIES
DROP TABLE IF EXISTS entries;

CREATE TABLE entries (
    id serial PRIMARY KEY,
    user_id INT REFERENCES users (id) NOT NULL,
    sleep NUMBER(1), 
    exercise NUMBER(1), 
    water INT,
    smoking INT,
    money INT,
    date TIMESTAMP DEFAULT NOW()
);


--TRACKING
DROP TABLE IF EXISTS tracking;

CREATE TABLE tracking (
    id serial PRIMARY KEY,
    user_id INT REFERENCES users (id) NOT NULL,
    sleep NUMBER(1), 

);









