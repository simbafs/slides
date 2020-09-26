const router = require('express').Router();

router.get('/', (req, res, next) => {
	res.render('help/index');
});

module.exports = router;
