
const { date } = require('./router');


// const date_ = new Date('1991-08-28 13:10:10');
// var res = date(date_, 109, '/');
// console.log(res);

module.exports = {
    date
}







let from_ = new Date('2018-08-29');
    let to_ = new Date('2018-08-28')

// sub(from_, to_);
function sub(from, to){
    const milisec = from.getTime() - to.getTime();
    const seconds  = (milisec / 1000).toFixed(1);
    const minutes  = (milisec / (1000 * 60)).toFixed(1);
    const hours  = (milisec / (1000 * 60 * 60) ).toFixed(1);
    const days  = (milisec / (1000 * 60 * 60 * 24)).toFixed(1);
    let ret = { seconds, minutes, hours, days };
    console.log(ret);
}

add(from_, 3);
function add(date, no){
    const d =  new Date(date.setDate( date.getDate() - no ));
    console.log(d);
}

