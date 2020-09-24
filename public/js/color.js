var schemaBtn = document.getElementById('schemaBtn');
var schemaClose = document.getElementById('schemaClose');
var schemaPicker = document.getElementById('schemaPicker');
var schemaSchema = document.getElementsByClassName('schemaSchema');
var schemaStat = false;

schemaBtn.addEventListener('click', e => {
	console.log(e);
	schemaStat = !schemaStat;
	schemaPicker.classList.toggle('is:on', schemaStat);
});

schemaClose.addEventListener('click', e => {
	schemaStat = false;
	schemaPicker.classList.toggle('is:on', false);
});
