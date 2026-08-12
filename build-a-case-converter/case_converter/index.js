

function getUpperCase(str){
    return str.toUpperCase();
}

function getLowerCase(str){
    return str.toLowerCase();
}

function getSentenceCase(str){
    return str.charAt(0).toUpperCase() + str.slice(1, str.length).toLowerCase();
}

function getProperCase(str){
    return str.split(" ").map(word=>word.charAt(0).toUpperCase() + word.slice(1).toLowerCase()
    ).join(" ");
}

getProperCase('HellO WorlD');

module.exports ={
    getLowerCase: getLowerCase,
    getUpperCase: getUpperCase,
    getSentenceCase: getSentenceCase,
    getProperCase:getProperCase


};