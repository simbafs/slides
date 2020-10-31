let hosts = require('../lib/hosts');

module.exports = (io) => {
	io.on('connection', (socket) => {
		let id;
		console.log(`Socket: a new connection`);

		socket.emit('hello');

		socket.on('login', e => {
			if(hosts.find(i => i.id === e.id).key === e.key) {
				socket.join(id);
				id = e.id;
				socket.emit('msg', 'logind');
			}else{
				socket.emit('msg', 'login failed');
			}
		});

		socket.on('join', e => {
			if(hosts.find(i => i.id === e)){
				socket.join(e);
				id = e;
				socket.emit('msg', 'join' + e);
			}else{
				socket.emit('msg', 'no such room');
			}
		})

		socket.on('hostChange', data => io.to(id).emit('changePage', data));
	});
};
