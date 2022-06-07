-- USERS
INSERT INTO users (id, username, password_digest, email) 
VALUES
    (1, 'igormirowski', 'xxxxx', 'igor@gmail.com'),
    (2, 'leo123', 'xxxxx', 'leo12@gmail.com'),
    (3, 'pati123', 'xxxxx', 'pati123@gmail.com');


-- ENTRIES

INSERT INTO entries  (user_id, sleep_entry, exercise_entry, water_entry, smoking_entry, money_entry, date_entry) 
VALUES
    (1, true, true, 8, 8, 1, '2022-06-06'),
    (2, false, true, 8, 8, 3, '2022-06-06'),
    (3, false, false, 1, 21, 5, '2022-06-06');
    


-- TRACKING

INSERT INTO tracking  ( user_id, sleep_track, sleep_goal, exercise_track, exercise_goal, exercise_freq, water_track, water_goal, smoking_track, smoking_goal, money_track, money_goal, money_begin_date, money_end_date) 
VALUES
    (1, true, 8, true, 4, 'week', true, 6, true, 8, true, 4, '2022-06-06','2022-07-06'),
    (2, false, 7, true, 3, 'week',  true, 6, true, 8, true, 4, '2022-06-06','2022-07-06'),
    (3, false, 6, false, 2, 'day', true, 6, false, 1, false, 4, '2022-06-06','2022-07-06');