const express = require('express');
const router = express.Router();

const Tracking = require('../models/track');

router.get('/', async (req, res) => {
    const trackings = await Tracking.all
    res.json(trackings)
})

router.post('/', async (req, res) => {
    try {
        const tracking = await Tracking.create(req.body);
        res.status(200).json(tracking)
    } catch (err) {
        res.status(422).json({err})
    }
})

module.exports = router