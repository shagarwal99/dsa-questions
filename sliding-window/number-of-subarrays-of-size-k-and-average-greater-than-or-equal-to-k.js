var numOfSubarrays = function(nums, k, threshold) {
    let sum = 0
    let count = 0

    for(let i = 0;i<k;i++){
        sum += nums[i]
    }

    if(Math.floor(sum / k) >= threshold) count++

    for(let i = k;i<nums.length;i++){
        sum += nums[i] - nums[i - k]
        if(Math.floor(sum / k) >= threshold) count++
    }

    return count
};