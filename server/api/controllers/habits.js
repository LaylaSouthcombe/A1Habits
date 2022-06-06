const express = require('express');
const router = express.Router();

const Habit = require('../models/habit');

router.get('/', async (req, res) => {
    try {
        const posts = await Habit.all
        res.json(posts)
    } catch (err) {
        res.status(500).send({ err })
    }
})

module.exports = router