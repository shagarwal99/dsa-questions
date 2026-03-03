var findSum = function(nums,divisor)
{
    let res = 0
    for(let i = 0;i<nums.length;i++){
        let rem = nums[i]/divisor
        res += Math.ceil(rem)
    }
    
    return res
}

var smallestDivisor = function(nums, threshold) {
    let l = 1
    let r = Math.max(...nums)
    let ans = 1
    while(l <= r)
    {
        let m = l + Math.floor((r-l)/2)
        let sum = findSum(nums,m)
        if(sum > threshold){
            l = m+1
        }
        else{
            ans = m
            r = m-1
        }
    }
    return ans
};