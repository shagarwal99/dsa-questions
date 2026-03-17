var characterReplacement = function(s, k) {
    let l = 0, r = 0, ans = 0, flips = 0
    let taken = new Map()
    let maxFreq = 0
    while(r < s.length){
        let currFreq = taken.get(s[r]) || 0
        taken.set(s[r], currFreq + 1)

        maxFreq = Math.max(maxFreq,currFreq + 1)

        if( (r- l +1) - maxFreq > k ){
            taken.set(s[l], taken.get(s[l]) - 1 )
            l++
        }

        ans = Math.max(ans,r-l+1)
        r++        
    }
    return ans
};