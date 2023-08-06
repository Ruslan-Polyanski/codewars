const containsDuplicate = function(nums) {
  const newNums = [...nums];
  const newLength = newNums.length;
  const store = {};
  for(let i = 0; i < newLength; ++i){
    if(newNums[i] in store){
      return true;
    } else {
      store[newNums[i]] = 1;
    }
  }
  return false;
};



containsDuplicate([1,2,3,1]) // true
containsDuplicate([1,2,3,4]) //false
containsDuplicate([1,1,1,3,3,4,3,2,4,2]) //true
