function matrix(num) {
  let result = []
  //   let result = [...Array(num)].map(() => Array(num).fill(null))
  for (let i = 0; i < num; i++) {
    result.push([])
  }
  let counter = 1
  let startCol = 0
  let endCol = num - 1
  let startRow = 0
  let endRow = num - 1

  while (startCol <= endCol && startRow <= endRow) {
    //Top row
    for (let i = startCol; i <= endCol; i++) {
      result[startRow][i] = counter
      counter++
    }
    startRow++
    //Right column
    for (let i = startRow; i <= endRow; i++) {
      result[i][endCol] = counter
      counter++
    }
    endCol--
    //Bottom row
    for (let i = endCol; i >= startCol; i--) {
      result[endRow][i] = counter
      counter++
    }
    endRow--
    //Start column
    for (let i = endRow; i >= startRow; i--) {
      result[i][startCol] = counter
      counter++
    }
    startCol++
  }

  return result
}

test("matrix is a function", () => {
  expect(typeof matrix).toEqual("function")
})

test("matrix produces a 2x2 array", () => {
  const m = matrix(2)
  expect(m.length).toEqual(2)
  expect(m[0]).toEqual([1, 2])
  expect(m[1]).toEqual([4, 3])
})

test("matrix produces a 3x3 array", () => {
  const m = matrix(3)
  expect(m.length).toEqual(3)
  expect(m[0]).toEqual([1, 2, 3])
  expect(m[1]).toEqual([8, 9, 4])
  expect(m[2]).toEqual([7, 6, 5])
})

test("matrix produces a 4x4 array", () => {
  const m = matrix(4)
  expect(m.length).toEqual(4)
  expect(m[0]).toEqual([1, 2, 3, 4])
  expect(m[1]).toEqual([12, 13, 14, 5])
  expect(m[2]).toEqual([11, 16, 15, 6])
  expect(m[3]).toEqual([10, 9, 8, 7])
})
