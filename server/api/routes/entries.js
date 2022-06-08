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
router.delete('/:id', entriesController.deleteEntryById);
router.get('/streak/all/:username', entriesController.getAllHabitsStreak);
router.get('/streak/sleep/:username', entriesController.getSleepStreak);
router.get('/streak/exercise/:username', entriesController.getExerciseStreak);
router.get('/streak/water/:username', entriesController.getWaterStreak);
router.get('/streak/smoking/:username', entriesController.getSmokingStreak);
router.get('/streak/money/:username', entriesController.getMoneyStreak);



module.exports = router;