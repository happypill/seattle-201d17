// Demo for objects-to-constructors
'use strict';

var juan = { //eslint-disable-line
  course: '201d17',
  firstName: 'Juan',
  lastInitial: 'V',
  faveNumber: 17,
  isCodeNinja: true,
  introduction: function() {
    console.log('My name is ' + this.firstName + ' and my favorite number is ' + this.faveNumber);
  }
};

// I would need 308 lines of code to model our class this way
// (28 students * 11 lines each)

// What if... I had a function to make these many similar objects for me? A function where I could pass in a student's **unique** characteristics/behaviors as arguments, "hardwire" the shared characteristics/behaviors, and then use that function to create the individual objects in memory?

function Student(firstName, lastInitial, faveNumber) { //eslint-disable-line
  this.course = '201d17';
  this.firstName = firstName;
  this.lastInitial = lastInitial;
  this.faveNumber = faveNumber;
  this.isCodeNinja = true;
  this.introduction = function() {
    console.log('My name is ' + this.firstName + ' and my favorite number is ' + this.faveNumber);
  }
  mahClass.push(this);
}

// And then, what if I had an array where I could store all of you?
var mahClass = []; //eslint-disable-line

// Instances
new Student('Juan', 'V', 17);
new Student('Cherise', 'M', 4);

// Instead of 275 lines, I can use an object constructor of 11 lines plus 28 one-line instantiations of individual students, and model the entire class with 39 lines.
