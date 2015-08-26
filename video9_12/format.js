var util = require('util');

var str = util.format("My %s %d %j", "string", 123 , {test: "obj"});
var str2 = util.format("My %s %s  some  %j", "string", "..." , 1234);
var str3 = util.format("My %d %s   %s", true, "some" , {test: "obj"});
var str4 = util.format("My %s %d %j", "string", 123 , [1,2,3,4]);
var str5 = util.format("My %s %j %d", "string", "lena" , {test: "obj"});
var str6 = util.format("My %s some %j %j", "string", 123 , true);
console.log(str);
console.log(str2);
console.log(str3);
console.log(str4);
console.log(str5);
console.log(str6);

