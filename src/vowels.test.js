function vowels(text) {
  let count = 0
  let vowels = {
    a: "a",
    e: "e",
    i: "i",
    o: "o",
    u: "u",
  }
  for (let char of text) {
    if (vowels[char.toLowerCase()] === char.toLowerCase()) {
      count++
    }
  }
  return count
}

test("Vowels is a function", () => {
  expect(typeof vowels).toEqual("function")
})

test("returns the number of vowels used", () => {
  expect(vowels("aeiou")).toEqual(5)
})

test("returns the number of vowels used when they are capitalized", () => {
  expect(vowels("AEIOU")).toEqual(5)
})

test("returns the number of vowels used", () => {
  expect(vowels("abcdefghijklmnopqrstuvwxyz")).toEqual(5)
})

test("returns the number of vowels used", () => {
  expect(vowels("bcdfghjkl")).toEqual(0)
})
