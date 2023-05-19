module.exports.getDate = getDate ;

function getDate(){

    const options = { weekday: 'long', month: 'long', day: 'numeric' };
    const today = new Date();
    return today.toLocaleDateString("en-US", options);
}

module.exports.getDay = getDay ;

function getDay(){

    const options = { weekday: 'long'};
    const today = new Date();
    return today.toLocaleDateString("en-US", options);
}