// theme picker
var schema = (() => {
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

	// set default theme, which gotten from localStrage
	schemaToggle(localStorage.getItem('schema') || 'white');

	function schemaToggle(schema){
		// change button color
		if(dark.includes(schema)){
			schemaBtn.children[0].style.filter =  'invert(1)';
		}else{
			schemaBtn.children[0].style.filter =  'invert(0)';
		}

		// change css file
		document.getElementById('themeCSS').href = `/reveal.js/dist/theme/${schema}.css`

		localStorage.setItem('schema', schema);
	}

	form.addEventListener('submit', e => {
		e.preventDefault();
		for(var i of e.target.elements){
			if(i.checked) schema = i.value
		}
		schemaToggle(schema);
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

	return schemaToggle;
})();

// info button
var infoToggle = (() => {
	var infoBtn = document.getElementById('infoBtn');
	var infoBox = document.getElementById('infoBox');
	var infoClose = document.getElementById('infoClose');
	var infoToggle = () => infoBox.classList.toggle('is:on');

	infoBtn.addEventListener('click', infoToggle);
	infoClose.addEventListener('click', infoToggle);

	return infoToggle;
})();
