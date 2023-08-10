/**
 * @param {number[]} nums
 * @param {number} target
 * @return {number[]}
 */
// nums = [2,7,11,15],
// target = 9

// nums = [3,2,4], 
// target = 6

// Input: nums = [3,3], target = 6
// Output: [0,1]

https://leetcode.com/problems/two-sum/

var twoSum = function(nums, target) {
    var number
    for (var i=0; i<nums.length; i++){
        for (var j=i+1; j<nums.length; j++){
            if (target == nums[i] + nums[j]){
            number = [i, j];
            };
        }
    }
    return number
};

result = twoSum() 
