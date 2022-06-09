const express = require('express');
const router = express.Router();
const usersController = require('../controllers/users');

router.get('/', usersController.index);
router.get('/username/:username', usersController.getByUsername)
router.get('/', usersController.getById);

module.exports = router;