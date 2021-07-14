function matrix(num: number) {
  let result: any = []
  //Fill the 2d array with empty arrays
  for (let i = 0; i < num; i++) {
    result.push([])
  }
  let counter = 1
  let startCol = 0
  let endCol = num - 1
  let startRow = 0
  let endRow = num - 1

  while (startRow <= endRow && startCol <= endCol) {
    //FirstRow
    for (let i = startCol; i <= endCol; i++) {
      result[startRow][i] = counter
      counter++
    }

    //Right Column
    startRow++
    for (let i = startRow; i <= endRow; i++) {
      result[i][endCol] = counter
      counter++
    }

    //Bottom Row
    endCol--
    for (let i = endCol; i >= startCol; i--) {
      result[endRow][i] = counter
      counter++
    }
    //First Column
    endRow--
    for (let i = endRow; i >= startRow; i--) {
      result[i][startCol] = counter
      counter++
    }
    startCol++
  }
  return result
}

console.log(matrix(3))
