/*
    Approach:
    - Use four pointers to track the boundaries of the matrix: upperRow, lowerRow, leftCol, rightCol
    Then follow the steps:
        - Print Upper Row : from left col to right col. Then increment upperRow
        - Print Right Col : from upper row to lower row. Then decrement rightCol
        - Print Lower Row : from right col to left col. Then decrement lowerRow
        - Print Left Col : from lower row to upper row. Then increment leftCol
    
    The need for checks while printing lower row and left col is to avoid duplicates
    Example:
    Matrix: [[1, 2, 3]]
        Initial state: upper=0, lower=0, left=0, right=2
        Step 1 — Print top row → [1, 2, 3], then upper becomes 1
        Step 2 — Print right col (from upper=1 to lower=0) → loop doesn't execute (1 > 0) ✓
        Step 3 — Print bottom row (if upper <= lower) → 1 <= 0 is false, so we skip it ✓
        Without this check, you'd print the bottom row with upper=1, lower=0, which is the same row as the top — 
        giving you [1, 2, 3, 3, 2, 1] instead of [1, 2, 3].
    
    TC : O(m*n) where m is number of rows and n is number of columns
*/
var spiralOrder = function(matrix) {
    let res = new Array()
    let upperRow = 0
    let lowerRow = matrix.length - 1;
    let leftCol = 0
    let rightCol = matrix[0].length - 1

    while(upperRow <= lowerRow && leftCol <= rightCol){
        // print upper row
        for(let i = leftCol;i<=rightCol;i++){
            res.push(matrix[upperRow][i])
        }
        upperRow += 1

        //print right col
        for(let i = upperRow;i<=lowerRow;i++){
            res.push(matrix[i][rightCol])
        }
        rightCol -=1

        // print lower row : right to left
        if(upperRow <= lowerRow){
            for(let i = rightCol;i>= leftCol;i--){
                res.push(matrix[lowerRow][i])
            }
            lowerRow -= 1
        }
        
        //print left col : bottom to top
        if(leftCol <= rightCol){
            for(let i = lowerRow; i >= upperRow;i--){
                res.push(matrix[i][leftCol])
            }
            leftCol += 1
        }
    }

    return res
};