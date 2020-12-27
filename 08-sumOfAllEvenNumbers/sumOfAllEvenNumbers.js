function sumOfAllEvenNumbers(nums) {
  var count=0;
  for(i in nums){
    if(nums[i]%2==0){
      count++;
    }
  }
  return count;
}

// Do not edit this line;
module.exports = sumOfAllEvenNumbers;