/**
 * @param {number} x
 * @return {boolean}
 */

// https://leetcode.com/problems/palindrome-number/

x = 10
x = 121
x = -121
var isPalindrome = function(x) {
    if (x < 0){
        return false
    }
    else{
    var number2 = x.toString();
    return x == number2.split('').reverse().join('')
    }
}; 
result = isPalindrome(10);
console.log(result);