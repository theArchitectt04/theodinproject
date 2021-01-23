const sumAll = function() {
    let args  = Array.from(arguments);
  
    
    
    for(let ii = 0; ii< args.length; ii++) {
        if(typeof(args[ii]) !== "number" || parseInt(args[ii]) < 0){
            return 'ERROR'
        }
    };

    if(args[0] > args [1]) {
        let temp = args[0];
        args[0] = args[1];
        args[1] = temp;
    }

    let sum = 0;
    for(i = args[0]; i<=args[1]; i++){
        sum = sum + i;
    }

    return sum

    
}

console.log(sumAll(4,10))

module.exports = sumAll
