function capitalization(sentence: string) {
  return sentence
    .split(" ")
    .map(
      (word: string) => word[0].toUpperCase() + word.substring(1, word.length)
    )
    .join(" ")
}

//Alternative
function capitalize2(sentence: string) {
  let result = ""

  for (let i = 0; i < sentence.length; i++) {
    if (sentence[i - 1] === " ") {
      result += sentence[i].toUpperCase()
    } else {
      result += sentence[i]
    }
  }

  return result[0].toUpperCase() + result.substring(1, sentence.length)
}

console.log(capitalize2("i went to school."))
