function countOfAllIndexMatchingNumbers(nums) {
  var count=0;
  for(i in nums){
    if(i==nums[i])
    count++
  }
  return count;
}

// Do not edit this line;
module.exports = countOfAllIndexMatchingNumbers;