var http = require("http");
var fs = require('fs');


// Любые ли операции можно сделать асинхронными?
// Как поступить  с тему, которые нельзя?
// 3. Сложнее (есть способоы упростить себе жизнь)
http.createServer(function(req,res){
    var info;
    if(req.url == '/'){

        console.time("start");
            fs.readFile('index.html',function(err, info) {
                if (err) {

                    console.error(err);
                    res.statusCode = 500;
                    res.end("На сервере произошла ошибка");
                    return;
                }
                res.end(info);
                console.timeEnd("start");
            });

    }else {
        /*404*/
    }
}).listen(3000);