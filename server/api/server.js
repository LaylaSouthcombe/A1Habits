const express = require('express');
const cors = require('cors');

const server = express();
server.use(cors());
server.use(express.json());

const usersRoutes = require('./routes/users')
const trackingsRoutes = require('./routes/trackings')
const entriesRoutes = require('./routes/entries')
const authRoutes = require('./routes/auths');
server.use('/users', usersRoutes)
server.use('/trackings', trackingsRoutes)
server.use('/entries', entriesRoutes)
server.use('/auth', authRoutes);

server.get('/', (req, res) => res.send('Welcome to your habit tracker'))

module.exports = server