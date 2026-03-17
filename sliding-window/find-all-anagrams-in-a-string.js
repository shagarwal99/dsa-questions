 var checkFrequencies = function(arr1,arr2){
    for(let i = 0;i<26;i++){
        if(arr1[i] != arr2[i]){
            return false
        }
    }
    return true
}

var findAnagrams = function(s, p) {
    let k = p.length
    let m1 = new Array(26).fill(0)
    let m2 = new Array(26).fill(0)
    let ans = new Array()

    for(let i = 0;i<p.length;i++){
        m1[p.charCodeAt(i) - 97] += 1
    }

    let l = 0
    
    for(let r = 0;r<s.length;r++){
        m2[s.charCodeAt(r) - 97] += 1

        if( (r-l+1) == k){
            if( checkFrequencies(m1,m2) ) {
                ans.push(l)
            }

            m2[s.charCodeAt(l) - 97] -= 1
            l++
        }
    }
    return ans
};