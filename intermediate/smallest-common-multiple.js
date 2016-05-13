function gcd (a, b) {
  'use strict'

  if (a < b) {
    return gcd(b, a)
  }
  while (b > 0) {
    let t = b
    b = a % b
    a = t
  }
  return a
}

function lcm (a, b) {
  return a * b / gcd(a, b)
}

function smallestCommons (arr) {
  'use strict'

  let a = arr[0]
  let b = arr[1]

  if (a > b) {
    return smallestCommons([b, a])
  }

  let scm = lcm(a, a + 1)
  for (let i = a + 2; i <= b; i++) {
    scm = lcm(scm, i)
  }
  return scm
}

console.log(gcd(252, 105), 21)
console.log(lcm(4, 6), 12)
console.log(smallestCommons([1, 5]), 60)
console.log(smallestCommons([5, 1]), 60)
console.log(smallestCommons([1, 13]), 360360)
