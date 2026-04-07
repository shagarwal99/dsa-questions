/*
    Search a 2D Matrix II — Intuition

    - Matrix property: each row sorted left→right, each column sorted top→bottom
    - Key insight: start from TOP-RIGHT corner — this is the "decision point"
        - moving LEFT decreases value
        - moving DOWN increases value
    - At each step:
        - if current == target → found, return true
        - if current < target → current row is too small, move DOWN (row++)
        - if current > target → current column is too big, move LEFT (col--)
    - Each comparison eliminates an entire row or column → O(m + n) time
    - No need for binary search — the staircase traversal is optimal
*/
var searchMatrix = function(matrix, target) {
    let n = matrix.length
    let m = matrix[0].length

    let row = 0,col = m-1

    while(row < n && col >= 0)
    {
        if(matrix[row][col] == target) return true
        else if(matrix[row][col] < target) row++
        else col--
    }

    return false
};