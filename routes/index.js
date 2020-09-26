const router = require('express').Router();

router.get('/', (req, res, next) => {
	return res.render('index');
});

router.get('/error', (req, res, next) => {
	return res.error('Test Error');
});

router.get('/schema', (req, res, next) => {
	return res.render('colorPicker');
});

router.use('/s', require('./slides'));
router.use('/h', require('./help'));

module.exports = router;
