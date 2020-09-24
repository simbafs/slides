const router = require('express').Router();
const axios = require('axios').create({ timeout: 10000 });

router.get('/', (req, res, next) => {
	return res.render('index');
});

router.post('/s', (req, res, next) => {
	let src = req.body.src;

	// check src
	if(!src || !src.match(/.*\/.*/)) return res.error('Src format error. It should match /.*\\/.*/');
	res.redirect('/s/' + src);
});

router.get(/^\/s\/.*\/.*/, (req, res, next) => {
	let src = req.path.split('/').slice(2);
	if(src.length <= 2) src[2] = 'README.md';
	let url = `https://raw.githubusercontent.com/${src[0]}/${src[1]}/master/${src.slice(2).join('/')}`
	axios.head(url)
		.then(e => 	res.render('slides', { url }))
		.catch(e => res.error(`Can\'t find ${url}`))
});

router.get('/error', (req, res, next) => {
	return res.error('Test Error');
});

router.get('/schema', (req, res, next) => {
	return res.render('colorPicker');
});

module.exports = router;
