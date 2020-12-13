const socket = io();

const form = document.getElementById('form');
const input = document.getElementById('input');
const ul = document.getElementById('msg-list');

form.addEventListener('submit', (e) => {
	e.preventDefault();

	socket.emit('chat message', input.value);
});

socket.on('chat message', (msg) => {
	const li = document.createElement('li');
	li.innerHTML = msg;
	ul.append(li);
});
