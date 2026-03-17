var findMaxAverage = function(nums, k) {
    let maxSum = 0
    let sum = 0

    for(let i = 0;i<k;i++){
        sum += nums[i]
    }

    maxSum = sum
    for(let i = k;i<nums.length;i++){
        sum += nums[i] - nums[i - k]
        maxSum = Math.max(maxSum,sum)
    }

    return maxSum/k
};