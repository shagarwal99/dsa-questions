/*
    Problem statement: 
        Given an array nums of size n, which denotes the positions of stalls, and an 
        integer k, which denotes the number of aggressive cows, assign stalls to k cows such that the 
        minimum distance between any two cows is the maximum possible. Find the maximum possible minimum 
        distance.
    
    Approach : 
    This is the same binary search pattern where we have to either maximize min something or
    minimize max something.
    Thus we will just sort the array and apply binary search on answer.
*/
class Solution {

    isPlacingCowsPossible(nums,k,dist){
        let cows = 1
        let prev = nums[0]
        for(let i = 1;i<nums.length;i++){
            if(nums[i] - prev >= dist){
                cows++
                prev = nums[i]
            }
        }

        if(cows >= k) return true
        return false
    }

    aggressiveCows(nums, k) {
        nums.sort((a,b) => a-b)
        let l = 1
        let r = nums[nums.length - 1]
        let ans = 0

        while(l <= r){
            let m = l + Math.floor((r-l)/2)
            if(this.isPlacingCowsPossible(nums,k,m)){
                ans = m
                l = m+1
            }
            else{
                r = m-1
            }
        }
        return ans
    }
}