var http = require("http");
var fs = require('fs');


// 1. Блокирует - используется там, где нет параллелизма
// 2. Работает try ... catch
// 3. Прост и понятен всем
http.createServer(function(req,res){
    var info;
    if(req.url == '/'){

        try {
            console.time("start");
            info = fs.readFileSync('index.html');
            console.timeEnd("start");
        }catch(err){
            console.error(err);
            res.statusCode = 500;
            res.end("It is erroe in the browser ");
            return;
        }
        res.end(info);
    }else {
        /*404*/
    }
}).listen(3000);