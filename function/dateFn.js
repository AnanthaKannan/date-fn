const u = require('./util');
module.exports ={
    code1,code13, code101, code102
}

function code1(date){
    return date.short
}

function code13(date){
    return date.toDateString();
}

function code101(date){
    return `${ u.getMonth_(date) }/${ u.getDate_(date) }/${date.getFullYear()}`;
}

function code102(date){
    return `${date.getFullYear()}.${ u.getMonth_(date) }.${ u.getDate_(date) }`;
}

function code103(date){
    return `${ u.getDate_(date) }/${ u.getMonth_(date) }/${date.getFullYear()}`;
}

function code104(date){
    return `${ u.getDate_(date) }.${ u.getMonth_(date) }.${date.getFullYear()}`;
}

function code105(date){
    return `${ u.getDate_(date) }-${ u.getMonth_(date) }-${date.getFullYear()}`;
}

function code106(date){
    return `${u.getDate_(date)} ${u.getMonthShort(date)} ${date.getFullYear()}`;
}

function code107(date){
    return `${u.getMonthShort(date)} ${u.getDate_(date)}, ${date.getFullYear()}`;
}

function code110(date){
    return `${ u.getMonth_(date) }-${ u.getDate_(date) }-${date.getFullYear()}`;
}

function code111(date){
    return `${date.getFullYear()}/${ u.getMonth_(date) }/${ u.getDate_(date) }`;
}

function code112(date){
    return `${date.getFullYear()} ${ u.getMonth_(date) } ${ u.getDate_(date) }`;
}

function code104(date){
    
}

function code104(date){
    
}

function code104(date){
    
}

function code104(date){
    
}

function code104(date){
    
}

function code104(date){
    
}

function code104(date){
    
}

function code104(date){
    
}

