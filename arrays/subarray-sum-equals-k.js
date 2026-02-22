/*
    The core idea is — if prefixSum[j] - prefixSum[i] = k, then the subarray from i+1 to j sums to k. Instead of computing all prefix sums upfront, we do it on the fly and use a hashmap to store how many times each prefix sum has occurred.
    Algorithm:
        -Initialize hashmap with {0: 1}, currentSum = 0, count = 0
        -For each element, add it to currentSum
        -Check if currentSum - k exists in hashmap → if yes, add its frequency to count
        -Update hashmap with currentSum
        -Return count
    
    TC: O(n) - single pass through the array
    SC: O(n) - hashmap can store up to n elements
*/

var subarraySum = function(nums, k) {
    let mp = new Map();
    let currSum = 0
    let count = 0
    mp.set(0,1)
    for(let i = 0;i<nums.length;i++){
        currSum += nums[i]

        if(mp.has(currSum - k)){
            count += mp.get(currSum - k)
        }
        mp.set(currSum, (mp.get(currSum) || 0) + 1)
    }

    return count
};