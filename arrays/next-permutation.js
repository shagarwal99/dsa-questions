/*
    There are basically three steps to find it

    1. Loop the array from the back and identify the breaking point which will be arr[i] < arr[i+1]
    2. Consider it as idx. From this index, check the next greater element present in the array
       but it should be smallest amongst all those found elements. Once that element is found swap them
    3. Reverse the array after the found index
*/

class Solution {
    reverseArr(nums,start,end){
        let l = start
        let r  = end

        while(l <= r){
            let temp = nums[l]
            nums[l] = nums[r]
            nums[r] = temp

            l++
            r--
        }
    }
    nextPermutation(nums) {
        let idx = -1;

        //indentify the breaking point
        for(let i = nums.length-2; i>= 0;i--){
            if(nums[i] < nums[i + 1]){
                idx  = i
                break
            }
        }
        // this case is for when it is the original array
        if(idx == -1){
            this.reverseArr(nums,0,nums.length-1)
            return 
        }

        // now in order to find the smallest number which is greater than the element at index,
        //start from the end and once found, swap them
        for(let i = nums.length - 1; i > idx;i--){
            if(nums[i] > nums[idx]) {
                let temp = nums[i]
                nums[i] = nums[idx]
                nums[idx] = temp

                break
            }
        }
        // reverse the array after the found index
        this.reverseArr(nums,idx+1,nums.length-1)
    }
}