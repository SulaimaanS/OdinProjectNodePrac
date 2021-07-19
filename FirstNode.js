var http = require('http');
var url = require('url');

var dateTime = require('./DateModule');


http.createServer(function (req, res) {
    res.writeHead(200, { 'Content-Type': 'text/html' });
    var q = url.parse(req.url, true).query;
    var txt = q.year + ' ' + q.month;

    console.log(q.host);
    console.log(q.pathname);
    console.log(q.search);
    
    //var qdata = q.query;
    //console.log(qdata.month);
    //res.write('The date and time are currently: ' + dateTime.myDateTime());
    //res.write('The current season is' + req.url)

    res.end(txt);
    //res.end('End of Response');
}).listen(8080);