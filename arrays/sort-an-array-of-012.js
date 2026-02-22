/*
    Dutch National Flag Algorithm (3-pointer approach)
    TC: O(n) - single pass through the array
    SC: O(1) - constant extra space

    Approach: Maintain two pointers - one for tracking the position of 0s (zeroind) and another for tracking the position of 2s (twoInd).
    Traverse the array with a third pointer (i) and swap elements to move 0s to the left and 2s to the right.
    Now all 1s will be in the middle automatically.

    Imp: 
        Only when the current element is 0, we will increase i. This is because of an edge case where 0 is present at twoInd and element at i is 2.
        Now, if we would have swapped and increased i, we would have missed 0 in the middle
    Array is sorted in place

    Pattern:
        -Array with only 3 distinct values
        -In-place sorting without extra space
        Partition into three groups
*/
function sortZeroOneTwo(nums) {
    let zeroind = 0
    let twoInd = nums.length - 1
    let i = 0

    while(i < nums.length){
        if(nums[i] == 0){
            let tmp = nums[i]
            nums[i] = nums[zeroind]
            nums[zeroind] = tmp

            i++
            zeroind++
        }
        else if(nums[i] == 1){
            i++
        }
        else if(nums[i] == 2){
            if(twoInd >= i){
                let tmp = nums[i]
                nums[i] = nums[twoInd]
                nums[twoInd] = tmp

                twoInd--
            }else{
                i++
            }
        }
    }

    return nums
}