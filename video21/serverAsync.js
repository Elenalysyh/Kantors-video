var http = require("http");
var fs = require('fs');


// ����� �� �������� ����� ������� ������������?
// ��� ���������  � ����, ������� ������?
// 3. ������� (���� �������� ��������� ���� �����)
http.createServer(function(req,res){
    var info;
    if(req.url == '/'){

        console.time("start");
            fs.readFile('index.html',function(err, info) {
                if (err) {

                    console.error(err);
                    res.statusCode = 500;
                    res.end("�� ������� ��������� ������");
                    return;
                }
                res.end(info);
                console.timeEnd("start");
            });

    }else {
        /*404*/
    }
}).listen(3000);