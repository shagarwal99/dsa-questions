class Solution {
    upperBound(arr, x) {
       let ind = arr.length
       let low = 0
       let high = arr.length - 1

       while(low <= high){
            let mid = low + Math.floor((high - low)/2)

            if(arr[mid] > x){
                ind = Math.min(ind,mid)
                high = mid - 1
            }
            else{
                low = mid + 1
            }
       }

       return ind
    }
}