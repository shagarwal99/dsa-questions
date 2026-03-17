var maximumUniqueSubarray = function(nums) {
    let mp = new Map()
    let l = 0, r = 0, sum = 0, maxSum = 0

    while(r < nums.length)
    {  
        mp.set(nums[r], (mp.get(nums[r]) || 0 ) + 1)
        sum += nums[r]

        while(mp.get(nums[r]) > 1 ){
            mp.set(nums[l], (mp.get(nums[l]) - 1))
            sum -= nums[l]
            l++
        }

        maxSum = Math.max(maxSum,sum)
        r++
    }
    return maxSum
};