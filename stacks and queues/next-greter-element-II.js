/*
Intuition (next-greter-element-II):
- Next greater in a circular array => simulate two traversals of the array.
- Scan from right to left using a monotonic decreasing stack (top is the closest bigger candidate).
- For current value `x`, pop while stack top `<= x` (those can never be next greater for this or earlier elements).
- If index `i` is within the first `n` elements, the answer is `stack top` if stack non-empty else `-1`.
- Push `nums[i % n]` and continue; the `2*n-1 ... 0` range ensures wrap-around gets covered.
*/
var nextGreaterElements = function(nums) {
    let st = new Array()
    let ans = new Array()
    let len = nums.length
    for(let i = 2 * len - 1;i>=0;i--){
        while(st.length > 0 && st[st.length -1] <= nums[i]){
            st.pop()
        }

        if(st.length == 0 && i < len){
            ans.push(-1)
        }
        else{
            if(i < len){
                ans.push(st[st.length - 1])
            }
        }

        st.push(nums[i%len])
    }
    return ans.reverse()
};