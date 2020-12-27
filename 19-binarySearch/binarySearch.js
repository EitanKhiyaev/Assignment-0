class MySolution {
  constructor() {
    this.flag = false; // this is optional to use;
  }

  binarySearch(nums, target) {
     
     let medium = Math.floor(nums.length / 2);
       if (nums[medium]<target) {
        return this.binarySearch(nums.slice(medium+1,nums.length),target);
      } 
      else if (nums[medium]>target) {
        
         return this.binarySearch(nums.slice(0, medium), target);
      }
      else if (target == nums[medium]) 
        return true;
      
      else
       return false;
}

}
// Do not edit this line;
let StudentSolution = MySolution;
module.exports = StudentSolution;