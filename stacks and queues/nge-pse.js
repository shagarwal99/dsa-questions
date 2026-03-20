/*
Intuition (nge-pse):
- Next Greater Element (NGE): for each index, find the first element to the right that is strictly greater.
- Traverse from right to left; maintain a monotonic decreasing stack (values) so the top is the nearest greater candidate.
- Pop while `stackTop <= current` because those elements cannot be the next greater for `current` (or anything to its left).
- Previous Smaller Element (PSE): for each index, find the closest element to the left that is strictly smaller.
- Traverse left to right; maintain a monotonic increasing stack (values) by popping while `stackTop >= current`.
- If the stack is empty => no required element (`-1`).
*/
let nextGreaterElement = function(nums){
    let st = new Array()
    let arr = new Array()

    for(let i = nums.length-1;i>=0;i--)
    {
        while(st.length > 0 && st[st.length - 1] <= nums[i]) {
            st.pop()
        }

        if(st.length == 0){
            arr.push(-1)
        } else{
            arr.push(st[st.length  - 1])
        }

        st.push(nums[i])
    }

    return arr.reverse()
}

let previousSmallerElement = function(nums){
    let st = new Array()
    let arr = new Array()

    for(let i = 0;i<nums.length;i++){
        while(st.length > 0 && st[st.length - 1] >= nums[i]){
            st.pop()
        }

        if(st.length == 0){
            arr.push(-1)
        }
        else{
            arr.push(st[st.length - 1])
        }

        st.push(nums[i])
    }

    return arr
}


let nge = nextGreaterElement([1,2,3,4,5])
console.log(nge)

let pse = previousSmallerElement([1,2,3,4,5])
console.log(pse)