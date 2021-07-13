function anagram(str1: string, str2: string) {
  let mapA = buildCharacterMap(str1)
  let mapB = buildCharacterMap(str2)
  //Check if the maps length are equal
  if (Object.keys(mapA).length !== Object.keys(mapB).length) return false

  //Loop through to check if there is a mismatch
  for (let char in mapA) {
    if (mapA[char] !== mapB[char]) return false
  }

  return true
}

//Build a character map
function buildCharacterMap(str: string) {
  let map: any = {}
  for (let char of str) {
    let lower = char.toLowerCase()
    if (lower.match(/[a-z]/)) {
      map[lower] = map[lower] + 1 || 1
    }
  }
  return map
}
//Alternative solution Not recommended due to perfomance
function anagramPoor(str1: string, str2: string) {
  let set1
  let set2
  if (str1.toLowerCase().match(/[a-z]/)) {
    set1 = str1.toLowerCase().split("").sort().join("")
  }
  if (str2.toLowerCase().match(/[a-z]/)) {
    set2 = str2.toLowerCase().split("").sort().join("")
  }
  console.log(set1,set2)
  if (set1 !== set2) return false

  return true
}

console.log(anagramPoor("rsail safety", "faiSry tales"))
