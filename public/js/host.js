var post = (data) => fetch('/host/check', {
	method: 'POST', headers: {
		'Accept': 'application/json',
		'Content-Type': 'application/json'
	},
	body: JSON.stringify(data)
});

var step = (() => {
	var toggle = [
		document.getElementsByName('path')[0],
		document.getElementsByName('name')[0],
		document.getElementsByName('key')[0],
		document.getElementsByName('start')[0]
	];
	var form = document.getElementsByTagName('form')[0];
	var steps = document.getElementById('step').children;
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
			// if(i >= n) toggle[i].classList.remove('is:off');
			// else toggle[i].classList.add('is:off');

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

	// 因為這些在手機上怪怪的所以暫時停用
	//
	// document.addEventListener('keydown', e => {
	//     switch(e.key){
	//         case 'ArrowDown':
	//         case ' ':
	//         case 'Enter':
	//             step(nowStep + 1);
	//             break;
	//         case 'ArrowUp':
	//         case 'Escape':
	//             step(nowStep - 1);
	//             break;
	//     }
	// });
})();
