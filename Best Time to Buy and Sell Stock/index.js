
// const maxProfit = function(prices) {
//   const pricesLength = prices.length;
//   let result = 0;
//   for(let i = 0; i < pricesLength; ++i){
//       for(let j = i + 1; j < pricesLength; ++j){
//           const number = prices[j] - prices[i];
//            number > 0 && number > result && (result = number)
//       }
//   }
//   console.log(result)
//   return result;
// };

const maxProfit = function(prices) {
  let minNum = prices[0];
  let maxPrice = 0;
  const len = prices.length;
  for(let i = 1; i < len; ++i){
    const resultPrice = prices[i] - minNum;
    if(resultPrice < 0){
      minNum = prices[i];
      continue;
    } 
    maxPrice = Math.max(maxPrice, resultPrice);
  }
  console.log(maxPrice)
  return maxPrice;
};

maxProfit([7,1,5,3,6,4])
maxProfit([7,6,4,3,1])
//5
//0










