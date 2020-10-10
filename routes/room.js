const router = require('express').Router();

function random(len = 5){
	let r = (lim = 10) => Math.floor(Math.random() * lim);
	let l = len;
	let result = '';
	while(l--){
		result += r();
	}
	return result;
}

let room = [
];

router.get('/', (req, res, next) => {
	res.render('room');
});

router.post('/', (req, res, next) => {
	let data = req.body;

	do{
		data.id = random();
	}while(room.find(i => i.id === data.id));
	if(!data.key) data.key = random(10);

	room.push(data);

	res.redirect(`/room/${data.id}`);
});

router.get('/:id', (req, res, next) => {
	res.json(req.params);
});

function socket(io){

}

module.exports = router;
module.exports.socket = socket;
