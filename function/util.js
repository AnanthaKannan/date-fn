module.exports = {
    getDate_, getMonth_, getMonthShort, getMonthLong
}

function getDate_(date){
    const getDate = date.getDate();
    if(getDate < 10) return `0${getDate}`;
    else return getDate; 
}

function getMonth_(date){
    const getMonth = date.getMonth();
    if(getMonth < 10) return `0${getMonth}`;
    else return getMonth; 
}

function getMonthShort(date){
    return date.toLocaleString('default', { month: 'short' });
}

function getMonthLong(date){
    return date.toLocaleString('default', { month: 'long' });
}