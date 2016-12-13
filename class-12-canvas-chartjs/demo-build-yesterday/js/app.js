'use strict';

// ++++++++++++++++++++++++++++
// ++++++++++++++++++++++++++++
// DATA SETUP
// ++++++++++++++++++++++++++++
// ++++++++++++++++++++++++++++

// DOM variables
// -----------------
var picContainer = document.getElementById('pic-container');
var left = document.getElementById('left');
var center = document.getElementById('center');
var right = document.getElementById('right');

// Global variables
// -----------------
var allProducts = [];
var names = ['bag', 'banana', 'bathroom', 'boots', 'bubblegum', 'chair', 'cthulhu', 'dog_duck', 'dragon', 'pen', 'scissors', 'shark', 'sweep', 'tauntaun', 'unicorn', 'usb', 'water_can', 'wine_glass'];
var newArray = [];
var oldArray = [];

// Constructor
// -----------------
function Product(name) {
  this.name = name;
  this.filepath = 'img/' + name + '.jpg';
  this.clicks = 0;
  this.views = 0;
  allProducts.push(this);
}

// Instances
// -----------------
for(var i = 0; i < names.length; i++) {
  new Product(names[i]);
}
// console.table(allProducts);

// ++++++++++++++++++++++++++++
// ++++++++++++++++++++++++++++
// DECLARE FUNCTIONS
// (DEFINE ACTIONS)
// ++++++++++++++++++++++++++++
// ++++++++++++++++++++++++++++

function rand() {
  return Math.floor(Math.random() * allProducts.length);
}

function makeArrayOfThreeNumbers() {
  oldArray[0] = newArray[0];
  oldArray[1] = newArray[1];
  oldArray[2] = newArray[2];

  newArray[0] = rand();
  while (newArray[0] === oldArray[0] || newArray[0] === oldArray[1] || newArray[0] === oldArray[2]){
    newArray[0] = rand();
  }

  newArray[1] = rand();
  while (newArray[1] === newArray[0] || newArray[1] === oldArray[0] || newArray[1] === oldArray[1] || newArray[1] === oldArray[2]){
    newArray[1] = rand();
  }

  newArray[2] = rand();
  while (newArray[2] === newArray[0] || newArray[2] === newArray[1] || newArray[2] === oldArray[0] || newArray[2] === oldArray[1] || newArray[2] === oldArray[2]) {
    newArray[2] = rand();
  }
}

function showThreePics() {
  makeArrayOfThreeNumbers();
  // this will place three new images on the page and add 1 to the view for that pic
  left.src = allProducts[newArray[0]].filepath;
  allProducts[newArray[0]].views += 1;
  center.src = allProducts[newArray[1]].filepath;
  allProducts[newArray[1]].views += 1;
  right.src = allProducts[newArray[2]].filepath;
  allProducts[newArray[2]].views += 1;
}

function renderList() {
  // display a list of items and total clicks/views
}

function handleClick(event) {
  event.preventDefault();
  // identify who was clicked
  // tally the click
  // display 3 new images
  // prevent duplicates
  // alert for clicks not on images
  // clear old images
  // check whether total clicks <25
  // after 25, remove event listeners on picNames
  // after 25, show "Results" button
}
// ++++++++++++++++++++++++++++
// ++++++++++++++++++++++++++++
// CODE THAT RUNS ON PAGE LOAD
// (EXECUTE ACTIONS)
// ++++++++++++++++++++++++++++
// ++++++++++++++++++++++++++++

showThreePics();
picContainer.addEventListener('click', handleClick);
