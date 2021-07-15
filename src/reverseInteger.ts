//Integer reversal

function integerReversal(num: number) {
  if (Math.sign(num) === -1) {
    //Same as num < 0
    let temp = Math.abs(num)
    return Number(temp.toString().split("").reverse().join("")) * -1
  } else if (num === 0) {
    return 0
  }
  return Number(num.toString().split("").reverse().join(""))
}

//Above function cleaned Up

function integerReversal2(num: number) {
  return Number(Math.abs(num).toString().split("").reverse().join("")) * Math.sign(num)
} //Math.sign(num) will return 1 if positive else -1
