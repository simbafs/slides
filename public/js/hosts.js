;(() => {
	console.log('hosts.js loaded');

	var id = location.pathname.split('/')[2];
	var socket = io('/' + id);
	socket.on('hello', () => console.log('hello'));

	Reveal.on('slidechanged', (e) => {
		socket.emit('hostChange', {
			indexv: e.indexv,
			indexh: e.indexh
		});
	})
})();
