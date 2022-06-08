const express = require('express');
const router = express.Router();

const Tracking = require('../models/track');
const User = require('../models/user');
const { verifyToken } = require('../middleware/auth');
//add verifyToken to all routes once finished

//get all tracking preferences in tracking table
router.get('/', async (req, res) => {
    const trackings = await Tracking.all
    res.json(trackings)
})

//get tracking preferences for specific username
router.get('/username/:username', async (req, res) => {
    const trackings = await Tracking.findTrackingByUsername(req.params.username)
    res.json(trackings)
})

//get tracking preferences for specific user_id
router.get('/user_id/:user_id', async (req, res) => {
    const trackings = await Tracking.findTrackingByUserId(req.params.user_id)
    res.json(trackings)
})

//update tracking prefernces by username (if user doesnt exist, throws error; if no tracking for a user, tracking is created; if tracking exists, tracking updated)
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

//gets the combined last entry and tracking preferences by username
router.get('/current/:username', async (req, res) => {
    try {
        const trackings = await Tracking.getCurrentTrackingData(req.params.username)
        res.json(trackings)
    }catch(err){
        res.status(422).json({err})
    }
})

//gets the combined last entry and tracking preferences by user_id
router.get('/current/:id', async (req, res) => {
    try {
        const trackings = await Tracking.getCurrentTrackingData(req.params.id)
        res.json(trackings)
    }catch(err){
        res.status(422).json({err})
    }
})



module.exports = router
