var numberOfSubstrings = function(s) {
    let arr = new Array(3).fill(0)
    let l = 0, r = 0, ct = 0

    while(r < s.length){
        arr[s.charCodeAt(r) - 97] += 1

        while(arr[0] >=1 && arr[1] >= 1 && arr[2] >= 1){
            ct += (s.length - r)
            arr[s.charCodeAt(l) - 97] -= 1
            l++
        }
        r++
    }
    return ct
};