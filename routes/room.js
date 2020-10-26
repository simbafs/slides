const router = require('express').Router();
const random = require('../lib/random');
const axios = require('axios').create({ timeout: 10000 });

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
	let data = {...req.body};

	// parse data
	data.id = random();
	if(!data.key) data.key = random();
	if(!data.name) data.name = data.path;

	let src = data.path.split('/');
	// https://github.com/simba-fs/slides-test/blob/master/folder1/folder2/slides.md
	if(src.length <= 2) src[2] = 'README.md';
	let originUrl = `https://github.com/${src[0]}/${src[1]}/blob/master/${src.slice(2).join('/')}`
	let url = `https://raw.githubusercontent.com/${src[0]}/${src[1]}/master/${src.slice(2).join('/')}`
	axios.head(url)
		.then(() => res.redirect(`/host/${data.id}`))
		.catch(e => res.error(`Can\'t find ${url}`))

	hosts.push(data);
	console.log(hosts);
});

router.get('/host/:id', (req, res, next) => {
	let id = req.params.id;
	res.json(id);
});

module.exports = router;
