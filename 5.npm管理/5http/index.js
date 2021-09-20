const http = require('http');
const callback = require("./m1");
const server = http.createServer(callback.callback1);
server.listen(80,callback.callback2);