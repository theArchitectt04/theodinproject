


const removeFromArray = function() {
    let array = arguments[0];
    let args = Array.from(arguments);
    args.splice(0,1);
    //console.log(args);
     
    
        

    args.forEach(element => {
        //console.log(element);
        if(array.includes(element)) {
            array.splice(array.indexOf(element),1);
        }
           
    });

    return array;
}

module.exports = removeFromArray

console.log(removeFromArray([1,2,3,4],3,4,5));
