const express = require('express');

const app = express();
const port = 3000;

// serve static
app.use(express.static('public/'));

app.get('/', (req, res) => {
	res.sendFile(__dirname + 'index.html');
});

// HTTP server
const server = app.listen(port, function() {
	console.log('Server is listening on', port);
});

// Socket.io server
const io = require('socket.io')(server);

io.on('connection', (socket) => {
	console.log('A user connected');

	// amid
	socket.on('chat message', (msg) => {
		io.emit('chat message', msg);
	});

	// disconnect
	socket.on('disconnect', () => {
		console.log('A user disconnected');
	});
});
