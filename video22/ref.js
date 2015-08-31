var http = require('http');

var server = new http.Server(function(req, res) {}).listen(3001);

setTimeout(function(){
    server.close();

   //     process.exit();
     //   clearInterval(timer);

},2500);

var timer = setInterval(function(){
    console.log(process.memoryUsage());
},1000);

timer.unref();
timer.ref();