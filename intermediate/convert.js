//jshint esversion:6

function convert(str) {
  return str
    .replace(/&/g, "&amp;")
    .replace(/</g, "&lt;")
    .replace(/>/g, "&gt;")
    .replace(/"/g, "&quot;")
    .replace(/'/g, "&apos;");

  return str;
}

console.log(convert("Dolce & Gabbana <help> he's"));
console.log(convert('He said "Hello"'));
