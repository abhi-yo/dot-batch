function countVowel(str) {
  const vowels = ["a", "e", "i", "o", "u"];
  let count = 0;
  for (i = 0; i < str.length; i++) {
    if (vowels.includes(str[i])) {
      count++;
    }
  }
  return count;
}
console.log(countVowel("hello world!"));
