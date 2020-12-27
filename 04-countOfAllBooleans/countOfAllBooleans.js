function countOfAllBooleans(arr) {
  var count=0;
  for(i in arr){
    if(typeof(arr[i])=="boolean"){
        count++;
    }

  }
 return count;
}

// Do not edit this line;
module.exports = countOfAllBooleans;