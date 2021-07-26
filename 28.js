function f(n) {
  return parseInt(String(n).split("").sort().reverse().join(""));
}
console.log(f(42145)