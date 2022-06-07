const express = require('express');
const router = express.Router();

const Tracking = require('../models/track');
const User = require('../models/user');

router.get('/', async (req, res) => {
    const trackings = await Tracking.all
    res.json(trackings)
})

router.get('/username/:username', async (req, res) => {
    const trackings = await Tracking.findTrackingByUsername(req.params.username)
    res.json(trackings)
})

router.get('/user_id/:user_id', async (req, res) => {
    const trackings = await Tracking.findTrackingByUserId(req.params.user_id)
    res.json(trackings)
})

//need to change logic so creates preferences if not exist, but updates if they do
router.put('/', async (req, res) => {
    try {
        if(User.findByUsername(req.params.username) === -1){
            
        } else {

        }
        const tracking = await Tracking.create(req.body);
        res.status(200).json(tracking)
    } catch (err) {
        res.status(422).json({err})
    }
})


module.exports = router