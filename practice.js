// mimic OOP
// Animal is really a function
var Animal = function(type, color) {
  this.type = type;
  this.color = color;
  //this.info = function(){
  //  console.log("Type is: " + this.type + " Color is: " + this.color)
  //}
}

// all the Animals inherit this method from the prototype
Animal.prototype.info = function(){
  console.log("Type is: " + this.type + " Color is: " + this.color)
}

var tom = new Animal("Cat", "Brown");
