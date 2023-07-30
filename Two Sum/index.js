
const twoSum = function(nums, target) {
  const numsArr = [...nums];
  const numsArrLength = numsArr.length;
  let result = null;
  for(let i = 0; i < numsArrLength; ++i){
    for(let j = i + 1; j < numsArrLength; ++j){
      numsArr[i] + numsArr[j] === target ? result = [i, j] : null;
    }
  }
  return result;
};