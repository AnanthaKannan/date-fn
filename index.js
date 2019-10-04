const dateFn = require('./function/dateFn')
const date_ = new Date();

let res = date(date_, 102);
console.log(res);
function date(date, code){
    switch (code) {
        case 1:
            return dateFn.code1(date);
            break;
        
        case 13:
            return dateFn.code13(date); //Fri Oct 04 2019
            break;
        
        case 1:
            return dateFn.code1(date);
            break;
    
        case 1:
            return dateFn.code1(date);
            break;

        case 101:
            return dateFn.code101(date); 
            break;
        case 102:
            return dateFn.code102(date); 
            break;
        default:
            return "something went worng...!!";
            break;
    }
}