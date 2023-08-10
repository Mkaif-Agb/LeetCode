/**
 * @param {number[]} nums
 * @return {number}
 * 
 */
var removeDuplicates = function(nums) {
  
  while (true){
  var count=0;
  var count_repeat=0;
  var index = count
  	while (true){
  		console.log("Inside while 2", nums)
  		if (nums[count] == nums[index+1]){
  			count_repeat += 1;
  		}
  		else {
  			break
  		}
  		index += 1

  	}
  	nums.splice(count, count_repeat)
  	count += 1
  	if (count == nums.length -1){
  		break
  	}
  }
  return nums
}; 




// var nums = [1,1,2]
var nums = [0,0,1,1,1,2,2,3,3,4]
var result = removeDuplicates(nums);
console.log(result)