const x = "Hello World!";
function reverse(str) {
  const reverse = str.split("").reverse().join("");
  return reverse;
}
console.log(reverse(x));
