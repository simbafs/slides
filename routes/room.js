const router = require('express').Router();

router.get('/room', (req, res, next) => {
	res.render('room');
});

router.get('/host', (req, res, next) => {

});

module.exports = router;
