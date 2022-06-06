-- USERS
DROP TABLE IF EXISTS users;

CREATE TABLE users (
    id serial PRIMARY KEY,
    username VARCHAR(50) NOT NULL UNIQUE,
    password_digest VARCHAR(30) NOT NULL,
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
    exercise_freq VARCHAR(30),
    water BOOLEAN,
    water_goal INT,
    smoking BOOLEAN,
    smoking_goal INT,
    money BOOLEAN,
    money_goal INT,
    money_begin_date date DEFAULT CURRENT_DATE,
    money_end_date date DEFAULT '2022-07-06'

);









