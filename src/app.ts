function pyramid(num: number) {
  let mid = Math.floor((2 * num - 1) / 2)
  for (let row = 0; row < num; row++) {
    let pyramid = ""
    for (let col = 0; col < 2 * num - 1; col++) {
      if (mid - row <= col && mid + row >= col) {
        pyramid += "#"
      } else {
        pyramid += " "
      }
    }
    console.log(pyramid)
  }
}

pyramid(3)
//Alternative solution using recusion
function pyramidRecursive(num: number, row = 0, level = "") {
  let col = num * 2 - 1
  let mid = Math.floor(col / 2)

  if (row === num) return
  if (level.length === col) {
    console.log(level)
    pyramidRecursive(num, row + 1)
    return
  }

  let add
  if (mid - row <= level.length && mid + row >= level.length) {
    add = "#"
  } else {
    add = " "
  }
  pyramidRecursive(num, row, level + add)
}

pyramidRecursive(5)