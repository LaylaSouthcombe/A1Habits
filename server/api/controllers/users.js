const express = require('express');
const router = express.Router();

const User = require('../models/user');

router.get('/', async (req, res) => {
    const users = await User.all
    res.json(users)
})

router.get('/username/:username', async (req, res) => {
    const users = await User.findByUsername(req.params.username)
    res.json(users)
})

router.get('/:id', async (req, res) => {
    try {
        const users = await User.findById(req.params.id)
        res.json(users)
    } catch (err) {
        res.status(204).json({err})
    }
})

router.post('/', async (req, res) => {
    try {
        const user = await User.create(req.body);
        res.status(200).json(user)
    } catch (err) {
        
    }
})
module.exports = router