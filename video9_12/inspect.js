// Was
var util = require('util');

var obj = {

    a: 5,
    b: 6,
};
obj.self = obj;
console.log(util.inspect(obj));




// New

var obj1 = new Object();
obj1.a = 7;
obj1.b = 8; // почему то не сработал obj[b] = 8
console.log(Object.isPrototypeOf(obj));// false
console.log(Object.isPrototypeOf(obj1));// false
// результат одинаковый. Как задать и увидить потом непреречисляемые свойства?
console.log(util.inspect(obj,{ showHidden: false, depth: null }));//{ a: 5, b: 6, self: [Circular] }

console.log(util.inspect(obj,{ showHidden: true, depth: null }));//{ a: 5, b: 6, self: [Circular] }

// есть ли разница между двумя вариантами?
console.log(util.inspect(obj,true, null));//{ a: 5, b: 6, self: [Circular] }

console.log(util.inspect(obj,false, null));//{ a: 5, b: 6, self: [Circular] }


// isArray
var util1 = require('util');
console.log(util1.isArray([1,2,3]));// true
console.log(util1.isArray(new Array));// true
console.log(util1.isArray({"a":1,"b":2}));// false

//isDate(obj)
var util2 = require('util');
console.log(util2.isDate(new Date()));// true
console.log(util2.isDate(Date()));// false (without 'new' returns a String)
console.log(util2.isDate({}));// false

// isError
var util3 = require('util');
console.log(util3.isError(new Error()));// true
console.log(util3.isError(new TypeError()));// true
console.log(util3.isError({ name: 'Error', message: 'an error occurred' }));// false

// log(string)
require('util').log('Timestmaped messege.');//27 Aug 01:30:32 - Timestmaped messege.


