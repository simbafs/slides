const router = require('express').Router();
const random = require('../lib/random');
const axios = require('axios').create({ timeout: 10000 });
const cookieConfig = require('../lib/cookieConfig');

// room
router.get('/room', (req, res, next) => {
	if(req.query.id) return res.redirect(`/room/${req.query.id}`);
	return res.render('room');
});

router.get('/room/:id', (req, res, next) => {
	let id = req.params.id;
	let data = hosts.find(i => i.id === id);

	if(!data) return res.redirect('/room');

	return res.render('slides', {
		url: data.url,
		originUrl: data.originUrl,
		id,
		mode: 'audience'
	});
});

// host
var hosts = require('../lib/hosts');

router.get('/host', (req, res, next) => {
	res.send('Get /host');
});

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

	data = {
		...data,
		url,
		originUrl
	};

	axios.head(url)
		.then((e) => {
			hosts.push(data);
			res.cookie(data.id, data.key, cookieConfig);
			res.redirect(`/host/${data.id}`)
		})
		.catch(e => res.error(`Can\'t find ${url}`))
});

router.get('/host/:id', (req, res, next) => {
	let id = req.params.id;
	let data = hosts.find(i => i.id === id);

	if(!data) return res.redirect('/host');
	if(data.key !== req.cookies[data.id]) return res.error('Key is not match');

	return res.render('slides', {
		id,
		url: data.url,
		originUrl: data.originUrl,
		mode: 'host'
	});
});

module.exports = router;
