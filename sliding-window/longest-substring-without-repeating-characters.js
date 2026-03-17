var lengthOfLongestSubstring = function(s) {
    let freq = new Map()
    let l = 0, r = 0
    let ans = 0

    while(r < s.length){
        freq.set(s[r], (freq.get(s[r]) || 0  ) +1 )

        while(freq.get(s[r]) > 1)
        {
            freq.set(s[l], freq.get(s[l])  - 1 )
            l++
        }
        ans = Math.max(ans,r - l +1)
        r++
    }
    return ans
};

/*
    The above approach is slightly sub-optimal in the manner the window is being shrinked
    assume the string : bcdefghiaa
    here when freq of a becomes two, the window shrinks one char at a time. So this here is a worst case where we had 
    to loop another n time just to make the window correct. This is not n*n, but n+n

    A better approach will be to store the last seen index of every character. Now, we can do is when the duplicate char 
    occurs, we can just shift l to the last seen index + 1 and the window will be valid

    Just a caution here:
    Take an example: abba
    When a's frequency will be 2, l will be at 2 index. Now, we cant simply set l to the next index as it will be wrong.
    So a check can be to take the max of last seen index and l
*/
var lengthOfLongestSubstring = function(s) {
    let lastSeen = new Map() 
    let l = 0
    let ans = 0

    for (let r = 0; r < s.length; r++) {
        let c = s[r]

        if (lastSeen.has(c)) {
            l = Math.max(lastSeen.get(c) + 1,l);
        }

        lastSeen.set(c, r) 
        ans = Math.max(ans, r - l + 1)
    }

    return ans
};