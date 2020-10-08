const router = require('express').Router();
let host = {
	'slides': {
		name: 'slides',
		path: 'simba-fs/slides-test',
		password: ''
	}
};

router.get('/', (req, res, next) => {
	res.render('host');
});

router.post('/', (req, res, next) => {
	res.json(req.body);
});

router.post('/check', (req, res, next) => {
	let data = {
		path: req.body[0],
		name: req.body[1] || req.body[0],
		password: req.body[2]
	}

	if(host[data.name]){
		return res.json(false);
	}else{
		return res.json(true);
	}
});

function socket(io){

}

module.exports = router;
module.exports.socket = socket;
