function find (arr, func) {
  return arr.find(func)
}

console.log(find([1, 3, 5, 8, 9, 10], function (num) { return num % 2 === 0 }), 8)
