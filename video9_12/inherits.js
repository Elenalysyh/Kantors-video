var util = require ('util');
// Parent
function Animal(name){
    this.name = name;
}
Animal.prototype.walk = function () {
    console.log("walk "+this.name);
};

// Child

function Rabbit(name) {
    this.name = name;
};
util.inherits(Rabbit, Animal);
Rabbit.prototype.jump = function(){
    console.log("Jump " + this.name);
};

// Use
var rabbit = new Rabbit("our rabbit ");
rabbit.walk();
rabbit.jump();