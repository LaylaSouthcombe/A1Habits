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

router.put('/', async (req, res) => {
    try {
        if(User.findByUsername(req.params.username) === -1){
            throw new Error
        } if(Tracking.findTrackingByUsername(req.params.username) === -1) {
            const tracking = await Tracking.create(req.body);
        res.status(200).json(tracking)
        }if(Tracking.findTrackingByUsername(req.params.username) !== -1){
        const tracking = await Tracking.update(req.body);
        res.status(200).json(tracking)
        }
    } catch (err) {
        res.status(422).json({err})
    }
})

router.get('/current/:username', async (req, res) => {
    try {
        const trackings = await Tracking.getCurrentTrackingData(req.params.username)
        res.json(trackings)
    }catch(err){
        res.status(422).json({err})
    }
})
router.get('/current/:id', async (req, res) => {
    try {
        const trackings = await Tracking.getCurrentTrackingData(req.params.id)
        res.json(trackings)
    }catch(err){
        res.status(422).json({err})
    }
})



module.exports = router
