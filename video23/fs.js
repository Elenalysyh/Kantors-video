var fs = require('fs');

fs.readFile(__filename, function(err, data){
    if(err){
        console.error(err);
        if(err.code == "ENOENT") {
            console.error(err.message);
        }else{
            console.error(err);
        }
    }else{
        console.log('data',data.toString());

    }
});

var fs1 = require('fs');
fs1.stat(__filename, function(err, stats){
    console.log(stats.isFile());
    console.log(stats);
});


var fs2 = require('fs');

fs2.writeFile("file.tmp","data", function(err){
    if(err) throw err;
    fs2.rename("file.tmp","new.tmp", function(err){
        if(err){throw err;}
        fs2.unlink("new.tmp",function(err){
            if(err) throw err;
        });
    });
});