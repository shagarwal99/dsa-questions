var findMin = function(arr) {
    let l = 0
    let r = arr.length - 1
    let res = Number.MAX_SAFE_INTEGER

    while (l <= r){
        let m = l + Math.floor((r-l)/2)

        if(arr[l] <= arr[m]){
            res = Math.min(res,arr[l])
            l = m + 1
        }
        else{
            res = Math.min(res,arr[m])
            r = m -1
        }
    }

    return res
};