#!/usr/bin/env python
import socket

TCP_IP = 'localhost'
TCP_PORT = 8080
BUFFER_SIZE = 20

s = socket.socket(socket.AF_INET, socket.SOCK_STREAM)
s.bind((TCP_IP, TCP_PORT))
s.listen(1)

conn, addr = s.accept()
print('PYTHON: listening at {}:{}'.format(TCP_IP, TCP_PORT))
while 1:
	data = conn.recv(BUFFER_SIZE)
	if data.decode().rstrip('\n') == 'DIE' or not data: break
	print('PYTHON: received: ', data)
	print('PYTHON: sending: ', data)
	conn.send(data) # ECHO!!!

