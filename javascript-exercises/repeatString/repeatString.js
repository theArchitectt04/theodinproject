const repeatString = function(inputString, count) {
    if (count < 0) { return 'ERROR';}
    let newString = '' ;
    for(let i = 0; i<count; i++ ){
        newString = newString.concat(inputString);
    }
    return newString;
}

module.exports = repeatString
