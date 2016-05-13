function drop (arr, func) {
  'use strict'

  let firstValidIndex = 0
  while (!func(arr[firstValidIndex])) {
    firstValidIndex++
  }
  return arr.slice(firstValidIndex)
}

console.log(drop([1, 2, 3, 4], function (n) { return n >= 3 }), [3, 4])
