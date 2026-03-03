/**
 * Binary search on answer (capacity), not input array
 * L = max(weights) → min viable capacity (heaviest package must fit)
 * R = sum(weights) → max capacity (everything in one day)
 * getDays: count days needed for a given capacity
 * if getDays(m) <= days → valid, try smaller (r = m-1), track ans
 * if getDays(m) > days → too small, go larger (l = m+1)
 * Pattern: "min capacity to finish in X turns" → binary search + greedy check
 */

var getDays = (weights,maxWeight) => {
    let count = 1;
    let weight = 0;

    for(let i = 0;i<weights.length;i++){
        weight += weights[i];

        if(weight > maxWeight){
            count++;
            weight = weights[i];
        }
    }

    return count;
}

var shipWithinDays = function(weights, days) {
    let l = Math.max(...weights)
    let r = weights.reduce((acc,currVal) => acc + currVal , 0)
    let ans = r
    while( l <= r)
    {
        let m = l + Math.floor((r-l)/2)

        let neededDays = getDays(weights,m)

        if(neededDays <= days){
            ans = m
            r = m-1
        }
        else {
            l = m+1
        }
    }
    return ans
};