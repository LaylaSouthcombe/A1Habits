-- USERS
INSERT INTO users (username, password, email) 
VALUES
('igormirowski', xxxxx, igor@gmail.com),
('leo123',xxxxx, randomemail1@gmail.com),
('pati123',xxxxx, randomemail2@gmail.com);


-- HABITS

INSERT INTO habits  (habitName) 
VALUES
    ('sleep'),
    ('exercise'),
    ('water'),
    ('smoking'),
    ('money');


-- ENTRIES 1
INSERT INTO entries1  ( user_id, habit_id, begin_date,
    end_date, frequency ) 
VALUES
    (1, 1, '2022-06-06','2099-01-01', 1),
    (1, 3, '2022-06-06','2099-01-01', 1),
    (2, 4, '2022-06-06','2099-01-01', 2),
    (2, 5, '2022-06-06','2099-01-01', 1),
    (3, 1, '2022-06-06','2099-01-01', 3);
