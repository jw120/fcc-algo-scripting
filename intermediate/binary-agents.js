function binaryAgent (str) {
  return str.split(' ').map(decodeBinaryByte).join('')
}

function decodeBinaryByte (s) {
  'use strict'

  let bits = s.split('').reverse()
  let base = 1
  let acc = 0
  for (let i = 0; i < s.length; i++) {
    acc += bits[i] === '1' ? base : 0
    base *= 2
  }
  return String.fromCharCode(acc)
}

console.log(binaryAgent('01000001 01110010 01100101 01101110 00100111 01110100 00100000 01100010 01101111 01101110 01100110 01101001 01110010 01100101 01110011 00100000 01100110 01110101 01101110 00100001 00111111'))
