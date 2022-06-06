const express = require('express');
const router = express.Router();

const Track = require('../models/track');

router.get('/', async (req, res) => {
    // const users = await User.all
    // res.json(users)
    res.send('hi')
})

module.exports = router