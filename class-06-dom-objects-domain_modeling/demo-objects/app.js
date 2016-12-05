'use strict';

var myArray = ['a', 'b', 'c'];
// console.log('myArray is', myArray);
//
var myObject = {
  0: 'a',
  1: 'b',
  2: 'c'
};
// console.log('myObject is', myObject);
//
var emptyObject = {};
emptyObject.frazier = 'Fraz';
// console.log(emptyObject);

var oneLineObject = { a: 1, b: 2 };
// console.log(oneLineObject);
//
var genericObject = {
  key1: 'value1',
  key2: 'value2',
  'multi-word key': 'value3',
  method: function() {
    //do stuff
    alert('YOU DONE CALLED MY METHOD ERMAGEHRD');
  }
};
//
var sam = {
  //properties
  firstName: 'Sam',
  middleName: null,
  lastName: 'Hamm',
  rating: 0,
  isABoss: true,
  underlings: ['Rachel', 'Frazier', 'Aliza', 'Maelle'],

  //methods
  getRating: function() {
    return this.rating;
  },
  setRating: function(num) {
    return this.rating = num;
  },
  listUnderlings: function(){
    for (var i = 0; i < this.underlings.length; i++) {
      console.log(this.underlings[i]);
    }
  }
 };

sam.employer = {
  name: 'Code Fellows',
  location: 'Seattle'
};
//
sam.logName = function() {
  console.log(this.firstName + ' ' + this.lastName);
};

sam.whatIsThis = function() {
    console.log(this);
};

sam.whatIsThis(); //logs the sam object
