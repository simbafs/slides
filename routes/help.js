const router = require('express').Router();

router.get('/', (req, res, next) => {
	res.render('help');
});

router.get('/:page', (req, res, next) => {
	return res.render('slides', {
		url: `/help/${req.params.page}.md`,
		originUrl: `https://github.com/simba-fs/slides/blob/master/help/${req.params.page}.md`,
		path: `/h/${req.params.page}`
	});
});

module.exports = router;
