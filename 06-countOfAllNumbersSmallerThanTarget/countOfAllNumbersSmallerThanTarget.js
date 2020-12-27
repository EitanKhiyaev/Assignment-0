function countOfAllNumbersSmallerThanTarget(nums, target) {
  var count=0;  
  for(i in nums){
      if(nums[i]<target){
        count++;
      }
    }
    return count;
}

// Do not edit this line;
module.exports = countOfAllNumbersSmallerThanTarget;