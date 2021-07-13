function maxChar2(text) {
  let count = {} //Character map
  let max = 0
  let maxChar = ""

  for (let char of text) {
    count[char] = count[char] + 1 || 1 //If count[char] + 1 === Nan then 0 else add 1
  }
  for (let val in count) {
    if (count[val] > max) {
      max = count[val]
      maxChar = val
    }
  }
  return maxChar
}

test("maxChar2 function exists", () => {
  expect(typeof maxChar2).toEqual("function")
})

test("Finds the most frequently used char", () => {
  expect(maxChar2("a")).toEqual("a")
  expect(maxChar2("abcdefghijklmnaaaaa")).toEqual("a")
})

test("Works with numbers in the string", () => {
  expect(maxChar2("ab1c1d1e1f1g1")).toEqual("1")
})
