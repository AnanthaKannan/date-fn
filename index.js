
const { date } = require('./router');


const date_ = new Date('1991-08-28 13:10:10');

// date
var res = date(date_, 64);
console.log(res);

// // time
// var res = date(date_, 121);
// console.log(res) 


module.exports = {
    date
}