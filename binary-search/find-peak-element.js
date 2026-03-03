/**
 * @param {number[]} nums
 * @return {number}
 */
var findPeakElement = function(arr) {
    let l = 0
    let r = arr.length - 1

    if(arr.length == 1) return 0

    while(l <= r){

        let m = l + Math.floor((r-l)/2)

        if(m == arr.length - 1){
            if(arr[m] > arr[m-1]) return m
            else r = m-1
            continue
        }
        if(m == 0){
            if(arr[0] > arr[1]) return 0
            else l = m+1
            continue
        }

        if(arr[m] > arr[m + 1] && arr[m] > arr[m-1]) return m

        if(arr[m] < arr[m+1]){
            l = m+1
        }
        else{
            r = m-1
        }
    }
};