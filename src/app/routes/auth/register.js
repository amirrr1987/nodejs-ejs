const express = require('express');
const router = express.Router();

const registerController = require('../../http/controllers/auth/registerController');

router.get('/register', registerController.getIndex);
router.post('/register', registerController.postIndex);

module.exports = router