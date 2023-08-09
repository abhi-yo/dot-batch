function count(str) {
  const counts = {};
  for (let i = 0; i < str.length; i++) {
    const char = str[i];
    if (counts[char]) {
      counts[char]++;
    } else {
      counts[char] = 1;
    }
  }
  return counts;
}
const letterCount = count("hello");
console.log(letterCount);
