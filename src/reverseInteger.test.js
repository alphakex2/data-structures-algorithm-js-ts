function integerReversal(num) {
  if (Math.sign(num) === -1) {
    let temp = Math.abs(num)
    return Number(temp.toString().split("").reverse().join("")) * -1
  } else if (num === 0) {
    return 0
  }
  return Number(num.toString().split("").reverse().join(""))
}

test("ReverseInt function exists", () => {
  expect(integerReversal).toBeDefined()
})

test("ReverseInt handles 0 as an input", () => {
  expect(integerReversal(0)).toEqual(0)
})

test("ReverseInt flips a positive number", () => {
  expect(integerReversal(5)).toEqual(5)
  expect(integerReversal(15)).toEqual(51)
  expect(integerReversal(90)).toEqual(9)
  expect(integerReversal(2359)).toEqual(9532)
})

test("ReverseInt flips a negative number", () => {
  expect(integerReversal(-5)).toEqual(-5)
  expect(integerReversal(-15)).toEqual(-51)
  expect(integerReversal(-90)).toEqual(-9)
  expect(integerReversal(-2359)).toEqual(-9532)
})
