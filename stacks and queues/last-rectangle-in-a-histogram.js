/**
 * @param {number[]} heights
 * @return {number}
 */

var nextSmallerElement = function(heights)
{
    let st = new Array()
    let nse = new Array()

    for(let i = heights.length - 1;i>=0;i--){
        while(st.length > 0 && heights[st[st.length - 1]] >= heights[i]){
            st.pop()
        }

        if(st.length == 0){
            nse[i] = heights.length
        }
        else{
            nse[i] = st[st.length - 1]
        }

        st.push(i)
    }

    return nse
}


var previousSmallerElement = function(heights)
{
    let st = new Array()
    let pse = new Array()

    for(let i = 0;i < heights.length;i++)
    {
        while(st.length > 0 && heights[st[st.length - 1]] >= heights[i])
        {
            st.pop()
        }

        if(st.length == 0){
            pse[i] = -1
        }
        else{
            pse[i] = st[st.length - 1]
        }

        st.push(i)
    }

    return pse
}

/*

    We can find a valid rectangle at each index by finding the nse and pse for each index. And the area enclosed by that rectangle will be nse - pse -1

    TC : O(2 * 2N + N)
    SC : O(2N)
*/
var largestRectangleAreaBrute = function(heights) {
    let nse = nextSmallerElement(heights)
    let pse = previousSmallerElement(heights)
    let maxArea = Number.MIN_SAFE_INTEGER

    for(let i = 0;i<heights.length;i++){
        let leftBoundary = pse[i]
        let rightBoundary = nse[i]
        // console.log(`heights[i] = ${heights[i]} right = ${rightBoundary} left = ${leftBoundary}`)
        maxArea = Math.max(maxArea, (rightBoundary - leftBoundary - 1 ) * heights[i] )
    }

    return maxArea
};