function sortByLength (array) {
  
  const arrLengthString = array.map(item => [item, item.length]);
  const sortArrString = arrLengthString.sort((a, b) => a[1] - b[1]);
  const result = sortArrString.map(item => item[0])
  
  return result;
  
};