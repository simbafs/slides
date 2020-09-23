var colorBtn = document.getElementById('colorBtn');
var colorClose = document.getElementById('colorClose');
var colorPicker = document.getElementById('colorPicker');
var colorSchema = document.getElementsByClassName('colorSchema');
var colorStat = false;

colorBtn.addEventListener('click', e => {
	console.log(e);
	colorStat = !colorStat;
	colorPicker.classList.toggle('is:on', colorStat);
});

colorClose.addEventListener('click', e => {
	colorStat = false;
	colorPicker.classList.toggle('is:on', false);
});
