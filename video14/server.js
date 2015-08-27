/**
 * Created by ���� on 27.08.2015.
 */
var  http = require('http');

var server = new http.Server(); // ������� IP-���� � �������� �� ��� �������
//// EventEmitter
// ����������� �������:
// http.createServer(function(req,res) {
//res.writeHead(200, {"Content-type":'text/plain'})
//res.end("Hellow World");}).listen(1337, "127.0.0.1");

server.listen(1337, '127.0.0.1');
var counter = 0;
var emit = server.emit;
server.emit = function(event) {
    console.log(event);
    emit.apply(server, arguments);

};
server.on('request', function(req, res) {
    res.end("Hi world!"+ (++counter));
})// ������ �� ������ counter+2, ��� ����������� ��������

