var http = require("http");
var fs = require('fs');

http.createServer(function(req,res){
    var info;
    if(req.url == '/'){
       // info = fs.readFileSync('index.html');
        fs.readFile('index.html', function(err, info){
            if(err){
                console.error(err);
                res.statusCode = 500;
                res.end("�� ������� ��������� ������");
                return;
            }
            res.end(info);
        });
    }
}).listen(3000);