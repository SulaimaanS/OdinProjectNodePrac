var http = require('http');
var filesystem = require('fs');

http.createServer(function (req, res) {
    filesystem.readFile('demo1.html', function (err, data) {
        res.writeHead(200, { 'Content-Type': 'text/html' });
        res.write(data);
        return res.end();
    });
}).listen(8080);