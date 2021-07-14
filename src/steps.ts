function steps(num: number) {
  for (let row = 0; row <= num; row++) {
    let stair = ""
    for (let col = 0; col <= num; col++) {
      if (col <= row) {
        stair += "#"
      } else {
        stair += " "
      }
    }
    console.log(stair)
  }
}

steps(4)

//Alternative solution using recursion
function stepsRecursive(n: number, row = 0, stair = "") {
  if (n === row) return

  if (n === stair.length) {
    console.log(stair)
    stepsRecursive(n, row + 1)
    return
  }

  if (stair.length <= row) {
    stair += "#"
  } else {
    stair += " "
  }
  stepsRecursive(n, row, stair)
}

stepsRecursive(5)