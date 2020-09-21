const router = require('express').Router();

router.get('/', (req, res, next) => {
	return res.render('index');
});

router.post('/s', (req, res, next) => {
	let src = req.body.src;

	// check src
	if(!src || !src.match(/.*\/.*/)) return res.error('src format error');


});

module.exports = router;
