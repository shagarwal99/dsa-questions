/*
    Using Binary Search, first find index of mid, if it is odd, make it even by decrementing. Then check if element at mid and at (mid +1) 
    are same or not, this is done as the pair of two's will be after every 2 index and if there is a single element, it will break this patern.

    [IMPORTANT] If the values are equal, then the pattern is not broken on the left side, so go to right side by skipping both the pairs 
    mid and (mid+1) 
    
    If the values are not equal, then the pattern is broken on the left side, so go to the left side.
    At end, when the loop terminates, return the value pointed by the low pointer.
*/
var singleNonDuplicate = function(nums) {
    let l = 0
    let r = nums.length - 1

    while(l <= r){
        let m = l + Math.floor((r-l)/2)

        if(m % 2 !== 0){
            m -=1
        }

        if(nums[m] == nums[m + 1]){
            l = m+2
        }
        else{
            r = m-1
        }
    }

    return nums[l]
};