/**
 * Approach: Binary Search on Answer Pattern
 * 
 * Pattern: This is a classic "Binary Search on Answer" problem where:
 * 1. We search for the minimum feasible value (eating speed k)
 * 2. The search space is [1, max(piles)] - minimum 1 banana/hour to maximum pile size
 * 3. For each candidate speed, we check if it's feasible (can finish within h hours)
 * 4. If feasible, we try to find a smaller speed (move left)
 * 5. If not feasible, we need a larger speed (move right)
 * 
 * Key Insight: The feasibility function is monotonic - if speed k works,
 * then any speed > k also works. This property enables binary search.
 * 
 * Time Complexity: O(n * log(max(piles))) where n is number of piles
 * Space Complexity: O(1)
 */

var getHours = function(piles,rate){
    let hrs = 0
    for(let i = 0;i<piles.length;i++){
        hrs += Math.ceil(piles[i]/rate)
    }
    return hrs
}

var minEatingSpeed = function(piles, h) {
    let l = 1
    let r = Math.max(...piles)
    let res = -1
    while(l <= r){
        let m = l + Math.floor((r-l)/2)
        let hrs = getHours(piles,m)
        
        if(hrs <= h){
            res = m
            r= m-1
        }
        else{
            l = m+1
        }
    }
    return res
};