/*
  EXAMPLE TASK:
    - Write an Airplane constructor that initializes `name` from an argument.
    - All airplanes built with Airplane should initialize with an `isFlying` of false.
    - Give airplanes the ability to `.takeOff()` and `.land()`:
        + If a plane takes off, its `isFlying` property is set to true.
        + If a plane lands, its `isFlying` property is set to false.
*/

// EXAMPLE SOLUTION CODE:
function Airplane(name) {
  this.name = name;
  this.isFlying = false;
}
Airplane.prototype.takeOff = function () {
  this.isFlying = true;
};
Airplane.prototype.land = function () {
  this.isFlying = false;
};


/*
// 👇 COMPLETE YOUR WORK BELOW 👇
// 👇 COMPLETE YOUR WORK BELOW 👇
// 👇 COMPLETE YOUR WORK BELOW 👇
*/

/*
  TASK 1
    - Write a Person Constructor that initializes `name` and `age` from arguments.
    - All instances of Person should initialize with an empty `stomach` array.
    - Give instances of Person the ability to `.eat("someFood")`:
        + When eating an edible, it should be pushed into the `stomach`.
        + The `eat` method should have no effect if there are 10 items in the `stomach`.
    - Give instances of Person the ability to `.poop()`:
        + When an instance poops, its `stomach` should empty.
    - Give instances of Person a method `.toString()`:
        + It should return a string with `name` and `age`. Example: "Mary, 50"
*/

function Person(name, age) {
  this.name = name;
  this.age = age;
  this.stomach = [];
}

Person.prototype.eat = function(food){
  if(this.stomach.length < 10){
    this.stomach.push(food);
  }
}


Person.prototype.poop = function(){
  this.stomach = [];
}

Person.prototype.toString = function(){
  return `${this.name}, ${this.age}`
}

const personOne = new Person('Kay', 26);
console.log(personOne.toString());
personOne.eat('tacos');
personOne.eat('fried chicken');
personOne.eat('cheeseburger');
console.log(personOne.stomach);
personOne.poop();
console.log(personOne.stomach);

/*
  TASK 2
    - Write a Car constructor that initializes `model` and `milesPerGallon` from arguments.
    - All instances built with Car:
        + should initialize with an `tank` at 0
        + should initialize with an `odometer` at 0
    - Give cars the ability to get fueled with a `.fill(gallons)` method. Add the gallons to `tank`.
    - STRETCH: Give cars ability to `.drive(distance)`. The distance driven:
        + Should cause the `odometer` to go up.
        + Should cause the the `tank` to go down taking `milesPerGallon` into account.
    - STRETCH: A car which runs out of `fuel` while driving can't drive any more distance:
        + The `drive` method should return a string "I ran out of fuel at x miles!" x being `odometer`.
*/

function Car(attributes) {
  this.model = attributes.model;
  this.milesPerGallon = attributes.milesPerGallon;
  this. tank = 0;
  this.odometer = 0;
}

Car.prototype.fill = function(gallons){
  this.tank += gallons;
}


/*
  TASK 3
    - Write a Baby constructor subclassing Person.
    - Besides `name` and `age`, Baby takes a third argument to initialize `favoriteToy`.
    - Besides the methods on Person.prototype, babies have the ability to `.play()`:
        + Should return a string "Playing with x", x being the favorite toy.
*/

function Baby(babyAttributes){
  Person.call(this, babyAttributes);
  this.favToy = babyAttributes.favToy;
}

Baby.prototype.play = function(){
  console.log(`${this.name} is ${this.age} old and love to play with ${this.favToy}`);
}

const newBaby = new Baby({
  name: 'Sally',
  age: '8 months',
  favToy: 'Rattle',
});

// console.log(newBaby);
newBaby.play();

/* 
  TASK 4

  In your own words explain the four principles for the "this" keyword below:
  1. Window/Global Binding meaning, if "this" has nothing to refer to it will default to the window binding
  2. "this" has implicit binding, meaning whatever is to the left of the dot is what the "this keyword" refers to when calling a function
  3. "this" has new binding, meaning whenever we create a constructor function the "this" keyword points to the newly created object
  4. "this" has explicit binding meaining when using .call() .apply() or .bind() we pass what "this" is refering to in the parameters 
*/


///////// END OF CHALLENGE /////////
///////// END OF CHALLENGE /////////
///////// END OF CHALLENGE /////////
if (typeof exports !== 'undefined') {
  module.exports = module.exports || {}
  if (Airplane) { module.exports.Airplane = Airplane }
  if (Person) { module.exports.Person = Person }
  if (Car) { module.exports.Car = Car }
  if (Baby) { module.exports.Baby = Baby }
}
