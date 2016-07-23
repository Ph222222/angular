var connect = require('connect');
var serveStatic = require('serve-static');
var ipModule = require('./getIp');

var app = connect();
console.log ('hi');
ipModule.getIp();
var os = require('os');
var ifaces = os.networkInterfaces();
 
app.use(serveStatic("/www/node/angularjs"));
app.listen(5000);
