'use strict';

//++++++++++++++++++++++++++
// Function declarations vs function expressions
//++++++++++++++++++++++++++

// Function declarations may be called anywehere in the code.

// declaration('I was called BEFORE the function declaration');

function declaration(msg) {
  console.log(msg);
}

// declaration('I was called AFTER the function declaration.');

// Function expressions, howver, may not be called before being assigned.

// expression('I was called BEFORE the function expression and blocking the rest of the code on the page from being exectuted! Comment me out to make the other code work again.');

var expression = function(msg) {
  console.log(msg);
};

// expression('I was called AFTER the function expression.');

// Why does this work this way...?

//++++++++++++++++++++++++++
// Scope & Hoisting
//++++++++++++++++++++++++++

// Let's refresh our minds on the concept of scope.

var globalVar  = '"I am GLOBALLY scoped and can be viewed, accessed, or modified from anywhere!""';

function theScopeMaker() {
  console.log(globalVar, 'said globalVar from inside a function.'); // works great

  var localVar = '"I am LOCALLY scoped and can be viewed, accessed, or modified from the scope in which I am created!"';

  console.log(localVar, 'said localVar from inside the function');
}

// console.log(localVar, 'This will cause an error to appear in the console that complains ,"...localVar is not defined"');

// What's causing this? A behavior of JS called "hoisting"


//++++++++++++++++++++++++++
// IIFEs
//++++++++++++++++++++++++++

(function anIffeCallsItelf() {
  var youCantSeeMe = 'Collin is stealthy';
   alert('This alert window is housed in an Immediately Invoked Function Expression! It runs on page load without polluting the global namespace. Everything inside of an IIFE is scoped locally. This is a standard technique for items that need to execute on page load.');
 }());


//++++++++++++++++++++++++++
//Prototypal inheritance
//++++++++++++++++++++++++++

// Let's revisit Class 7...

function Student(firstName, lastInitial, faveNumber) { //eslint-disable-line
  this.course = '201d17';
  this.firstName = firstName;
  this.lastInitial = lastInitial;
  this.faveNumber = faveNumber;
  this.isCodeNinja = true;
  mahClass.push(this);
}

Student.prototype.introduction = function() {
    console.log('My name is ' + this.firstName + ' and my favorite number is ' + this.faveNumber);
}

// And then, what if I had an array where I could store all of you?
var mahClass = []; //eslint-disable-line

// Instances; assigning them into variable for easier inspection
var juan = new Student('Juan', 'V', 17);
var ophelia = new Student('Ophelia', 'Y', 99);
var gary = new Student('Gary', 'L', 42);

// When we say that instances of "Student" inherit properties from the constructor "Student"... that's not exactly correct. Which in code, means that it is totally wrong.

// Actually, the instances of "Student" (that being juan, ophelia, and gary) inherit from a property on the "Student" constructor called "prototype", what we would express as "Student.prototype"

Student.prototype.nextCourse = '301d16';

Student.aintGonnaBeInherited = 'NO SOUP FOR YOU';

juan.homeland = 'Puerto Rico';

// This gives us flexibility in how we can manipulate individual instances of a constructor: we can do so all at once by manipulating the constructor, or we can also work with the objects individually to give them unique properties/values

// This also allows us to make our code a little neater and more modular when assigning functions as object properties (what we refer to as "methods")
