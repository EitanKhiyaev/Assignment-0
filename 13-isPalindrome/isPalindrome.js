function isPalindrome(word) {
  var len = word.length;
  var mid = Math.floor(len/2);

  for ( var i = 0; i < mid; i++ ) {
      if (word[i] !== word[len - 1 - i]) {
          return false;
      }
  }

  return true;
}


// Do not edit this line;
module.exports = isPalindrome;