function primes (n) {
  'use strict'

  // Start with all integers 2..n in the arrary
  let arr = []
  for (let i = 2; i <= n; i++) {
    arr.push(i)
  }

  // Appply sieve
  let sieved = 0
  let x = arr[0]
  while (x * x <= n) {
    for (let i = 0; arr[i] <= sieved; i++) {
      x = arr[i + 1]
    }
    arr = arr.filter((y) => y === x || y % x)
    sieved = x
  }

  return arr
}

function sumPrimes (num) {
  'use strict'

  return primes(num).reduce((acc, x) => acc + x, 0)
}

console.log(sumPrimes(10), 17)
console.log(sumPrimes(977), 73156)
