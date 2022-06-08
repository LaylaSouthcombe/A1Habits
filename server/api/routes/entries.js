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
//increase/decreasewater/smoking routes
router.patch('/increase/smoking/:username', entriesController.increaseSmokingNum);
router.patch('/decrease/smoking/:username', entriesController.decreaseSmokingNum);
router.patch('/increase/water/:username', entriesController.increaseWaterNum);
router.patch('/decrease/water/:username', entriesController.decreaseWaterNum);
//streak routes
router.get('/streak/all/:username', entriesController.getAllHabitsStreak);
router.get('/streak/sleep/:username', entriesController.getSleepStreak);
router.get('/streak/exercise/:username', entriesController.getExerciseStreak);
router.get('/streak/water/:username', entriesController.getWaterStreak);
router.get('/streak/smoking/:username', entriesController.getSmokingStreak);
router.get('/streak/money/:username', entriesController.getMoneyStreak);
//specific entries routes
router.get('/all/:username', entriesController.getAllHabitsEntries);
router.get('/exercise/:username', entriesController.getExerciseEntries);
router.get('/smoking/:username', entriesController.getSmokingEntries);
router.get('/water/:username', entriesController.getWaterEntries);
router.get('/money/:username', entriesController.getMoneyEntries);
router.get('/sleep/:username', entriesController.getSleepEntries);
//calendar routes
router.get('/calendar/all/:username', entriesController.getAllCalendarEntries);
router.get('/calendar/sleep/:username', entriesController.getSleepCalendarEntries);
router.get('/calendar/exercise/:username', entriesController.getExerciseCalendarEntries);
router.get('/calendar/smoking/:username', entriesController.getSmokingCalendarEntries);
router.get('/calendar/money/:username', entriesController.getMoneyCalendarEntries);
router.get('/calendar/water/:username', entriesController.getWaterCalendarEntries);


module.exports = router;