function steamroller (arr) {
  while (arr.some(Array.isArray)) {
    arr = Array.prototype.concat.apply([], arr)
  }
  return arr
}

console.log(steamroller([1, [2], [[[3]]], 4]))
