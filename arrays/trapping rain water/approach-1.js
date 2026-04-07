/*
    this approach focuses on finding the maximum element in both directions for each element i.e finding the prefix max and the suffix max
*/
function findPrefixMax(height){
    let res = new Array(height.length)
    res[0] = height[0]
    currMax = height[0]
    for(let i = 1;i<height.length;i++)
    {
        currMax = Math.max(currMax,height[i])
        res[i] = currMax
    }

    return res
}

function findSuffixMax(height)
{
    let res = new Array(height.length)
    res[res.length - 1] = height[height.length - 1]
    currMax = height[height.length - 1]

    for(let i = height.length - 2;i>=0;i--)
    {
        currMax = Math.max(currMax,height[i])
        res[i] = currMax
    }
    return res
}

var trap = function(height) 
{
    let total = 0
    let prefMax = findPrefixMax(height)
    let sufMax = findSuffixMax(height)

    for(let i = 0;i<height.length;i++)
    {
        let left = prefMax[i]
        let right = sufMax[i]

        let weight = Math.min(left,right) - height[i]
        total += weight
    }

    return total
};