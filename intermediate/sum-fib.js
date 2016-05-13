function sumFibs (num) {
  'use strict'

  let sum = 0
  let xPrev = 0
  let x = 1
  while (true) {
    if (x <= num) {
      console.log('adding', x)
      sum += x % 2 ? x : 0
      let xOld = x
      x += xPrev
      xPrev = xOld
    } else {
      break
    }
  }
  return sum
}

console.log(sumFibs(4), 5)
console.log(sumFibs(75024), 60696)
console.log(sumFibs(75025), 135721)
