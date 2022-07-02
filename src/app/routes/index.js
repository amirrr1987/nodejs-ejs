const express = require('express');
const router = express.Router();

const RegisterRoutes = require('./auth/register');
const LoginRoutes = require('./auth/login');
const HomeRoutes = require('./home');
const AboutRoutes = require('./about');
const GalleryRoutes = require('./gallery');
const ContactRoutes = require('./contact');


router.use('/auth', RegisterRoutes);
router.use('/auth', LoginRoutes);
router.use('/', HomeRoutes);
router.use('/about', AboutRoutes);
router.use('/gallery', GalleryRoutes);
router.use('/contact', ContactRoutes);

module.exports = router