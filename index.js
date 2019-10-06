
const { date } = require('./route/date');
const { time } =  require('./route/time');

const date_ = new Date('1991-08-28 13:10:10');

// date
var res = date(date_, 111);
// console.log(res);

// time
var res = time(date_, 14);
console.log(res) 