function fib(n: number): any {
  let results = [0, 1]

  for (let i = 2; i <= n; i++) {
    let a = results[i - 1]
    let b = results[i - 2]
    results.push(a + b)
  }
  return results[n]
}

//Alternative solution using recursion...extremely bad
function fibRec(num: number): any {
  if (num < 2) return num
  return fib(num - 1) + fib(num - 2)
}

//Alternative solution using memoized recursion
function fib_memo(n: number, memo: number[] = []) {
  if (memo[n] !== undefined) return memo[n]
  if (n < 2) return n
  let res: any = fib_memo(n - 1, memo) + fib_memo(n - 2, memo)
  memo[n] = res
  return res
}



console.log(fib_memo(100))
