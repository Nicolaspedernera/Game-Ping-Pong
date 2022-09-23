const http = require('http');
const api = require('./api');
const server = http.createServer(api);
const io = require('socket.io')(server, {
  cors: {
    origin: '*',
    methods: ['GET', 'POST'],
  },
});
const sockets = require('./sockets.js');

const PORT = 4000;

server.listen(PORT);

console.log(`Listening on port ${PORT}....`);

sockets.listen(io);
