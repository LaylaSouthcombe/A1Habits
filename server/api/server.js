const express = require('express');
const cors = require('cors');

const server = express();
server.use(cors());
server.use(express.json());

// const habitsRoutes = require('./controllers/habits')
const usersRoutes = require('./controllers/users')
// server.use('/habits', habitsRoutes)
server.use('/users', usersRoutes)

server.get('/', (req, res) => res.send('Welcome to your habit tracker'))

module.exports = server