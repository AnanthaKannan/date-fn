const dateFn = require('../function/dateFn');

module.exports = {
    date
}

function date(date, code){
    date = new Date(date);
    switch (code) {
        case 1:
            return dateFn.code1(date); //08/28/91
            break;
        case 13:
            return dateFn.code13(date); //Wed Aug 28 1991
            break;
        case 101:
            return dateFn.code101(date); //08/28/1991
            break;
        case 102:
            return dateFn.code102(date); //1991.08.28
            break;
        case 103:
            return dateFn.code103(date); //28/08/1991
            break;
        case 104:   
            return dateFn.code104(date); //28.08.1991
            break;
        case 105:
            return dateFn.code105(date); //28-08-1991
            break;
        case 106:
            return dateFn.code106(date); //28 Aug 1991
            break;
        case 107:
            return dateFn.code107(date); //Aug 28, 1991
            break;
        case 110:
            return dateFn.code110(date); //08-28-1991
            break;
        case 111:
            return dateFn.code111(date); //1991/08/28
            break;
        case 112:
        return dateFn.code112(date); //19910828
        break;


        default:
            return "something went worng...!!";
            break;
    }
}

