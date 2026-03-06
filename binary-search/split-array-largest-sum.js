var getSubArraycount = function(nums,minsum){
    let currSum = 0
    let ct  = 1

    for(let i = 0;i<nums.length;i++){
        currSum += nums[i]

        if(currSum > minsum){
            ct++
            currSum = nums[i]
        }
    }
    return ct
} 
var splitArray = function(nums, k) {
    let l = Math.max(...nums)
    let r = nums.reduce((acc,curr) => acc + curr,0)
    let ans = 0
    while(l <= r){
        let m = l + Math.floor((r-l)/2)
        let count =getSubArraycount(nums,m)
        if( count <= k){
            r = m-1
        }
        else{
            l = m+1
        }

    }
    return l
};