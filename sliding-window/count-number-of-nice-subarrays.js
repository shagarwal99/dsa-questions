var subArrayswithAtMostKOddNumbers = function(nums,k){
    let ct = 0, l = 0, r = 0, finalCt = 0

    while(r < nums.length){
        if(nums[r] % 2 !== 0) ct++

        while(ct > k){
            if(nums[l] % 2 !== 0) ct--
            l++
        }

        finalCt += (r-l+1)
        r++
    }
    return finalCt
}
var numberOfSubarrays = function(nums, k) {
    return subArrayswithAtMostKOddNumbers(nums,k) - subArrayswithAtMostKOddNumbers(nums,k-1)
};