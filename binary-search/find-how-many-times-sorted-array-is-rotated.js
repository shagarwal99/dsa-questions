class Solution {
    findKRotation(arr) {
        let l = 0
        let r = arr.length - 1
        let res = Number.MAX_SAFE_INTEGER
        let ind = -1

        if(arr[l] <= arr[r]){
            return 0
        }

        while (l <= r){
            let m = l + Math.floor((r-l)/2)

            if(arr[l] <= arr[m]){
                if(arr[l] < res){
                    res = arr[l]
                    ind = l
                }
                l = m + 1
            }
            else{
                if(arr[m] < res){
                    res = arr[m]
                    ind  = m
                }
                r = m -1
            }
        }

        return ind
    }
}