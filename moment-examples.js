var moment = require('moment');
var now = moment();

console.log(now.format());
console.log(now.format('X')); //seconds since Jan 1st 00:00:00 TIMESTAMP
console.log(now.format('x')); //miliseconds instead of seconds

var timestamp = 1499938248186;
var timestampMoment = moment.utc(timestamp);
console.log(timestampMoment.local().format('h:mm a'));


console.log(now.format("dddd, MMMM Do YYYY, h:mm:ss a"));
now.subtract(1, 'year');
console.log(now.format("dddd, MMMM Do YYYY, h:mm:ss a"));
now.add(1, 'year');
console.log(now.format("h:mm a"));
console.log(now.format("MMM Do YYYY, h:mma"));
