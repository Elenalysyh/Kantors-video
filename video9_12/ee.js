// ���� ����������� ���������� ��
// ��������� ���������� �� �������
// ����������� ����������� � �� �� ������� , � ������� ���������

var EventEmitter = require ('events').EventEmitter;
var server = new EventEmitter;

server.on('request', function(request){
    request.approved = true;
});

server.on('request', function(request){
    console.log(request);
});


server.emit('request', {from:"Customer"});
server.emit('request', {from: "One more customer"});