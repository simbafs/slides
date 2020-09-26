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
	// https://github.com/simba-fs/slides-test/blob/master/folder1/folder2/slides.md
	let originUrl = `https://github.com/${src[0]}/${src[1]}/blob/master/${src.slice(2).join('/')}`
	if(src.length <= 2) src[2] = 'README.md';
	let url = `https://raw.githubusercontent.com/${src[0]}/${src[1]}/master/${src.slice(2).join('/')}`
	axios.head(url)
		.then(e => 	res.render('slides', { url, originUrl }))
		.catch(e => res.error(`Can\'t find ${url}`))
});

module.exports = router;
