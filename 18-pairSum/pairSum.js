function pairSum(nums, target) {
  if(nums.length<=1){
    throw "error";
    
  }
  for (i in nums){
    for(j in nums){
      if(nums[j]+nums[i]==target){
        return true;
      }
    }
  }
return false;
}

// Do not edit this line;
module.exports = pairSum;