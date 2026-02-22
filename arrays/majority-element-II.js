/*
    

*/
var majorityElement = function(nums) {
    let ele1 = 0
    let ele2 = 0
    let ct1 = 0
    let ct2 = 0
    let res = new Array()

    for(let i = 0;i<nums.length;i++){
        if(nums[i] == ele1){
            ct1++
        }
        else if(nums[i] == ele2){
            ct2++
        }
        else if(ct1 == 0){
            ele1 = nums[i]
            ct1 = 1
        }
        else if(ct2 == 0){
            ele2 = nums[i]
            ct2 = 1
        }
        else{
            ct1--
            ct2--
        }
    }

    //confirm that found elements count is more than n/3
    ct1 = 0
    ct2 = 0
    for(let i = 0;i<nums.length;i++){
        if(nums[i] == ele1){
            ct1++
        }
        else if(nums[i] == ele2){
            ct2++
        }
    }

    if(ct1 > Math.floor(nums.length/ 3)){
        res.push(ele1)
    }

    if(ct2 > Math.floor(nums.length/ 3)){
        res.push(ele2)
    }
    return res
};