var http = require('http');
var url = require('url');
var filesystem = require('fs');
//var dateTime = require('./DateModule');


http.createServer(function (req, res) {
    var q = url.parse(req.url, true);
    var filename = "." + q.pathname;

    filesystem.readFile(filename, function (err, data) {
        if (err) {
            res.writeHead(404, { 'Content-Type': 'text/html' });
            return res.end("404 Not Found");
        }
        res.writeHead(200, { 'Content-Type': 'text/html' });
        res.write(data);
        return res.end();
    });

    //console.log(q.host);
    //console.log(q.pathname);
    //console.log(q.search);

    //var qdata = q.query;
    //console.log(qdata.month);
    //res.write('The date and time are currently: ' + dateTime.myDateTime());
    //res.write('The current season is' + req.url)

    //res.end(txt);
    //res.end('End of Response');
}).listen(8080);