/**
 * @param {number[]} nums
 * @param {number} target
 * @return {number[]}
 */
var twoSum = function(nums, target) {
    for (let i = nums.length-1; i >=0; i--) {
        	for (let i2 = 0; i2 <=nums.length-1; i2++){ 
        	if (nums[i]+nums[i2]==target && i!=i2) 
        	{return [i,i2].reverse()} 
        	}
      nums.pop();
    }
};