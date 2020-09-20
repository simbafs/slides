const router = require('express').Router();

router.get('/', (req, res, next) => {
	return res.send('<h1>Hello World</h1>');
});

module.exports = router;
