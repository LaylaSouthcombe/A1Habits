const express = require('express');
const cors = require('cors');

const server = express();
server.use(cors());
server.use(express.json());

const usersRoutes = require('./controllers/users')
const trackingsRoutes = require('./controllers/tracks')
const entriesRoutes = require('./controllers/entries')
const authRoutes = require('./controllers/auth');
server.use('/users', usersRoutes)
server.use('/trackings', trackingsRoutes)
server.use('/entries', entriesRoutes)
server.use('/auth', authRoutes);

server.get('/', (req, res) => res.send('Welcome to your habit tracker'))

module.exports = server