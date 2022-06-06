-- USERS
DROP TABLE IF EXISTS users;

CREATE TABLE users (
    id serial PRIMARY KEY,
    username VARCHAR(50) NOT NULL UNIQUE,
    password VARCHAR(30) NOT NULL,
    email VARCHAR(50)NOT NULL UNIQUE

);

-- HABITS
DROP TABLE IF EXISTS habits;

CREATE TABLE habits (
    id serial PRIMARY KEY,
    habitName varchar(100) NOT NULL
    );


-- ENTRIES 1
DROP TABLE IF EXISTS entries1;

CREATE TABLE entries1 (
    id serial PRIMARY KEY,
    user_id INT REFERENCES users(id) NOT NULL,
    habit_id INT REFERENCES habits(id) NOT NULL,
    begin_date date DEFAULT CURRENT_DATE NOT NULL,
    end_date date DEFAULT '2099-01-01' NOT NULL,
    frequency int
);


-- ENTRIES 2
DROP TABLE IF EXISTS entries;

CREATE TABLE entries (
    id serial PRIMARY KEY,
    user_id INT REFERENCES users(id) NOT NULL,
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









