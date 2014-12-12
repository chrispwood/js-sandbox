// Testing out websockets
// only unidirectional right now

var WebSocketServer = require('ws').Server;
var wss = new WebSocketServer({port:8181});

wss.on('connection', function(ws) {
  console.log('client connected');
  ws.on('message', function(message) {
    console.log(message);
  })
});

process.stdout.write("server started at localhost:8181\n");
process.stdout.write("waiting for a connection to echo back to...\n");
