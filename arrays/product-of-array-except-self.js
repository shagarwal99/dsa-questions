var productExceptSelf = function(nums) {
    let arr = new Array()
    arr[0] = 1
    let mult = 1

    for(let i = 1;i<nums.length;i++){
        arr[i] = nums[i - 1] * mult
        mult = mult * nums[i-1]
    }

    // console.log(arr)

    mult = 1
    for(let i = nums.length-1;i>=0;i--){
        arr[i] = arr[i] * mult
        mult = mult * nums[i]
    }

    return arr
};