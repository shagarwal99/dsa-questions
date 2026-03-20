/*
    Intuition (LeetCode 402 - Remove K Digits):
    - Greedy + monotonic stack: keep digits in increasing order to get the smallest possible prefix.
    - For each digit `d`, while stack top `>` `d` and `k > 0`, pop the larger digit (we delete it) and decrement `k`.
    - Push digit to the result only if it helps avoid leading zeros:
    - if stack is empty, don't push `0` yet
    - otherwise push
    - After the scan, if `k` still > 0, pop from the end (delete the largest remaining suffix digits).
    - If all digits are removed, return "0".
*/

var removeKdigits = function(num, k) {
    let st = new Array()

    if(k == num.length) return "0"

    for(let i = 0;i<num.length;i++){
        while(st.length > 0 && st[st.length - 1] > num[i] && k > 0){
            st.pop()
            k--
        }

        if( (st.length == 0 && num[i] != 0) || (st.length > 0) ){
            st.push(num[i])
        }
    }

    while(k > 0){
        st.pop()
        k--
    }

    return st.length == 0 ? "0" : st.join("")
};