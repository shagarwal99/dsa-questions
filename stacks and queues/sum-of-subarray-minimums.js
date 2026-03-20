/*
Intuition (sum-of-subarray-minimums):
- Key idea: contribution technique using Next Smaller + Previous Smaller-or-Equal boundaries.
- For each `arr[i]`, count how many subarrays use `arr[i]` as the minimum:
  - `left = i - prevSmallerOrEqualIndex`
  - `right = nextSmallerIndex - i`
  - `count = left * right`
- Multiply contribution: `arr[i] * count` (mod `1e9+7`).
- Tie-breaking matters to avoid double counting duplicates:
  - next-smaller uses `>=` (find strictly smaller to the right)
  - prev-smaller-or-equal uses `>` (allow equal on the left boundary)
*/
var nextSmallerElement = function(arr)
{
    let st = new Array()
    let res = new Array(arr.length)

    for(let i = arr.length - 1; i>=0; i--)
    {
        while(st.length > 0 && arr[st[st.length - 1]] >= arr[i]  )
        {
            st.pop()
        }

        if(st.length == 0)
        {
            res[i] = arr.length
        }
        else{
            res[i] = st[st.length - 1]
        }

        st.push(i) 
    }

    return res
}

var previousSmallerorEqualElement = function(arr)
{
    let st = new Array()
    let res = new Array(arr.length)

    for(let i = 0; i < arr.length; i++)
    {
        while(st.length > 0 && arr[st[st.length - 1]] > arr[i]  )
        {
            st.pop()
        }

        if(st.length == 0){
            res[i] = -1
        }
        else{
            res[i] = st[st.length - 1]
        }

        st.push(i)
    }

    return res
}

var sumSubarrayMins = function(arr) {
    let nextSmallerEle =  nextSmallerElement(arr)
    let preSmallerEle = previousSmallerorEqualElement(arr)
    let mod = 100000007
    let sum = 0

    for(let i = 0;i<arr.length;i++){
        let leftBoundary = i - preSmallerEle[i]
        let rightBoundary = nextSmallerEle[i] - i

        let freq = (leftBoundary * rightBoundary) % mod
        
        let valContri = (arr[i] * freq) % mod
        sum += valContri
    }

    return sum
};