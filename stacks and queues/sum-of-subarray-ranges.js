/*
Intuition (sum-of-subarray-ranges):
- Sum of subarray ranges = sum(max - min) over all subarrays.
- Use contribution for each index `i`:
  - treat `arr[i]` as the maximum in some subarrays => add `arr[i] * (#subarrays where i is max)`
  - treat `arr[i]` as the minimum in some subarrays => subtract `arr[i] * (#subarrays where i is min)`
- Monotonic stacks give boundaries:
  - next smaller / previous smaller-or-equal for minimums (tie-breaking prevents double counting)
  - next greater / previous greater-or-equal for maximums (also tie-breaking)
- For each `i`:
  - `leftMin = i - prevSmallerOrEqualIndex`, `rightMin = nextSmallerIndex - i` => count = leftMin * rightMin
  - similarly for max; answer = sum(maxContrib) - sum(minContrib)
*/
/**
 * @param {number[]} nums
 * @return {number}
 */

var nextSmallerElement = function(nums){
    let st = new Array()
    let ar = new Array(nums.length)

    for(let i = nums.length - 1;i>=0;i--)
    {
        while(st.length > 0 && nums[st[st.length - 1]] >= nums[i]){
            st.pop()
        }

        if(st.length == 0){
            ar[i] = nums.length
        }
        else{
            ar[i] = st[st.length - 1]
        }

        st.push(i)
    }
    return ar
}


var nextGreaterElement = function(nums){
    let st = new Array()
    let ar = new Array(nums.length)

    for(let i = nums.length - 1;i>=0;i--)
    {
        while(st.length > 0 && nums[st[st.length - 1]] <= nums[i]){
            st.pop()
        }

        if(st.length == 0){
            ar[i] = nums.length
        }
        else{
            ar[i] = st[st.length - 1]
        }

        st.push(i)
    }
    return ar
}


var previousSmallerorEqualElement = function(nums){
    let st = new Array()
    let ar = new Array(nums.length)

    for(let i = 0;i < nums.length ;i ++ ){
        while(st.length > 0 && nums[st[st.length - 1]] > nums[i]){
            st.pop()
        }

        if(st.length == 0){
            ar[i] = -1
        }
        else{
            ar[i] = st[st.length - 1]
        }

        st.push(i)
    }
    return ar
}

var previousGreaterorEqualElement = function(nums){
    let st = new Array()
    let ar = new Array(nums.length)

    for(let i = 0;i < nums.length ;i ++ ){
        while(st.length > 0 && nums[st[st.length - 1]] < nums[i]){
            st.pop()
        }

        if(st.length == 0){
            ar[i] = -1
        }
        else{
            ar[i] = st[st.length - 1]
        }

        st.push(i)
    }
    return ar
}

var subArrayRanges = function(nums) {
    let nse = nextSmallerElement(nums)
    let nge = nextGreaterElement(nums)
    let psee = previousSmallerorEqualElement(nums)
    let pgee = previousGreaterorEqualElement(nums)

    let sum = 0

    for(let i = 0;i < nums.length;i++){
        let leftSmallBoundary = i - psee[i]
        let rightSmallBoundary = nse[i] - i

        let leftGreaterboundary = i - pgee[i]
        let rightGreaterBoundary = nge[i] - i


        let smallContri = (rightSmallBoundary * leftSmallBoundary) * nums[i]
        let greaterContri = (rightGreaterBoundary * leftGreaterboundary) * nums[i]

        sum += greaterContri - smallContri
    }

    return sum
};