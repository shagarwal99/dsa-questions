/*
    Merge Sorted Array (LeetCode 88)

    Problem: Merge nums2 into nums1 in-place. nums1 has size m+n where the last n elements are 0s (placeholders).

    Key Insight: Merge from the END to avoid overwriting elements in nums1 that haven't been placed yet.

    Approach (Three Pointers from the back):
      - i = m-1       → last valid element in nums1
      - j = n-1       → last element in nums2
      - k = m+n-1     → last position in nums1 (write pointer)
      - Compare nums1[i] and nums2[j], place the larger at nums1[k], decrement that pointer and k
      - After the main loop, if nums2 still has remaining elements (j >= 0), copy them over
        (no need to handle remaining nums1 elements — they're already in place)

    Time: O(m+n) | Space: O(1)
*/


var merge = function(nums1, m, nums2, n) {
    let i = m-1,j = n-1, k = m+n-1

    while(i >= 0 && j >= 0)
    {
        if(nums1[i] > nums2[j]){
            nums1[k] = nums1[i]
            i--
        }
        else{
            nums1[k] = nums2[j]
            j--
        }
        k--
    }

    while(j >= 0)
    {
        nums1[k] = nums2[j]
        k--
        j--
    }
};