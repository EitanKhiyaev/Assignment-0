function sumOfNumsWithinARange(nums, start, end) {
  var count=0;

for (i in nums){
  if(start<=nums[i] && nums[i]<=end){
    count++;
  }
}    
  
  return count;
 }

// Do not edit this line;
module.exports = sumOfNumsWithinARange;