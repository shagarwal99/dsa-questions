var rotate = function(matrix) {
    //transpose a matrix
    for(let i = 0;i<matrix.length;i++){
        for(let j = i + 1; j < matrix[0].length; j++){
            let temp = matrix[i][j]
            matrix[i][j] = matrix[j][i]
            matrix[j][i] = temp
        }
    }

    //reverse each row of the matrix
    for(let i = 0;i<matrix.length;i++){
        let start = 0;
        let end = matrix[i].length - 1

        while(start <= end){
            [matrix[i][start],matrix[i][end]]  = [matrix[i][end],matrix[i][start]]
            start++
            end--
        }
    }
};