var schemaBtn = document.getElementById('schemaBtn');
var schemaClose = document.getElementById('schemaClose');
var schemaPicker = document.getElementById('schemaPicker');
var schemaSchema = document.getElementsByClassName('schemaSchema');
var schemaStat = false;
var dark = [
	'black',
	'blood',
	'league',
	'moon',
	'night'
];

var form = document.getElementsByTagName('form')[0];
var schema = 'white';
form.addEventListener('submit', e => {
	e.preventDefault();
	for(var i of e.target.elements){
		if(i.checked) schema = i.value
	}

	// change button color
	if(dark.includes(schema)){
		schemaBtn.children[0].style.filter =  'invert(1)';
	}else{
		schemaBtn.children[0].style.filter =  'invert(0)';
	}

	// change css file
	document.getElementById('themeCSS').href = `/reveal.js/dist/theme/${schema}.css`
});

schemaBtn.addEventListener('click', e => {
	console.log(e);
	schemaStat = !schemaStat;
	schemaPicker.classList.toggle('is:on', schemaStat);
});

schemaClose.addEventListener('click', e => {
	schemaStat = false;
	schemaPicker.classList.toggle('is:on', false);
});
