-- USERS
INSERT INTO users (username, password_digest, email) 
VALUES
    ('igormirowski', 'xxxxx', 'igor@gmail.com'),
    ('leo123', 'xxxxx', 'leo12@gmail.com'),
    ('pati123', 'xxxxx', 'pati123@gmail.com');


-- ENTRIES

INSERT INTO entries  (user_id, sleep, exercise, water, smoking, money, date) 
VALUES
    (1, true, true, 8, 8, 1, '2022-06-06'),
    (2, false, true, 8, 8, 3, '2022-06-06'),
    (3, false, false, 1, 21, 5, '2022-06-06');
    


-- TRACKING

INSERT INTO tracking  ( user_id, sleep, sleep_goal, exercise, exercise_goal, exercise_freq, water, water_goal, smoking, smoking_goal, money, money_goal, money_begin_date, money_end_date) 
VALUES
    (1, true, 8, true, 4, 4, true, 6, true, 8, true, 4, '2022-06-06','2022-07-06'),
    (2, false, 7, true, 3, 3,  true, 6, true, 8, true, 4, '2022-06-06','2022-07-06'),
    (3, false, 6, false, 2, 2, true, 6, false, 1, false, 4, '2022-06-06','2022-07-06');
    


