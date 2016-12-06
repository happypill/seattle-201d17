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
    for (var i = 0; i < hours.length; i++) {
      this.randomCustPerHour.push(Math.floor(Math.random() * (this.maxCustPerHour - this.minCustPerHour + 1)) + this.minCustPerHour);
          // console.log(this.randomCustPerHour, 'random customers per hour');
    }
  },
  calcTotalCookiesSoldEachHour: function() {
    this.calcRandomCustPerHour();
    // a for loop over the length of the hours array
    for (var i = 0; i < hours.length; i++) {
      this.totalCookiesSoldEachHour.push(Math.ceil(this.randomCustPerHour[i] * this.avgCookiesPerCust));
      // this is also a good place to calc the daily total with some kind of += action
      this.totalDailyCookieSales += this.totalCookiesSoldEachHour[i];
      // console.log(this.totalDailyCookieSales, 'running total of daily cookie sales');
    }
    // console.log(this.totalCookiesSoldEachHour, 'cookies sold each hour');
  },
  render: function() {
    //  call the calcTotalCookiesSoldEachHour method;
    this.calcTotalCookiesSoldEachHour();
    // grab the id of the empty ul for this location in the document
    var emptyUL = document.getElementById('firstandpikeUL');
    // inside of a for loop, do the three parts of adding to the document
    for (var i = 0; i < hours.length; i++) {
      // 6am: 16 cookies
      // create an element, give it content, and append it
      var liEl = document.createElement('li');
      liEl.textContent = hours[i] + ': ' + this.totalCookiesSoldEachHour[i] + ' cookies';
      emptyUL.appendChild(liEl);
      // don't forget that in the list element you'll need to concatenate
    }
    // and don't forget that outside of the for loop you need to create, content, and add a last list element for the daily total
    liEl = document.createElement('li');
    liEl.textContent = 'Total: ' + this.totalDailyCookieSales + ' cookies ';
    emptyUL.appendChild(liEl);
  }
};

firstAndPike.render();
