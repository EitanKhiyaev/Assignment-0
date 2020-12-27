function countOfAllBooleansAndStrings(arr) {
  var count=0;
  for(i in arr){
    if(typeof(arr[i])=="boolean" || typeof(arr[i])=="string" ){
        count++;
    }

  }
  return count;
}


// Do not edit this line;
module.exports = countOfAllBooleansAndStrings;