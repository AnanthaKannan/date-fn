module.exports = {
    getDate_, getMonth_, getMonthShort, getMonthLong
}

function getDate_(date){
    const getDate = date.getDate();
    if(getDate < 10) return `0${getDate}`;
    else return getDate; 
}

function getMonth_(date){
    const getMonth = date.getMonth() + 1;
    if(getMonth < 10) return `0${getMonth}`;
    else return getMonth; 
}

function getMonthShort(date){
    return  shotMonth()[date.getMonth()];
}

function getMonthLong(date){
    return  longMont()[date.getMonth()];
}

function shotMonth(){
    return ["Jan", "Feb", "Mar", "Apr", "May", "Jun",
  	        "Jul", "Aug", "Sep", "Oct", "Nov", "Dec"];
}

function longMont(){
    return ["January", "February", "March", "April", "May", "June",
    "July", "August", "September", "October", "November", "December"];
}



