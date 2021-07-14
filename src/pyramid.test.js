function pyramid(num) {
  let mid = Math.floor((2 * num - 1) / 2)
  for (let row = 0; row < num; row++) {
    let level = ""

    for (let col = 0; col < 2 * num - 1; col++) {
      if (mid - row <= col && mid + row >= col) {
        level += "#"
      } else {
        level += " "
      }
    }
    console.log(level)
  }
}

beforeEach(() => {
  jest.spyOn(console, "log")
})

afterEach(() => {
  console.log.mockRestore()
})

test("pyramid is a function", () => {
  expect(typeof pyramid).toEqual("function")
})

test("prints a pryamid for n = 2", () => {
  pyramid(2)
  expect(console.log.mock.calls[0][0]).toEqual(" # ")
  expect(console.log.mock.calls[1][0]).toEqual("###")
  expect(console.log.mock.calls.length).toEqual(2)
})

test("prints a pryamid for n = 3", () => {
  pyramid(3)
  expect(console.log.mock.calls[0][0]).toEqual("  #  ")
  expect(console.log.mock.calls[1][0]).toEqual(" ### ")
  expect(console.log.mock.calls[2][0]).toEqual("#####")
  expect(console.log.mock.calls.length).toEqual(3)
})

test("prints a pryamid for n = 4", () => {
  pyramid(4)
  expect(console.log.mock.calls[0][0]).toEqual("   #   ")
  expect(console.log.mock.calls[1][0]).toEqual("  ###  ")
  expect(console.log.mock.calls[2][0]).toEqual(" ##### ")
  expect(console.log.mock.calls[3][0]).toEqual("#######")
  expect(console.log.mock.calls.length).toEqual(4)
})
