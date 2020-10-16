const router = require('express').Router();
const axios = require('axios').create({ timeout: 10000 });

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

router.get('/room', (req, res, next) => {
	res.render('newHost');
});

router.post('/room', (req, res, next) => {
	let data = req.body;

	do{
		data.id = random();
	}while(room.find(i => i.id === data.id));
	if(!data.key) data.key = random(10);

	room.push(data);

	res.redirect(`/host/${data.id}`);
});

router.get('/host/:id', (req, res, next) => {
	let data = room.find(i => i.id === req.params.id);
	let src = data.path.split('/');
	console.log({src});
	if(src.length <= 2) src[2] = 'README.md';
	let originUrl = `https://github.com/${src[0]}/${src[1]}/blob/master/${src.slice(2).join('/')}`
	let url = `https://raw.githubusercontent.com/${src[0]}/${src[1]}/master/${src.slice(2).join('/')}`
	console.log({ url, originUrl });
	axios.head(url)
		.then(e => 	res.render('slides', { 
			url, 
			originUrl,
			path: req.path.slice(1),
			mode: 'host'
		}))
		.catch(e => res.error(`Can\'t find ${url}`))
});

function socket(io){

}

module.exports = router;
module.exports.socket = socket;
