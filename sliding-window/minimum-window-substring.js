var minWindow = function(s, t) {
    let tfreq = new Map()
    let sFreq = new Map()
    let need = 0, have = 0,minLen = Number.MAX_SAFE_INTEGER, res = ""

    for(let i = 0;i<t.length;i++){
        tfreq.set(t[i], (tfreq.get(t[i]) || 0) + 1 )
    }

    need = tfreq.size
    let l = 0, r=0

    while(r < s.length){
        sFreq.set(s[r], (sFreq.get(s[r]) || 0) + 1 )

        if( tfreq.has(s[r]) && sFreq.get(s[r]) == tfreq.get(s[r]) ){
            have++
        }

        while(have == need){
            if(r -l +1 < minLen){
                minLen = r-l+1
                res = s.substring(l,r+1)
            }

            if(tfreq.has(s[l])){
                sFreq.set(s[l], ( sFreq.get(s[l]) - 1) )

                if(sFreq.get(s[l]) < tfreq.get(s[l])){
                    have--
                }
            }
            l++
        }
        r++
    }
    return res
};