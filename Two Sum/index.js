
// const twoSum = function(nums, target) {
//   const numsArr = [...nums];
//   const numsArrLength = numsArr.length;
//   let result = null;
//   for(let i = 0; i < numsArrLength; ++i){
//     for(let j = i + 1; j < numsArrLength; ++j){
//       numsArr[i] + numsArr[j] === target ? result = [i, j] : null;
//     }
//   }
//   return result;
// };



const twoSum = function(nums, target) {
  const numsArr = [...nums];
  const numsArrLength = numsArr.length;
  const store = {};
  for(let i = 0; i < numsArrLength; ++i){
    const result = target - numsArr[i];
    if(result in store){
      return [store[result], i];
    } else {
      store[numsArr[i]] = i;
    }
  }
};



twoSum([2,7,11,15], 9) // [0, 1]
twoSum([3,2,4], 6)  // [1,2]
twoSum([3,3], 6) // [0,1]