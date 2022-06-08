const Entry = require('../models/entry');
//GET ENTRIES FUNCTIONS
//get all entries in the entries db
async function getAllEntries(req, res) {
    try {
        const entries = await Entry.all;
        res.status(200).json(entries)
    } catch (err) {
        res.status(500).json({ err })
    }
}
//get last 7 smoking entries - returns array of numbers
async function getSmokingEntries(req, res) {
    try {
        const entries = await Entry.findSmokingEntries(req.params.username);
        res.status(200).json(entries)
    } catch (err) {
        res.status(500).json({ err })
    }
}
//get last 7 exercise entries - returns array of booleans
async function getExerciseEntries(req, res) {
    try {
        const entries = await Entry.findExerciseEntries(req.params.username);
        res.status(200).json(entries)
    } catch (err) {
        res.status(500).json({ err })
    }
}
//get last 7 water entries - returns array of numbers
async function getWaterEntries(req, res) {
    try {
        const entries = await Entry.findWaterEntries(req.params.username);
        res.status(200).json(entries)
    } catch (err) {
        res.status(500).json({ err })
    }
}
//get last 7 money entries - returns array of numbers
async function getMoneyEntries(req, res) {
    try {
        const entries = await Entry.findMoneyEntries(req.params.username);
        res.status(200).json(entries)
    } catch (err) {
        res.status(500).json({ err })
    }
}
//get last 7 sleep entries - returns array of booleans
async function getSleepEntries(req, res) {
    try {
        const entries = await Entry.findSleepEntries(req.params.username);
        res.status(200).json(entries)
    } catch (err) {
        res.status(500).json({ err })
    }
}

//get all entries by specific entry id
async function getEntriesByUserId(req, res) {
    try {
        const entries = await Entry.findByUserId(req.params.id);
        res.status(200).json(entries)
    } catch (err) {
        res.status(404).json({ err })
    }
}
//CREATE
//create a new entry
async function createNewEntry(req, res) {
    try {
        const createEntry = await Entry.create(req.body);
        res.status(201).json(createEntry)
    } catch (err) {
        res.status(422).json({ err })
    }
}

//UPDATE (To double check)
async function updateEntryById(req, res) {
    try {
        const updateEntry = await Entry.update(req.body);
        res.status(204).json({success: true});
    } catch (err) {
        res.status(404).json({ err });
    }
}

//add one to most recent smoking entry - returns number of updated entry
async function increaseSmokingNum(req, res) {
    router.patch('/current/smoking/:username', async (req, res) => {
        try {
            const smokingNum = await Entry.addOneToCurrentSmokingNum(req.params.username)
            res.status(200).json(smokingNum)
        }catch(err){
            res.status(422).json({err})
        }
    })
}

//remove one to from most recent smoking entry - returns number of updated entry
async function decreaseSmokingNum(req, res) {
    try {
        const smokingNum = await Entry.removeOneFromCurrentSmokingNum(req.params.username)
        res.json(smokingNum)
    }catch(err){
        res.status(422).json({err})
    }
}

//add one to most recent water entry - returns number of updated entry
async function increaseWaterNum(req, res) {
    try {
        const waterNum = await Entry.addOneToCurrentWaterNum(req.params.username)
        res.json(waterNum)
    }catch(err){
        res.status(422).json({err})
    }
}

//remove one from most recent water entry - returns number of updated entry
async function decreaseWaterNum(req, res) {
    try {
        const waterNum = await Entry.removeOneFromCurrentWaterNum(req.params.username)
        res.json(waterNum)
    }catch(err){
        res.status(422).json({err})
    }
}

//delete an entry (not sure we need this one as an entry needs to be generated/present everyday)
async function deleteEntryById(req, res) {
    try {
        const entry = await Entry.findById(req.params.id);
        const res = entry.destroy();
        res.status(204).end();
    } catch (err) {
        res.status(404).json({ err });
    }
}

//DESTROY 2nd DRAFT 

// router.get('/:id', async (req, res) => {
//     try {
//         const destroyEntry = await Entry.findById(req.params.id);
//         const res = await destroyEntry.destroy();
//         res.status(204).end();
//     } catch (err) {
//         res.status(404).json({ err });
//     }
// })

//finds the all habit streak by username - retruns a number
async function getAllHabitsStreak(req, res) {
    try {
        const streakNum = await Entry.getCurrentAllHabitStreak(req.params.username)
        res.status(200).json(streakNum)
    }catch(err){
        res.status(422).json({err})
    }
}

//finds the all habit streak by username - retruns a number
async function getSleepStreak(req, res) {
    try {
        const streakNum = await Entry.getCurrentSleepStreak(req.params.username)
        res.status(200).json(streakNum)
    }catch(err){
        res.status(422).json({err})
    }
}

//finds the exercise habit streak by username - retruns a number
async function getExerciseStreak(req, res) {
    try {
        const streakNum = await Entry.getCurrentExerciseStreak(req.params.username)
        res.status(200).json(streakNum)
    }catch(err){
        res.status(422).json({err})
    }
}

//finds the water habit streak by username - retruns a number
async function getWaterStreak(req, res) {
    try {
        const streakNum = await Entry.getCurrentWaterStreak(req.params.username)
        res.status(200).json(streakNum)
    }catch(err){
        res.status(422).json({err})
    }
}

//finds the smoking habit streak by username - retruns a number
async function getSmokingStreak(req, res) {
    try {
        const streakNum = await Entry.getCurrentSmokingStreak(req.params.username)
        res.status(200).json(streakNum)
    }catch(err){
        res.status(422).json({err})
    }
}

//finds the money habit streak by username - retruns a number
async function getMoneyStreak(req, res) {
    try {
        const streakNum = await Entry.getCurrentMoneyStreak(req.params.username)
        res.status(200).json(streakNum)
    }catch(err){
        res.status(422).json({err})
    }
}

module.exports = { getAllEntries, getEntriesByUserId, createNewEntry, updateEntryById, increaseSmokingNum, deleteEntryById, getAllHabitsStreak, getSleepStreak, getExerciseStreak, getWaterStreak, getSmokingStreak, getMoneyStreak, decreaseSmokingNum, increaseWaterNum, decreaseWaterNum, getExerciseEntries, getSleepEntries, getMoneyEntries, getWaterEntries, getSmokingEntries }


//pseudo code

//bar charts

//create route to get most recent 7 entries for a specific habit
////order by date
////only sent most recent 7


//28 day calendar general points
////0 = not tracked = white
////1 = not met = red
////2 = met = green
////FE recieves an array of 28 numbers, which will be used to set the class of the date circles in the calendar

//all habit 28 day calendar
////Have array of 28 0s
////go through last 28 entries for a user anc check if goal met
////if not tracked, will remain as 0
////if tracked but not met, add 1 to that [i]
////if met, add 2 to that [i]
////divide number by the number of trackings set to true
////use floor to round down

//single habit calendars
////same as above just for one habit and don't divide by number of trackings true

//money
