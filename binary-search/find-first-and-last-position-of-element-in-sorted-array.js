/*
    if the problem asks what is the count of the target in sorted array
    then we can use firstOccurence and lastOccurence functions
    and return lastOccurence - firstOccurence + 1
*/

var findFirstOccurence = function(nums,target) { 
    let ind = -1
    let low = 0;
    let high = nums.length - 1

    while(low <= high){
        let mid = low + Math.floor((high - low)/2)

        if(nums[mid] == target){
            ind = mid
            high = mid -1
        }
        else if(nums[mid] > target){
            high = mid - 1
        }
        else{
            low = mid + 1
        }
    }
    return ind
}

var findLastOccurence = function(nums,target){
    let ind = -1;
    let low = 0
    let high = nums.length - 1

    while(low <= high){
        let mid = low + Math.floor((high - low)/2)
        if(nums[mid] == target){
            ind = mid
            low = mid + 1
        }
        else if(nums[mid] > target){
            high = mid - 1
        }
        else{
            low = mid + 1
        }
    }

    return ind
}

var searchRange = function(nums, target) {
    let left = findFirstOccurence(nums,target)
    
    if(left == -1){
        return [-1,-1]
    }

    let right = findLastOccurence(nums,target)

    return [left, right]
};