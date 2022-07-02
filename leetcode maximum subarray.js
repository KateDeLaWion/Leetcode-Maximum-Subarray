var maxSubArray = function(nums) {

    let currentSum=nums[0]; // start from the first item
    let maxSum=nums[0];     // assume maximum sum start from first item
    for(let i = 1; i <nums.length; i++){
       currentSum = Math.max(currentSum+nums[i] , nums[i])
       maxSum = Math.max(currentSum, maxSum) 
       //maxSum is the historical record, not necessarily the current subarray is reflecting
    }
    return maxSum

}