-- USERS
INSERT INTO users (username, password, email) 
VALUES
('igormirowski', xxxxx, igor@gmail.com),
('leo123',xxxxx, randomemail1@gmail.com),
('pati123',xxxxx, randomemail2@gmail.com);


-- ENTRIES

INSERT INTO entries  (user_id, sleep, exercise, water, smoking, money, date) 
VALUES
    (1, true, true, 2, 5, 1, '2022-06-06'),
    (2, false, true, 0, 1, 3, '2022-06-06'),
    (3, false, false, 4, 0, 5, '2022-06-06');
    


-- TRACKING
INSERT INTO entries1  ( user_id, habit_id, begin_date,
    end_date, frequency ) 
VALUES
    (1, 1, '2022-06-06','2099-01-01', 1),
    (1, 3, '2022-06-06','2099-01-01', 1),
    (2, 4, '2022-06-06','2099-01-01', 2),
    (2, 5, '2022-06-06','2099-01-01', 1),
    (3, 1, '2022-06-06','2099-01-01', 3);
