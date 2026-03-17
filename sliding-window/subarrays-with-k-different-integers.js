function subArraysWithAtMostKDistinct(nums,k){
    let mp = new Map()
    let l = 0, r = 0, ct = 0

    while(r < nums.length){
        mp.set(nums[r], (mp.get(nums[r]) || 0) + 1 )

        while(mp.size > k){
            mp.set(nums[l], (mp.get(nums[l]) || 0) - 1 )
            if(mp.get(nums[l]) == 0) mp.delete(nums[l])
            l++
        }

        ct += (r-l + 1)
        
        r++
    }
    return ct
}

var subarraysWithKDistinct = function(nums, k) {
    return subArraysWithAtMostKDistinct(nums,k) - subArraysWithAtMostKDistinct(nums,k-1)
};