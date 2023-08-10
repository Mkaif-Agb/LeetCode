/**
 * @param {number[]} nums
 * @param {number} val
 * @return {number}
 */

// https://leetcode.com/problems/remove-element/
// Input: nums = [3,2,2,3], val = 3
// Output: 2, nums = [2,2,_,_]
// Explanation: Your function should return k = 2, with the first two elements of nums being 2.
// It does not matter what you leave beyond the returned k (hence they are underscores).


var removeElement = function(nums, val) {
    var index
    while (true){
        if (nums.indexOf(val) == -1){
            break
        }
        else{
            index = nums.indexOf(val);
            nums.splice(index, 1);
        }
    }    
    return nums.length;
}; 
