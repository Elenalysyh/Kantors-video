/**
 * Created by Лена on 01.09.2015.
 */
var fs2 = require('fs');

// async
    console.time("async");
    for( var i = 0; i<2000; i+=1) {
        (function (i){
            fs2.writeFile(i+"file.tmp","data", function(err){
                if(err) throw err;
                console.log(i+"file.tmp");
                    fs2.rename(i.toString()+"file.tmp",i+"new.tmp", function(err){
                        if(err){throw err;}
                        console.log(i+"new.tmp");
                            fs2.unlink(i+"new.tmp",function(err){
                                if(err) throw err;
                            });
                    });
            });
        })(i);

    }
    console.timeEnd("async");

// sync
console.time('sync');
for (var i = 0; i<2000; i+=1) {
    fs2.writeFileSync(i+"fileSync.tmp", "data");
    fs2.renameSync(i+"fileSync.tmp",i+"newSync.tmp");
    fs2.unlinkSync(i+"newSync.tmp");
}
console.timeEnd('sync');

