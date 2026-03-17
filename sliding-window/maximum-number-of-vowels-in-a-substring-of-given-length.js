var maxVowels = function(s, k) {
    let count = 0
    let maxCount = 0
    let l = 0, r = 0
    let vowels = new Set(['a','e','i','o','u'])

    while(r < k){
        if(vowels.has(s[r])){
            count++
        }
        r++
    }

    maxCount = count

    while(r < s.length){
        if(vowels.has(s[r])){
            count++
        }
        if(r -l+1 > k){
            if(vowels.has(s[l])){
                count--
            }
            l++
        }
        maxCount = Math.max(maxCount,count)

        r++
    }
    return maxCount
};