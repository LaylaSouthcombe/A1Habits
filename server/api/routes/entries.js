const express = require('express');
const router = express.Router();
const entriesController = require('../controllers/entries');

const { verifyToken } = require('../middleware/auth');
//add verifyToken to all routes once finished

router.get('/', entriesController.getAllEntries);
router.get('/:id', entriesController.getEntriesByUserId);
router.post('/', entriesController.createNewEntry);
router.patch('/:id', entriesController.updateEntryById);
router.patch('/current/smoking/:username', entriesController.increaseSmokingNum);
router.patch('/current/smoking/:username', entriesController.decreaseSmokingNum);
router.patch('/current/water/:username', entriesController.increaseWaterNum);
router.patch('/current/water/:username', entriesController.decreaseWaterNum);
router.delete('/:id', entriesController.deleteEntryById);
router.get('/streak/all/:username', entriesController.getAllHabitsStreak);
router.get('/streak/sleep/:username', entriesController.getSleepStreak);
router.get('/streak/exercise/:username', entriesController.getExerciseStreak);
router.get('/streak/water/:username', entriesController.getWaterStreak);
router.get('/streak/smoking/:username', entriesController.getSmokingStreak);
router.get('/streak/money/:username', entriesController.getMoneyStreak);
router.get('/exercise/:username', entriesController.getExerciseEntries);
router.get('/smoking/:username', entriesController.getSmokingEntries);
router.get('/water/:username', entriesController.getWaterEntries);
router.get('/money/:username', entriesController.getMoneyEntries);
router.get('/sleep/:username', entriesController.getSleepEntries);


module.exports = router;