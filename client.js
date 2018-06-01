#!/usr/bin/env node
const net = require('net');

const msgDelay = 1000;	// delay in between sending messages
let interval;
let count = 10;

const client = net.createConnection({ port: 8080 }, () => {
	console.log('JS: connected!');
	interval = setInterval(() => {
		if (!count) {
			clearInterval(interval);
			client.write('DIE');
			return;
		}
		console.log(`JS: sending: ${count}`);
		client.write(count-- + '');
	}, msgDelay);
});
client.on('data', data => {
	console.log(`JS: received: ${data.toString()}`);
});
client.on('end', () => {
	console.log('JS: disconnected!');
});
