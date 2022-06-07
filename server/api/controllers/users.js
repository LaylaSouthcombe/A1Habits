const express = require('express');
const router = express.Router();

const User = require('../models/user');

router.get('/', async (req, res) => {
    const users = await User.all
    res.json(users)
})

router.get('/:username', async (req, res) => {
    const users = await User.findByUsername(req.params.username)
    res.json(users)
})

router.post('/', async (req, res) => {
    try {
        const user = await User.create(req.body);
        res.status(200).json(user)
    } catch (err) {
        res.status(422).json({err})
    }
})
module.exports = router