function spinalCase(str) {
  if (/^[a-zA-Z]+$/.test(str)) {
    return str.replace(/([a-z])([A-Z])/g, "$1-$2").toLowerCase();
  } else {
    return str.replace(/[^a-zA-Z]+/g, "-").toLowerCase();
  }
}

console.log(spinalCase('This Is Spinal Tap'));
console.log(spinalCase('This_Is_Spinal_Tap'));
console.log(spinalCase('thisIsSpinalTap'));
