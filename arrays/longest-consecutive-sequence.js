/*
    Since duplicate elements dont count here, we can maintain a set of the distinct elements present
    in the array

    Now, this set can contain multiple subsequences in it. Thus our main task first is to find a way
    to check if a number is start of a consecutive subsequence. Best way to find it out is to just check
    in the set if a val - 1 exists or not

    Once, it is found we can start from this number and check till we find val + 1. 

    TC : O(N)
    SC : O(N)
*/


var longestConsecutive = function(nums) {
    let st = new Set(nums)
    let ct = 0;
    let res = 0;

    for(let val of st){
        if(!st.has(val - 1)) {
            let x = val
            ct = 1
            while(st.has(x + 1)){
                ct += 1
                x += 1
            }

            res = Math.max(res,ct)
        }
    }

    return res
};