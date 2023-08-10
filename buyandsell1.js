/**
 * @param {number[]} prices
 * @return {number}
 */
prices = [7,1,5,3,6,4]
prices = [7,6,4,3,1]

var maxProfit = function(prices) {
    var minimum = prices[0];
    var index_length = 0;
    for (var i =0; i< prices.length; i++){
      if (prices[i] < minimum){
          minimum = prices[i];
          index_length = i
      }
    }
    var maximum = minimum
    for (var j=index_length; j<prices.length; j++){
        if (prices[j] > maximum){
            maximum = prices[j];
        }
    }
    return maximum - minimum
}; 



/**
 * @param {number[]} prices
 * @return {number}
 */
function findIndex(prices) {
  var index_length = 0;
  var minimum = prices[0];
  for (var i = 0; i < prices.length; i++) {
    if (prices[i] < minimum) {
      minimum = prices[i];
      index_length = i;
    }
  }
  return index_length;
}

var maxProfit = function (prices) {
  var dupprices = prices;
  var minimum = prices[0];

  var index_length = findIndex(prices);
  while (index_length == prices.length - 1) {
    prices.pop();
    index_length = findIndex(prices);
  }
  if (prices.length == 0 ){
      return 0
  }
  else{
  var maximum = prices[index_length];
  for (var j = index_length; j < prices.length; j++) {
    if (prices[j] > maximum) {
      maximum = prices[j];
    }
  }
    return maximum - prices[index_length];
  }
};