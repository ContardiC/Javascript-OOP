let dog = {
  name: "Spot",
  numLegs: 4,
  sayLegs: function(){ 
    return "This dog has "+ dog.numLegs + " legs."
  }

};

console.log(dog.name, dog.numLegs);

console.log(dog.sayLegs());

/*
best way to use object attributes.
In case the name of the object changes the method will work without problems.

-> Use this to refer to the object <-
*/

let dog2 = {
  name: "Spot",
  numLegs: 4,
  sayLegs: function() {return "This dog has " + this.numLegs + " legs.";}
};

dog2.sayLegs();

// constructor

function Dog() {
  this.name = "Rupert";
  this.color = "brown";
  this.numLegs = 4;
}

let hound = new Dog();