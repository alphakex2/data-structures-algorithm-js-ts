//Use this technique to solve many string related problems 
// 1. Most common character
// 2. Anagrams
// 3. Does the string have any repeated characters
function maxChar(text: string) {
  let count: any = {} //Character map
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

console.log(maxChar("Kennedy"))
