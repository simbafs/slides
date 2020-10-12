var step = (() => {
	var toggle = [
		document.querySelector('#createPath'),
		document.querySelector('#createName'),
		document.querySelector('#createKey'),
		document.querySelector('#createSubmit')
	];
	var form = document.querySelector('#create form');
	var steps = document.getElementById('createStep').children;
	var nowStep = 0;

	function step(n){
		// check n
		if(n > 3 || n < 0) return;

		// check validation
		if(toggle[nowStep].checkValidity()){
			toggle[nowStep].classList.remove('is:danger');
		}else{
			toggle[nowStep].classList.add('is:danger');
			return;
		}

		for(i in toggle){
			if(i == n) steps[i].classList.add('is:on');
			else steps[i].classList.remove('is:on');
		}
		toggle[n].focus ? toggle[n].focus() : null;
		nowStep = n;
	}

	toggle.forEach((item, index) => item.addEventListener('focus', () => step(index)));

	var query = location.search.slice(1).split('&').map(i => i.split('=')).reduce((a, b) => {a[b[0]] = b[1]; return a}, {});

	if(query.path){
		toggle[0].value = query.path
		step(1);
	}

	return step;
})();

(() => {
	var createBtn = document.querySelector('#createBtn');
	var create = document.querySelector('#create');
	var createClose = document.querySelector('#createClose');

	console.log(createBtn);

	createBtn.addEventListener('click', () => {
		create.classList.add('is:on');
	});

	createClose.addEventListener('click', () => {
		create.classList.remove('is:on');
	});
})();
