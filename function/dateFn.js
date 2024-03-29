const u = require('./util');
module.exports ={
    code101, code102, code103, code104, code105,
    code106, code107, code108, code109, code110, code111
}



function code101(date, spl){
    return `${ u.getMonth_(date) }/${ u.getDate_(date) }/${date.getFullYear().toString().substr(2, 3)}`.replace(/\//g, spl);
}

function code102(date, spl){
    return `${ u.getMonth_(date) }/${ u.getDate_(date) }/${date.getFullYear()}`.replace(/\//g, spl);
}

function code103(date, spl){
    return `${ u.getMonth_(date) }/${date.getFullYear()}/${ u.getDate_(date) }`.replace(/\//g, spl);
}

function code104(date, spl){
    return `${u.getDate_(date)}/${u.getMonth_(date)}/${date.getFullYear()}`.replace(/\//g, spl);
}

function code105(date, spl){
    return `${u.getDate_(date)}/${date.getFullYear()}/${u.getMonth_(date)}`.replace(/\//g, spl);
}

function code106(date, spl){
    return `${date.getFullYear()}/${u.getMonth_(date)}/${u.getDate_(date)}`.replace(/\//g, spl);
}

function code107(date, spl){
    return `${date.getFullYear()}/${u.getDate_(date)}/${u.getMonth_(date)}`.replace(/\//g, spl);
}

function code108(date, spl){
    return date.toDateString();
}

function code109(date, spl){
    return `${u.getDate_(date)} ${u.getMonthShort(date)} ${date.getFullYear()}`;

}

function code110(date, spl){
    return `${u.getMonthShort(date)} ${u.getDate_(date)}, ${date.getFullYear()}`;
}

function code111(date, spl){
    return `${date.getFullYear()}${ u.getMonth_(date) }${ u.getDate_(date) }`;
}
