var http = require('http');

http.createServer(function(req, res){
    var part = 0;
    setImmediate(function run(){
        heavyCalc(part++);
        if(notFinished) setImmediate(run);
    });
    //process.nextTick(function(){
    //    req.on('readable',function(){
    //        //должен сделать на ближайших данных
    //    })
    //
    //});
}).listen(1337);