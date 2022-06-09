const Tracking = require('../models/track');
const User = require('../models/user');


//get all tracking preferences in tracking table
async function getAllTracking(req, res) {
    try {
        const trackings = await Tracking.all
        res.status(200).json(trackings)
    } catch (err) {
        res.status(500).json({err})
    }
}

//get tracking preferences for specific username
async function getUserTrackingsByUsername(req, res) {
    try {
        const trackings = await Tracking.findTrackingByUsername(req.params.username)
        res.status(200).json(trackings)
    } catch (err) {
        res.status(500).json({err})
    }
}

//get tracking preferences for specific user_id
async function getUserTrackingsByUserId(req, res) {
    try {
        const trackings = await Tracking.findTrackingByUserId(req.params.user_id)
        res.status(200).json(trackings)
    } catch (err) {
        res.status(500).json({err})
    }
}

//update tracking prefernces by username (if user doesnt exist, throws error; if no tracking for a user, tracking is created; if tracking exists, tracking updated)
async function updateUSerTrackings(req, res) {
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
}

//gets the combined last entry and tracking preferences by username
async function getCurrentTrackingDataByUsername(req, res) {
    try {
        const trackings = await Tracking.getCurrentTrackingData(req.params.username)
        res.status(200).json(trackings)
    }catch(err){
        res.status(422).json({err})
    }
}

//gets the combined last entry and tracking preferences by user_id
async function getCurrentTrackingDataByUserId(req, res) {
    try {
        const trackings = await Tracking.getCurrentTrackingData(req.params.id)
        res.status(200).json(trackings)
    }catch(err){
        res.status(422).json({err})
    }
}


module.exports = { getAllTracking, getUserTrackingsByUsername, getUserTrackingsByUserId, updateUSerTrackings, getCurrentTrackingDataByUsername, getCurrentTrackingDataByUserId}
