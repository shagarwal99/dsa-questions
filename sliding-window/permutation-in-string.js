/*

    The idea here is to use a fixed length sliding window approach and compare the
    frequencies of the characters

    Handle edge case: len(s1) > len(s2) → return False
    Build count1 from all of s1
    Build count2 from the first window of s2 (first len(s1) chars)
    Slide window from len(s1) to len(s2):

    Check count1 == count2 → return True
    Add s2[r] to window, remove s2[l] from window, advance l

    TC: O(26 * n) - n is the length of s2
    SC: O(1) - constant space for the arrays
*/

var doesFreqMatch = function(arr1,arr2){
    for(let i = 0;i<26;i++){
        if(arr1[i] != arr2[i]) return false
    }
    return true
}

var checkInclusion = function(s1, s2) {

    if(s1.length > s2.length) return false

    let arr1 = new Array(26).fill(0)
    let arr2 = new Array(26).fill(0)

    for(let i = 0;i<s1.length;i++){
        arr1[s1.charCodeAt(i) - 97] += 1
    }

    let l = 0, r = 0, flag = false
    while(r < s2.length){
        arr2[s2.charCodeAt(r) - 97] += 1

        if(r - l + 1 > s1.length ){
            arr2[s2.charCodeAt(l) - 97] -= 1
            l++
        }

        if(r - l + 1 == s1.length){
            if(doesFreqMatch(arr1,arr2)){
                return true
            }
        }

        r++
    }
    return false
};