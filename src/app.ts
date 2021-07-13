function arrChunk(arr: number[], size: number) {
  let res: any = []

  for (let el of arr) {
    const last = res[res.length - 1]
    if (!last || last.length === size) {
      res.push([el])
    } else {
      last.push(el)
    }
  }
  return res
}

//Alternative using slice
function arrChunk2(arr: number[], size: number) {
  let res: any = []
  let idx = 0
  while (idx < arr.length) {
    res.push(arr.slice(idx, idx + size))
    idx += size
  }
  return res
}

console.log(arrChunk([1, 2, 3, 4, 5], 3))
