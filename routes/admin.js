const router = require('express').Router();
const pool = require('@simba.fs/pool');
const admins = new pool(String);
const random = require('../lib/random');
const cookieCongig = require('../lib/cookieConfig');

// This will be replace with other after login system is finished
const adminList = require('../adminList.js') || [];

let hosts = require('../lib/hosts');

router.get('/', (req, res, next) => {
	if(admins.has(req.cookies.admin)) return res.render('admin', {
		admin: true,
		hosts: hosts 
	});

	return res.render('admin');
});

router.post('/login', (req, res, next) => {
	console.log(adminList, req.body);
	if(!adminList.includes(req.body.key)) return res.error('Key is not matched anyone in the admin list');

	let key = random(20);
	admins.add(key);
	res.cookie('admin', key, {...cookieCongig, httpOnly: true});
	res.redirect('/admin');
});

module.exports = router;
