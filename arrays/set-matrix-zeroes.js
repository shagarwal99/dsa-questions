
/*
    Time Complexity: O(m*n*(m+n))
    Space Complexity: O(m*n)
*/
var brute = function(matrix) {
    let temp = [...matrix];
    
    for(let i = 0; i < matrix.length; i++) {
        for(let j = 0; j < matrix[0].length; j++) {
            // if current element is 0, set all elements in same row and column to 0
            if(matrix[i][j] === 0) {
                // set all elements in same row to 0
                for(let k = 0; k < matrix[0].length; k++) {
                    temp[i][k] = 0;
                }
                // set all elements in same column to 0
                for(let k = 0; k < matrix.length; k++) {
                    temp[k][j] = 0;
                }
            }
        }
    }
    
    return temp;
};

/*
    Time Complexity: O(m*n)
    Space Complexity: O(m+n)

    Approach:
    We will maintain two sets to store the rows and columns that have zeros. And then just iterate over and check if i,j is present in row or col set,
    set that cell to 0.
*/
var better = function(matrix) {
    let col = new Set();
    let row = new Set();
    
    for(let i = 0; i < matrix.length; i++) {
        for(let j = 0; j < matrix[0].length; j++) {
            if(matrix[i][j] === 0) {
                col.add(j);
                row.add(i);
            }
        }
    }
    
    for(let i = 0; i < matrix.length; i++) {
        for(let j = 0; j < matrix[0].length; j++) {
            if(col.has(j) || row.has(i)) {
                matrix[i][j] = 0;
            }
        }
    }
    
    return matrix;
};


/*
    Time Complexity: O(m*n)
    Space Complexity: O(1)

    Approach:
    We will use the first row and first column as markers to indicate which rows and columns should be set to zero.
    We will also use two boolean variables to check if the first row and first column themselves need to be set to zero.
    
    1. Check if first row and first column have zeros
    2. Use first row and column as markers
    3. Set first row and column to zero based on markers
    4. Set first row and column to zero if needed

    Need to maintain markers for first row and first column separately is because if we use them as markers,
    we won't be able to distinguish between original zeros and zeros set by our algorithm.
*/
var optimal = function(matrix) {
    let firstRowHasZero = false
    let firstColHasZero = false
    
    // Check if first row has any zeros
    for(let j = 0; j < matrix[0].length; j++) {
        if(matrix[0][j] === 0) {
            firstRowHasZero = true
            break
        }
    }
    
    // Check if first column has any zeros
    for(let i = 0; i < matrix.length; i++) {
        if(matrix[i][0] === 0) {
            firstColHasZero = true
            break
        }
    }
    
    // Use first row and column as markers
    for(let i = 1; i < matrix.length; i++) {
        for(let j = 1; j < matrix[0].length; j++) {
            if(matrix[i][j] === 0) {
                matrix[i][0] = 0
                matrix[0][j] = 0
            }
        }
    }
    
    // Set zeros based on markers
    for(let i = 1; i < matrix.length; i++) {
        for(let j = 1; j < matrix[0].length; j++) {
            if(matrix[i][0] === 0 || matrix[0][j] === 0) {
                matrix[i][j] = 0
            }
        }
    }
    
    // Set first row to zeros if needed
    if(firstRowHasZero) {
        for(let j = 0; j < matrix[0].length; j++) {
            matrix[0][j] = 0
        }
    }
    
    // Set first column to zeros if needed
    if(firstColHasZero) {
        for(let i = 0; i < matrix.length; i++) {
            matrix[i][0] = 0
        }
    }
    
    return matrix
};
