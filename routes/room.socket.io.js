module.exports = (io) => {
	io.on('connection', (socket) => {
		let id;
		console.log(`SocketL a new connection`);

		socket.emit('hello');

		socket.on('id', e => {
			id = e;
			socket.join(e);
		});

		socket.on('hostChange', data => io.to(id).emit('changePage', data));
	});
};
