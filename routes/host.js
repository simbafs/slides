const router = require('express').Router();
let host = {};

router.get('/', (req, res, next) => {
	res.render('host');
});

router.post('/', (req, res, next) => {
	res.json(req.body);
});

router.post('/check', (req, res, next) => {
	console.log(req.body);
	res.json(req.body);
});

function socket(io){

}

module.exports = router;
module.exports.socket = socket;
