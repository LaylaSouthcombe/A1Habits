const express = require('express');
const router = express.Router();
const usersController = require('../controllers/users');

const { verifyToken } = require('../middleware/auth');
//add verifyToken to all routes once finished

router.get('/', usersController.index);
router.get('/username/:username', usersController.getByUsername)
router.get('/:id', usersController.getById);

module.exports = router;