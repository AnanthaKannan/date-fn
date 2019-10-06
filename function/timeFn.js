module.exports ={
     code14, code24, code108, code114
}


function code14(date){
    return date.toLocaleString("en-US").slice(11);
}

function code24(date){
    return date.toLocaleString("en-US", { hour12: false }).slice(11);
}

function code108(date){
   return date.toLocaleString("en-US").slice(11, 15) + date.toLocaleString("en-US").slice(18);
}

function code114(date){
    return date.toLocaleString("en-US",  { hour12: false }).slice(11,16);
}