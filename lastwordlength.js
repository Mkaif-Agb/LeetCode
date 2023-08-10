/**
 * @param {string} s
 * @return {number}
 */
// https://leetcode.com/problems/length-of-last-word/submissions/


var lengthOfLastWord = function(s) {
    var words = s.trim().split(" ");
    console.log(words);
    console.log(words[words.length - 1])
    return words[words.length - 1].length;
};

var s = "Hello World"

var result = lengthOfLastWord(s); 
console.log(result)