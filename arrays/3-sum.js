var threeSum = function(nums) {
    nums.sort((a,b)=> a-b)
    let ans = new Array()

    for(let i = 0;i<nums.length;i++){
        if( i > 0 && nums[i] == nums[i - 1]) continue

        let j = i + 1
        let k = nums.length - 1

        while( j < k){
            let sum = nums[i] + nums[j] + nums[k]

            if(sum > 0){
                k--
            }
            else if(sum < 0){
                j++
            }
            else{
                ans.push([nums[i], nums[j] , nums[k]])
                j++
                k-- 

                // check for duplicates
                while(nums[j] == nums[j - 1]) j++
                while(nums[k + 1] == nums[k]) k--
            }
        }
    }
    return ans
};