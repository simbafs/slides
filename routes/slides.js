const router = require('express').Router();
const axios = require('axios').create({ timeout: 10000 });

router.post('/', (req, res, next) => {
	let src = req.body.src;

	// check src
	if(!src || !src.match(/.*\/.*/)) return res.error('Src format error. It should match /.*\\/.*/');
	res.redirect('/s/' + src);
});

router.get(/^\/.*\/.*/, (req, res, next) => {
	let src = req.path.split('/').slice(1);
	if(src.length <= 2) src[2] = 'README.md';
	let originUrl = `https://github.com/${src[0]}/${src[1]}/blob/master/${src.slice(2).join('/')}`
	let url = `https://raw.githubusercontent.com/${src[0]}/${src[1]}/master/${src.slice(2).join('/')}`
	console.log({ url, originUrl });
	axios.head(url)
		.then(e => 	res.render('slides', { url, originUrl, path: req.path.slice(1) }))
		.catch(e => res.error(`Can\'t find ${url}`))
});

module.exports = router;
