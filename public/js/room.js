(() => {
	var createBtn = document.querySelector('#createBtn');
	var room = document.querySelector('#room');
	var create = document.querySelector('#create');

	createBtn.addEventListener('click', () => {
		room.classList.add('u-dsp:n');
		create.classList.remove('u-dsp:n');
	});
})();
