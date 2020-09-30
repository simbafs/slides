var firstUseToggle = (() => {
	var firstUse = document.getElementById('firstUse');
	var firstUseClose = document.getElementById('firstUseClose');

	var firstUseToggle = () => firstUse.classList.toggle('is:on');

	if(localStorage.getItem('visited') !== 'true'){
		firstUseToggle();
		localStorage.setItem('visited', 'true');
	}

	firstUseClose.addEventListener('click', firstUseToggle);

	return firstUseToggle;
})();
