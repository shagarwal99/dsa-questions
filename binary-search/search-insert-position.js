function lowerBound(nums, x) {
    let ind = nums.length
    let low = 0
    let high = nums.length - 1

    while(low <= high){
        let mid = low + Math.floor((high - low)/2)
        if(nums[mid] >= x){
            ind = Math.min(ind,mid)

            high = mid - 1
        }
        else{
            low = mid + 1
        }
    }

    return ind
}
var searchInsert = function(nums, target) {
    let res = lowerBound(nums,target)
    return res
};