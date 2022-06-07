const express = require('express');
const router = express.Router();

const Tracking = require('../models/track');

router.get('/', async (req, res) => {
    const trackings = await Tracking.all
    res.json(trackings)
})

module.exports = router