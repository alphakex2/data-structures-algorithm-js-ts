function anagram2(str1, str2) {
  let mapA = buildCharacterMap2(str1)
  let mapB = buildCharacterMap2(str2)
  //Check if the maps length are equal
  if (Object.keys(mapA).length !== Object.keys(mapB).length) return false

  //Loop through to check if there is a mismatch
  for (let char in mapA) {
    if (mapA[char] !== mapB[char]) return false
  }

  return true
}

//Build a character map
function buildCharacterMap2(str) {
  let map = {}
  for (let char of str) {
    let lower = char.toLowerCase()
    if (lower.match(/[a-z]/)) {
      map[lower] = map[lower] + 1 || 1
    }
  }
  return map
}

test("anagrams function exists", () => {
  expect(typeof anagram2).toEqual("function")
})

test('"hello" is an anagram of "llohe"', () => {
  expect(anagram2("hello", "llohe")).toBeTruthy()
})

test('"Whoa! Hi!" is an anagram of "Hi! Whoa!"', () => {
  expect(anagram2("Whoa! Hi!", "Hi! Whoa!")).toBeTruthy()
})

test('"One One" is not an anagram of "Two two two"', () => {
  expect(anagram2("One One", "Two two two")).toBeFalsy()
})

test('"One one" is not an anagram of "One one c"', () => {
  expect(anagram2("One one", "One one c")).toBeFalsy()
})

test('"A tree, a life, a bench" is not an anagram of "A tree, a fence, a yard"', () => {
  expect(
    anagram2("A tree, a life, a bench", "A tree, a fence, a yard")
  ).toBeFalsy()
})
