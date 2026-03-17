var longestOnes = function(nums, k) {
    let flips = 0
    let l = 0
    let r = 0
    let ans = 0

    while(r < nums.length)
    {
        if(nums[r] == 0) flips ++

        if(flips > k){
            while(flips > k){
                if(nums[l] == 0) flips--
                l++
            }
        }

        ans = Math.max(ans,r-l+1)
        r++
    }
    return ans
};

/*
    variation II: this approach is better than the above one
    The idea here is that we aren't trying to maintain a valid window at all times.We're just trying to beat our best score.

    imagine up untill index 2 the window was valid. The ans will contain 2. Now, if at index 3 the window becomes invalid,
    this approach states that do not try to make this window valid. Instead, maintain the max length recorded for valid windows
    which is 2 itself. And if at later indexes the window becomes valid, we can set that to out ans.
    The window size either grows (new best found) or stays same (slides forward)
    Invalid windows silently slide forward without affecting the answer
*/
var longestOnesBest = function(nums, k) {
    let flips = 0
    let l = 0, r = 0, ans = 0

    while(r < nums.length){
        if(nums[r] == 0) flips++

        if(flips > k){
            if(nums[l] == 0) flips--
            l++
        }

        ans = Math.max(ans,r-l+1)
        r++
    }
    return ans
};