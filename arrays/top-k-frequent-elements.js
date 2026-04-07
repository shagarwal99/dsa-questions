/**
    We will use hasking + bucket sort approach here. First we will maintain the counts of every digit in the hashmap. Now, we will maintain an array whose index will be the possible count
    of digits we can have in the array. And we will place the digits with the similar count in one bucket itself.

    Ex : if 2 and 3 both have same count 2, we will push both of them into an array at index 2

    After this bucket is maintained, we can just start lopping from the end till k > 0

    TC : O(N) + O(N) + O(K)
    SC : O(N) + O(N) (The size of the bucket array will be N + 1, but the buckets collectively will hold N elements)
*/
var topKFrequent = function(nums, k) {
    let bucket = new Array(nums.length + 1)
    let mp = new Map()
    let res = new Array()
    for(let i = 0;i < nums.length;i++)
    {
        mp.set(nums[i], (mp.get(nums[i]) || 0) + 1 )
    }

    for(let [key,val] of mp){
        if(bucket[val])
        {
            bucket[val].push(key)
        }
        else{
            bucket[val] = [key]
        }
    }

    for(let i = bucket.length;i>=0;i--){
        if(bucket[i]){
            for(let j = 0;j<bucket[i].length && k > 0;j++){
                res.push(bucket[i][j])
                k--
            }
        }
    }
    return res
};