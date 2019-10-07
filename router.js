const dateFn = require('./function/dateFn');
const timeFn = require('./function/timeFn');
const dateTimeFn = require('./function/dateTimeFn');

module.exports = {
    date
}

function date(date, code, spl = '/'){
    date = new Date(date);
    switch (code) {
    // Time
         case 5:
            return timeFn.code5(date); //  1:10:10 PM
            break;
        case 6:
            return timeFn.code6(date); //  13:10:10
            break;
        case 7:
            return timeFn.code7(date); // 1:10 PM
            break;
        case 8:
            return timeFn.code8(date); // 13:10
            break;
    // Date
        case 101:
            return dateFn.code101(date, spl); // 08/28/91 
            break;
        case 102:
            return dateFn.code102(date, spl); // 08/28/1991
            break;
        case 103:
            return dateFn.code103(date, spl); // 08/1991/28 
            break;
        case 104:   
            return dateFn.code104(date, spl); // 28/08/1991 
            break;
        case 105:
            return dateFn.code105(date, spl); // 28/1991/08 
            break;
        case 106:
            return dateFn.code106(date, spl); // 1991/08/28  
            break;
        case 107:
            return dateFn.code107(date, spl); // 1991/28/08 
            break;
        case 108:
            return dateFn.code108(date); // Wed Aug 28 1991
            break;
        case 109:
            return dateFn.code109(date); // 28 Aug 1991
            break;
        case 110:
            return dateFn.code110(date); // Aug 28, 1991
            break;
        case 111:
            return dateFn.code111(date); // 19910828     
            break;
       

    // Date - Time
        case 143:
            return dateTimeFn.code143(date);
            break;
        case 144:
            return dateTimeFn.code144(date);
            break;
        case 145:
            return dateTimeFn.code145(date);
            break;
        case 146:
            return dateTimeFn.code146(date);
            break;
        case 147:
            return dateTimeFn.code147(date);
            break;
        case 148:
            return dateTimeFn.code148(date);
            break;
        case 149:
            return dateTimeFn.code149(date);
            break;
        case 150:
            return dateTimeFn.code150(date);
            break;
        case 151:
            return dateTimeFn.code151(date);
            break;
        case 152:
            return dateTimeFn.code152(date);
            break;
        case 153:
            return dateTimeFn.code153(date); //  1991-08-28 13:10:10
            break;
        case 154:
            return dateTimeFn.code154(date); //  1991/08/28 13:10:10
            break;
        case 155:
            return dateTimeFn.code155(date); //  1991.08.28 13:10:10
            break;
        case 156:
            return dateTimeFn.code156(date); //  1991-08-28 1:10:10 PM
            break;
        case 157:
            return dateTimeFn.code157(date); //  1991/08/28 1:10:10 PM
            break;
        case 158:
            return dateTimeFn.code158(date); //  1991.08.28 1:10:10 PM
            break;
        case 159:
            return dateTimeFn.code159(date); //  1991-08-28 1:10 PM   
            break;
        case 160:
            return dateTimeFn.code160(date); //  1991/08/28 1:10 PM   
            break;
        case 161:
            return dateTimeFn.code161(date); //  1991.08.28 1:10 PM   
            break;
        case 162:
            return dateTimeFn.code162(date); //  1991-08-28 13:10 
            break;
        case 163:
            return dateTimeFn.code163(date); //   1991/08/28 13:10 
            break;
        case 164:
            return dateTimeFn.code164(date); //   1991.08.28 13:10 
            break;
        case 165:
            return dateTimeFn.code165(date); //   1991.08.28 13:10 
            break;
        case 166:
            return dateTimeFn.code166(date); //   1991.08.28 13:10 
            break;
        case 167:
            return dateTimeFn.code167(date); //   1991.08.28 13:10 
            break;
        case 168:
            return dateTimeFn.code168(date); //   1991.08.28 13:10 
            break;
        case 169:
            return dateTimeFn.code169(date); //   1991.08.28 13:10 
            break;
        case 170:
            return dateTimeFn.code170(date); //   1991.08.28 13:10 
            break;
        case 171:
            return dateTimeFn.code171(date); //   1991.08.28 13:10 
            break;
        case 172:
            return dateTimeFn.code172(date); //   1991.08.28 13:10 
            break;
        case 173:
            return dateTimeFn.code173(date); //   1991.08.28 13:10 
            break;
        case 174:
            return dateTimeFn.code174(date); //   1991.08.28 13:10 
            break;
        case 175:
            return dateTimeFn.code175(date); //   1991.08.28 13:10 
            break;
        case 176:
            return dateTimeFn.code176(date); //   1991.08.28 13:10 
            break;
        case 177:
            return dateTimeFn.code177(date); //   1991.08.28 13:10 
            break;
        case 178:
            return dateTimeFn.code178(date); //   1991.08.28 13:10 
            break;
        case 179:
            return dateTimeFn.code179(date); //   1991.08.28 13:10 
            break;

        default:
            return "Please provide valid code!!";
            break;
        
    }
}

