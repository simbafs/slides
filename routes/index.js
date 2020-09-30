const express = require('express');
const router = express.Router();
const path = require('path');

router.get('/', (req, res, next) => {
	return res.render('index');
});

router.get('/license', (req, res, next) => {
	return res.render('license');
});

router.get('/help', (req, res, next) => {
	return res.render('help');
});

// test route
router.get('/error', (req, res, next) => {
	return res.error('Test Error');
});

router.get('/schema', (req, res, next) => {
	return res.render('colorPicker');
});

router.use('/s', require('./slides'));
router.use('/h', require('./help'));

module.exports = router;
