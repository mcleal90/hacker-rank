function diagonalDifference(arr) {
    let sumLeftDiag = 0
    let sumRightDiag = 0
    
    for (let i=0; i<arr.length;i++){
        sumLeftDiag += arr[i][i]
        sumRightDiag += arr[i][arr.length - 1 - i]
    }
    return Math.abs (sumLeftDiag - sumRightDiag)
}

console.log(diagonalDifference([
    [11,2,4],
    [4,5,6],
    [10,8,-12]
]))