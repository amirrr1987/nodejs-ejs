const express = require('express');
const router = express.Router();

router.get('/register', (req, res) => {
    res.render('auth/register');
});
router.post('/register', (req, res) => {
    // res.render('auth/register');
    console.log(req.body);
    res.json(req.body);
    // res.json({name: 'amir'})
    // res.redirect('/');
});

module.exports = router