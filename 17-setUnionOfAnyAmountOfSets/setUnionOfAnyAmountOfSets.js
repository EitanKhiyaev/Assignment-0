function setUnionOfAnyAmountOfSets(...args) {
  let set1 = new Set();
  

  for (i of args) {
    for (j of i) {
      set1.add(j);
    }
  }

  return set1;
}




// Do not edit this line;
module.exports = setUnionOfAnyAmountOfSets;