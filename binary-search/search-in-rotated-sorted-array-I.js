/*
    1. Standard binary search setup — left=0, right=len-1, loop while left <= right
    2. Check if mid is the answer — arr[mid] == target
    3. Identify which half is sorted

    arr[left] <= arr[mid] → left half is sorted
    otherwise → right half is sorted

    4. If left half is sorted

    target in [arr[left], arr[mid]] → go left (right = mid - 1)
    otherwise → go right (left = mid + 1)

    5. If right half is sorted

    target in [arr[mid], arr[right]] → go right (left = mid + 1)
    otherwise → go left (right = mid - 1)
*/
var search = function(arr, target) {
    let left = 0
    let right = arr.length - 1

    while(left <= right)
    {
        let mid = left + Math.floor((right - left)/2)

        if(arr[mid] == target){
            return mid
        }

        //first identify sorted half
        if(arr[left] <= arr[mid])
        {
            //left half is sorted
            if(target >= arr[left] && arr[mid] >= target){
                right = mid - 1
            }
            else{
                left = mid + 1
            }
        }
        else{
            if(arr[mid] <= target && target <= arr[right]){
                left = mid +1
            }
            else{
                right = mid - 1
            }
        }
    }

    return -1
};


/**
    When the array contains duplicates, we need to handle the case where arr[left] == arr[mid] == arr[right]
    In this case, we can't determine which half is sorted, so we shrink the search space by moving both pointers
 */
var searchWithDuplicates = function(arr, target) {
    let left = 0
    let right = arr.length - 1

    while(left <= right)
    {
        let mid = left + Math.floor((right - left)/2)

        if(arr[mid] == target){
            return true
        }

        if(arr[left] == arr[mid] && arr[mid] == arr[right]){
            left = left + 1
            right = right - 1
            continue
        }

        //first identify sorted half
        if(arr[left] <= arr[mid])
        {
            //left half is sorted
            if(target >= arr[left] && arr[mid] >= target){
                right = mid - 1
            }
            else{
                left = mid + 1
            }
        }
        else{
            if(arr[mid] <= target && target <= arr[right]){
                left = mid +1
            }
            else{
                right = mid - 1
            }
        }
    }

    return false

};