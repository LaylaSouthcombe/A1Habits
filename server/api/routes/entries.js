const express = require('express');
const router = express.Router();
const entriesController = require('../controllers/entries');

const { verifyToken } = require('../middleware/auth');
//add verifyToken to all routes once finished

router.get('/', entriesController.getAllEntries);
router.get('/:id', entriesController.getEntriesByUserId);
router.post('/', entriesController.createNewEntry);
router.patch('/:id', entriesController.updateEntryById);
router.delete('/:id', entriesController.deleteEntryById);
//increase/decrease water/smoking routes
router.get('/increase/smoking/:username',  entriesController.increaseSmokingNum);
router.get('/decrease/smoking/:username',  entriesController.decreaseSmokingNum);
router.get('/increase/water/:username',  entriesController.increaseWaterNum);
router.get('/decrease/water/:username',  entriesController.decreaseWaterNum);
//complete/incomplete water/smoking routes
router.get('/complete/sleep/:username',  entriesController.completeSleep);
router.get('/incomplete/sleep/:username',  entriesController.incompleteSleep);
router.get('/complete/exercise/:username',  entriesController.completeExercise);
router.get('/incomplete/exercise/:username',  entriesController.incompleteExercise);
//streak routes
router.get('/streak/all/:username',  entriesController.getAllHabitsStreak);
router.get('/streak/sleep/:username',  entriesController.getSleepStreak);
router.get('/streak/exercise/:username',  entriesController.getExerciseStreak);
router.get('/streak/water/:username',  entriesController.getWaterStreak);
router.get('/streak/smoking/:username',  entriesController.getSmokingStreak);
router.get('/streak/money/:username',  entriesController.getMoneyStreak);
//get last 7 days of entries for habit
router.get('/seven/all/:username',  entriesController.getAllHabitsEntries);
router.get('/seven/exercise/:username',  entriesController.getExerciseEntries);
router.get('/seven/smoking/:username',  entriesController.getSmokingEntries);
router.get('/seven/water/:username',  entriesController.getWaterEntries);
router.get('/seven/money/:username',  entriesController.getMoneyEntries);
router.get('/seven/sleep/:username',  entriesController.getSleepEntries);
//calendar routes
router.get('/calendar/all/:username',  entriesController.getAllCalendarEntries);
router.get('/calendar/sleep/:username',  entriesController.getSleepCalendarEntries);
router.get('/calendar/exercise/:username',  entriesController.getExerciseCalendarEntries);
router.get('/calendar/smoking/:username',  entriesController.getSmokingCalendarEntries);
router.get('/calendar/money/:username',  entriesController.getMoneyCalendarEntries);
router.get('/calendar/water/:username',  entriesController.getWaterCalendarEntries);

module.exports = router;