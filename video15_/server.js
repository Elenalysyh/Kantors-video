var  http = require('http');
var url = require('url');

var server = new http.Server(function(req, res){
    console.log(req.headers);

    console.log(req.method, req.url);

    var urlParsed = url.parse(req.url, true);
    console.log(urlParsed);

    if(urlParsed.pathname == '/echo'&& urlParsed.query.message){
        res.statusCode = 200 ; // Ok
       // res.writeHead(200, "ok", {'Cache-control':'no-cache'}); // ����� ������.�������:
        // ��������� ����� ���������� �������
        res.setHeader('Cache-control', 'no-cache');// removeHeader
        // ��������� ����� ���������� �� ������ �� ������, � ������ �
        // ��������� �������
        res.end(urlParsed.query.message);
    }else{
        res.statusCode = 404; // Not found
        res.end("Page not found");
    }

});
server.listen(1337, '127.0.0.1');
