/*
    we will use a monotonic deque to maintain indices to track the maximum in each window. The queue will have decreasing order of elements

    back pop : we will start popping from the back till nums[r] > nums[deq.top()]

    front pop: 
        - The deque front is the max, but it is not always the leftmost element of the window — it can be anywhere inside
        - Only pop the front when deque[0] == left — meaning the current max is the exact element walking out of the window
        
    Why store indices, not values
        - Values can have duplicates — you'd have no way to tell which copy is leaving the window
*/
var maxSlidingWindow = function(nums, k) {
    let deq = new Array()
    let l = 0, r = 0
    let res= new Array()

    while(r < nums.length){
        while(deq.length > 0 && nums[deq[deq.length - 1]] < nums[r]){
            deq.pop()
        }

        deq.push(r)
        
        if(r - l + 1 == k){
            res.push(nums[deq[0]])

            if(deq[0] == l){
                deq.shift()
            }

            l++
        }

        r++
    }
    return res
};