function productOfAnyAmountOfNumbers(...args) {
var j=1;
for(i in args){
  j*=args[i]
}

return j;
}

// Do not edit this line;
module.exports = productOfAnyAmountOfNumbers;