const router = require('express').Router();

router.get('/', (req, res, next) => {
	res.render('host');
});

router.post('/', (req, res, next) => {
	res.json(req.body);
});

module.exports = router;
