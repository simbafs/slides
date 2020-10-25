const router = require('express').Router();

// room
router.get('/room', (req, res, next) => {
	if(req.query.id) res.redirect(`/room/${req.query.id}`);
	res.render('room');
});

router.get('/room/:id', (req, res, next) => {
	res.render('room');
});

// host
var hosts = [];


router.post('/host', (req, res, next) => {
	hosts.push(req.body);
	res.json(hosts);
});

router.get('/host', (req, res, next) => {

});

module.exports = router;
