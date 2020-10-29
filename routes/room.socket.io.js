module.exports = (io) => {
	io.of(/\/\d+/).on('connection', (socket) => {
		console.log(`SocketL a new connection of ${socket.nsp.name}`);

		socket.emit('hello');
		socket.on('hostChange');
	});
};
