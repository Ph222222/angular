var connect = require('connect');
serveStatic = require('serve-static');


var app = connect();
console.log ('hi');
app.use(serveStatic("/www/node/angularjs"));
app.listen(5000);