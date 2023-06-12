/*
this file is not an application but a collection of exercises, 
the variable names are deliberately duplicated to respect the 
succession of FreeCodeCamp exercises
*/

let dog = {
    name: "Spot",
    numLegs: 4,
    sayLegs: function () {
        return "This dog has " + dog.numLegs + " legs."
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
    sayLegs: function () { return "This dog has " + this.numLegs + " legs."; }
};

dog2.sayLegs();

// constructor

function Dog() {
    this.name = "Rupert";
    this.color = "brown";
    this.numLegs = 4;
}

let hound = new Dog();

function Dog(name, color) {
    this.name = name;
    this.color = color;
    this.numLegs = 4;
}
let terrier = new Dog("GinoCane", "black");

// instance of
function House(numBedrooms) {
    this.numBedrooms = numBedrooms;
}

let myHouse = new House(43);

console.log(myHouse instanceof House);

function Bird(name) {
    this.name = name;
    this.numLegs = 2;
}

let canary = new Bird("Tweety");
let ownProps = [];
for (let property in canary) {
    if (canary.hasOwnProperty(property)) {
        ownProps.push(property);
    }
}
console.log(ownProps);

/*
Dog.prototype.numLegs = 4;
Ora tutte le istanze di Dog hanno la proprietà numLegs.
*/

function Dog(name) {
    this.name = name;
}
Dog.prototype.numLegs = 4;


let beagle = new Dog("Snoopy");
console.log(beagle.numLegs);

function Dog(name) {
    this.name = name;
  }
  
  Dog.prototype.numLegs = 4;
  
  let beagle = new Dog("Snoopy");
  
  let ownProps = [];
  let prototypeProps = [];
  
  for(let property in beagle){
    if(beagle.hasOwnProperty(property)){
      ownProps.push(property);
    }else{
      prototypeProps.push(property);
    }
  }