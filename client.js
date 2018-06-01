const net = require('net');

const client = net.createConnection({ port: 8080 }, () => {
	console.log('JS: connected!');
	client.write('ECHO ME PLS');
});
client.on('data', data => {
	console.log(`JS: response: ${data.toString()}`);
	client.end();
});
client.on('end', () => {
	console.log('JS: disconnected!');
});
