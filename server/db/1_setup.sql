-- USERS
DROP TABLE IF EXISTS users;

CREATE TABLE users (
    id serial PRIMARY KEY,
    username VARCHAR(50) NOT NULL UNIQUE,
    password VARCHAR(30) NOT NULL,
    email VARCHAR(50)NOT NULL UNIQUE

);



-- ENTRIES 
DROP TABLE IF EXISTS entries;

CREATE TABLE entries (
    id serial PRIMARY KEY,
    user_id INT REFERENCES users(id) NOT NULL,
    sleep BOOLEAN,
    exercise BOOLEAN, 
    water INT,
    smoking INT,
    money INT,
    date TIMESTAMP DEFAULT NOW()
);



--TRACKING
DROP TABLE IF EXISTS tracking;

CREATE TABLE tracking (
    id serial PRIMARY KEY,
    user_id INT REFERENCES users(id) NOT NULL,
    sleep BOOLEAN,
    sleep_goal INT,
    exercise BOOLEAN,
    exercise_goal INT,
    exercise_freq INT,
    water INT,
    water_goal INT,
    smoking INT,
    smoking_goal INT
    money INT,
    money_goal INT,
    begin_date date DEFAULT CURRENT_DATE NOT NULL,
    end_date date DEFAULT '2099-01-01' NOT NULL,

);









