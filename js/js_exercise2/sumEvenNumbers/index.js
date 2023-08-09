function sumEvenNumbers(n) {
  let sum = 0;
  for (i = 0; i < n.length; i++) {
    if (n[i] % 2 === 0) {
      sum += n[i];
    }
  }
  return sum;
}
const n = [1, 2, 3, 4, 5, 6, 7, 8, 9, 10];
console.log(sumEvenNumbers(n));
