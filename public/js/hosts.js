;(() => {
	console.log('hosts.js loaded');

	var id = location.pathname.split('/')[2];
	var socket = io();

	socket.on('hello', () => console.log('hello'));
	socket.on('changePage', console.log);


	socket.emit('id', id);

	Reveal.on('slidechanged', (e) => {
		socket.emit('hostChange', {
			indexv: e.indexv,
			indexh: e.indexh
		});
	})
})();
