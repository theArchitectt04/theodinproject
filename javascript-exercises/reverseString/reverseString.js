const reverseString = function(stringInput) {
    let inputSplit = stringInput.split('');
    let outputString = ''
    for(let i = inputSplit.length; i>0; i--){
        outputString = outputString.concat(inputSplit.pop());
    }
    return outputString;
}

module.exports = reverseString