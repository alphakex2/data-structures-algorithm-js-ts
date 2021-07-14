function vowel(text: string) {
  let count = 0
  let vowels: any = {
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

//alternative solusion
function vowels2(text: string) {
  const matches = text.match(/[aeiou]/gi) //i case insensitive
  return matches ? matches.length : false
}
console.log(vowels2("Hi There!"))
