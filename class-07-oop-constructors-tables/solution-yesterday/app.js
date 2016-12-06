// Hints for Day 6 assignment
'use strict';

var hours = ['6am', '7am', '8am', '9am', '10am', '11am', '12pm', '1pm', '2pm', '3pm', '4pm', '5pm', '6pm', '7pm']; //eslint-disable-line

var firstAndPike = {
  locationName: 'First and Pike',
  minCustPerHour: 23,
  maxCustPerHour: 65,
  avgCookiesPerCust: 6.3,
  randomCustPerHour: [],
  totalCookiesSoldEachHour: [],
  totalDailyCookieSales: 0,
  calcRandomCustPerHour: function() {
    // a for loop over the length of the hours array
    this.randomCustPerHour.push('the math to calc a random number of customers between the min and the max');
  },
  calcTotalCookiesSoldEachHour: function() {
    // call the calcRandomCustPerHour method;
    // a for loop over the length of the hours array
    this.totalCookiesSoldEachHour.push('the random customers per hour multiplied by the average cookies per hour');
    // this is also a good place to calc the daily total with some kind of += action
  },
  render: function() {
    //  call the calcTotalCookiesSoldEachHour method;
    // grab the id of the empty ul for this location in the document
    // inside of a for loop, do the three parts of adding to the document
    // create an element, give it content, and append it
    // don't forget that in the list element you'll need to concatenate
    // and don't forget that outside of the for loop you need to create, content, and add a last list element for the daily total
  }
};

firstAndPike.render();
