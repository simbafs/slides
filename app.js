const createError = require('http-errors');
const express = require('express');
const path = require('path');
const cookieParser = require('cookie-parser');
const logger = require('morgan');
const random = require('./lib/random');

const app = express();

app.set('views', path.join(__dirname, 'views'));
app.set('view engine', 'ejs');

const cookieSecret = random(20);

app.use(logger('dev'));
app.use(express.json());
app.use(express.urlencoded({ extended: false }));
app.use(cookieParser(cookieSecret));
// render error page function
app.use((req, res, next) => {
	res.error = (msg, status=400) => {
		console.error('Error:', msg);
		return res.status(status).render('error', {
			message: msg,
			error: req.app.get('env') === 'development' ? new Error(msg) : {}
		});
	};
	next();
});
// locals
app.use((req, res, next) => {
	// path
	res.locals.path = req.path.replace(/\/$/, '');
	// Google Analystic
	if(process.env.GA) res.locals.GA = process.env.GA;
	next();
});

// static file
app.use(express.static(path.join(__dirname, 'public')));
app.use('/reveal.js', express.static(path.join(__dirname, 'node_modules', 'reveal.js')));
app.use('/help', express.static(path.join(__dirname, 'help')));

app.use('/', require('./routes/index'));

app.use((req, res, next) => {
	next(createError(404));
});

app.use((err, req, res, next) => {
	res.locals.message = err.message;
	res.locals.error = req.app.get('env') === 'development' ? err : {};

	res.status(err.status || 500);
	res.render('error');
});

module.exports = app;
