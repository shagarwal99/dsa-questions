
var searchMatrix = function(arr, target) {
    //find the row where the target can lie

    let l = 0, r = arr.length - 1
    let col = arr[0].length
    let row = arr.length

    let targetRow = -1

    while(l <= r)
    {
        let m = l + Math.floor((r-l)/2)

        if(arr[m][0] <= target && arr[m][col-1] >= target){
            targetRow = m
            break
        }
        else if(target > arr[m][col-1])
        {
            l = m+1
        }
        else{
            r = m-1
        }
    }

    if(targetRow != -1)
    {
        let colStart = 0
        let colEnd = col-1

        while(colStart <= colEnd){
            let m = colStart + Math.floor((colEnd - colStart)/2)

            if(arr[targetRow][m] == target){
                return true
            }
            else if(arr[targetRow][m] > target){
                colEnd = m-1
            }
            else{
                colStart = m+1
            }
        }
    }

    return false
};