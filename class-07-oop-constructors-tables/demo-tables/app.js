'use strict';

var allCats = [];

function Cat(name, color, tail) {
  this.name = name;
  this.color = color;
  this.tail = tail;
  allCats.push(this);
  // console.log(this);
  render = function() {
    // FOR YOUR LAB!!!!
    // in here go the guts to make an individual table row
  }
}

new Cat('Buddy', 'Orange and White', 'VERY long');
new Cat('Alistair', 'Orange', 'Small');
new Cat('Trillian', 'Black/Orange', 'Very small');
new Cat('Meow Mix', 'Black', 'Medium');
new Cat('Toeny', 'Gray', 'Medium-Large');

// for(var i = 0; i < allCats.length; i++) {
//   console.log(allCats[i].name);
// }

/* To see what we need to do to build a HTML table with JS, let's take a look at the HTML needed to start the table and make the top two rows:

<table>

  <tr>              create tr
    <th>Name</th>   create a th, give it content, add it to tr
    <th>Color</th>  create a th, give it content, add it to tr
    <th>Tail</th>   create a th, give it content, add it to tr
  </tr>             add tr to the table

  <tr>
    <td>Buddy</td>
    <td>Orange and White</td>
    <td>VERY long</td>
  </tr>

Tables are built in the same way that a typewriter types: left-to-right, top-to-bottom.

We'll need to create and append HTML elements in the same order.

We have already put an empty <table> element in the HTML, with id="cats" */

function catTableJS() { //eslint-disable-line
  var catTable = document.getElementById('catjs');
  console.log('catTable is', catTable);

  // We need to make the header row first
  var trEl = document.createElement('tr');
  // create a th element, give it content, add it to tr
  var thEl = document.createElement('th');
  thEl.textContent = 'Name';
  trEl.appendChild(thEl);

  thEl = document.createElement('th');
  thEl.textContent = 'Color';
  trEl.appendChild(thEl);

  thEl = document.createElement('th');
  thEl.textContent = 'Tail';
  trEl.appendChild(thEl);

  catTable.appendChild(trEl);

  // Next, we need to make rows for the rest of the cats
  // Maybe a "for" loop that iterates through the array, making a new row for each cat on each pass?
  for (var i = 0; i < allCats.length; i++) {
    trEl = document.createElement('tr');

    var tdEl = document.createElement('td');
    tdEl.textContent = allCats[i].name;
    trEl.appendChild(tdEl);

    tdEl = document.createElement('td');
    tdEl.textContent = allCats[i].color;
    trEl.appendChild(tdEl);

    tdEl = document.createElement('td');
    tdEl.textContent = allCats[i].tail;
    trEl.appendChild(tdEl);

    catTable.appendChild(trEl);
  }
}

// FOR YOUR LAB
// a for loop over the array of stores that calls the render() method on each individual location as shown on the whiteboard at the very end
