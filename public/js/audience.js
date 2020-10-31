;(() => {
	console.log('audience.js loaded');

	var id = location.pathname.split('/')[2];
	var socket = io();

	socket.emit('join', id);

	socket.on('msg', console.log);
	socket.on('changePage', e => {
		Reveal.slide(e.indexh, e.indexv);
		console.log(e);
	});
	socket.on('hello', () => console.log('hello'));
})();
