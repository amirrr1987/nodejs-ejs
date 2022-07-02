const express = require('express');
const router = express.Router();

const loginController = require('../../http/controllers/auth/loginController');

router.get('/login', loginController.getIndex);
router.post('/login', loginController.postIndex);

module.exports = router