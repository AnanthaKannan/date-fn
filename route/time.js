const timeFn = require('../function/timeFn');
module.exports = {
    time
}

function time(date, code){
    date = new Date(date);
    switch (code) {

        case 14:
            return timeFn.code14(date); //  1:10:10 PM
            break;
        case 24:
            return timeFn.code24(date); //  13:10:10
            break;
        case 108:
            return timeFn.code108(date); // 1:10 PM
            break;
        case 114:
            return timeFn.code114(date); // 13:10
            break;
        default:
            return 'Your code is not valid';
            break;
    }
}