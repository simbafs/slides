const router = require('express').Router();
const pool = require('@simba.fs/pool');
const admins = new pool(String);
const random = require('../lib/random');
const cookieCongig = require('../lib/cookieConfig');

router.get('/', (req, res, next) => {
	if(admins.has(req.cookies.admin)) return res.render('admin', {admin: true});

	return res.render('admin');
});

router.post('/login', (req, res, next) => {
	let key = random(20);
	admins.add(key);
	res.cookie('admin', key, {...cookieCongig, httpOnly: true});
	res.redirect('/admin');
});

module.exports = router;
