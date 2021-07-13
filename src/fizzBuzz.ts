function fizzBuzz(num: number) {
  for (let i = 0; i <= num; i++) {
    if (i % 15 === 0 && i !== 0) {
      console.log("fizzBuzz")
    } else if (i % 3 === 0 && i !== 0) {
      console.log("fizz")
    } else if (i % 5 === 0 && i !== 0) {
      console.log("buzz")
    } else {
      console.log(i)
    }
  }
}

fizzBuzz(100)