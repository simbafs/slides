;(() => {
	console.log('hosts.js loaded');

	var id = location.pathname.split('/')[2];
	var key = Cookies.get(id);
	var socket = io();

	socket.on('hello', () => console.log('hello'));
	socket.on('msg', console.log);


	socket.emit('login', { id, key });

	Reveal.on('slidechanged', (e) => {
		socket.emit('hostChange', {
			indexv: e.indexv,
			indexh: e.indexh
		});
	})
})();
