var util = require('util');

var phrases = {
    "Hello": "Hi",
    "world": 'world'
};
// message name stack
function PhraseError(message){
    this.message = message; // Error.apply(this, arguments)
    Error.captureStackTrace(this, HttpError);
}
util.inherits(PhraseError, Error);
PhraseError.prototype.name = 'PhraseError';


function HttpError(status, message) {
    this.status = status;
    this.message = message;
    Error.captureStackTrace(this, HttpError);
}

util.inherits(HttpError,Error);
HttpError.prototype.name = "HttpError";



function getPhrase(name) {
    if(!phrases[name]) {
        throw new PhraseError("There is no such phrase:"+name); // HTTP 500, уведомление!
    }
    return phrases[name];
}
function makePage(url) {
    if(url != 'index.html') {
        throw new HttpError("There is no such page");// HTTP 404
    }
    return util.format("%s, %s!", getPhrase("Hssss"),getPhrase('world'));
}


try {
    var page = makePage('index.html');
    console.log(page);
} catch(e) {
    if( e instanceof HttpError){
        console.log(e.status, e.message);
    }else{
        console.log("Ошибка %s\n сообщение: %s\n стек: %s", e.name, e.message,e.stack);
    }
}

/*
 Ошибка PhraseError
 сообщение: There is no such phrase:Hssss
 стек:  PhraseError: There is no such phrase:Hssss
 at new PhraseError (E:\JavaScript\CHI\Kantor\video9_11\error.js:10:11)
 at getPhrase (E:\JavaScript\CHI\Kantor\video9_11\error.js:28:15)
 at makePage (E:\JavaScript\CHI\Kantor\video9_11\error.js:36:35)
 at Object.<anonymous> (E:\JavaScript\CHI\Kantor\video9_11\error.js:41:16)
 at Module._compile (module.js:460:26)
 at Object.Module._extensions..js (module.js:478:10)
 at Module.load (module.js:355:32)
 at Function.Module._load (module.js:310:12)
 at Function.Module.runMain (module.js:501:10)
 at startup (node.js:129:16)

 */