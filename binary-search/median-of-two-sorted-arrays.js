/*
    brute approach:
        We can merge the two sorted arrays and then find the median of the temp array.
        - If resultant array length is odd, then median is the middle element. arr[len/2]
        - If resultant array length is even, then median is the average of middle two elements 
        i.e arr[len/2] and arr[len/2 - 1]
        TC: O(n+m)
        SC: O(n+m)
*/

/*
    Better approach:
        We will use the base of the previous approach only, but instead of merging the arrays into a temp array,
        we can maintain two pointers for nums1 and nums2, and a seprate pointer k for the imaginary merged array.

        The idea is we can precalculate the indices of the median elements in the merged array.
        Now, we can iterate through the arrays and keep track of the elements at the indices idx1 and idx2.
        Once we have found the elements at the indices idx1 and idx2, we can return the median.
    TC: O(n+m)
    SC: O(1)
*/
var medianBetter = function(nums1,nums2) {
    let n = nums1.length
    let m = nums2.length
    let k = 0 
    let size = (n+m)
    let idx1 = Math.floor(size/2) - 1
    let idx2 = Math.floor(size/2)
    let val1 = 0, val2 = 0
    let i = 0, j = 0
    while(i < n && j < m) {
        if(nums1[i] < nums2[j]){
            if(k == idx1){
                val1 = nums1[i]
            }
            if(k == idx2){
                val2 = nums1[i]
            }
            i++
            k++
        }
        else{
            if(k == idx1){
                val1 = nums2[j]
            }
            if(k == idx2){
                val2 = nums2[j]
            }
            j++
            k++
        }
    }

    if(size %2 == 0){
        return (val1 + val2) / 2
    }
    else{
        return val2
    }

}

var medianOptimal = function(nums1,nums2) {
    
}