class MySolution {
  countDownSum(num) {
    // Insert code here;
    if(num>1 || num==0){
      return num+this.countDownSum(num-1);
    }
    return 1;
  }
}
let StudentSolution = MySolution;
module.exports = StudentSolution;