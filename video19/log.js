var winston = require('winston');

module.exports = function(module){
    return makeLogger(module.filename);
};

function makeLogger(path) {

    if (path.match(/request.js$/)){
        
        var transtorts = {

                new winston.transports.Console({
                    timestamp: true,
                    colorize: true,
                level:'info'
            }),
    new winston.transports.File({filename:'debug.log', level:'debug'})
        };
    return new winston.Logger({transports:transports});

    }else{
    return new winston.Logger({
        transports: []
    });
    }
}

module.exports = function(req, res) {
    var urlParsed = url.parse(req.url, true);
    log.info("got request", req.method,req.url);

    if(req.method == "GET"&& urlParsed.pathname == "/echo"&&urlParsed.query.message){
        var message = urlParsed.query.message;
        res.end(message);
        return;
    }
    log.error("unknown URL");
    res.statusCode = 404;
    res.end("Not found");
};