const express = require('express');
const router = express.Router();

// controllers
const registerController = require('../../http/controllers/auth/registerController');

// validators
const registerValidator = require('../../http/validators/registerValidator');

router.get('/register', registerController.getIndex);
router.post('/register', registerValidator.handel(), registerController.postIndex);

module.exports = router