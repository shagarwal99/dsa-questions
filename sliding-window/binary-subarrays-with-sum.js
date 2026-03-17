var subArraysWithAtMostSum = function(nums,goal){
    let ct = 0,l = 0,r = 0, sum = 0
    if(goal < 0) return 0
    while(r < nums.length)
    {
        sum += nums[r]
        while(sum > goal){
            sum -= nums[l]
            l++
        }

        ct += (r-l+1)

        r++
    }

    return ct
}
var numSubarraysWithSum = function(nums, goal) {
    return subArraysWithAtMostSum(nums,goal) - subArraysWithAtMostSum(nums,goal - 1)
};