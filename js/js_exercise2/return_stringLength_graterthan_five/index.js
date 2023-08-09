function filterLongStrings(arr) {
  let filteredArr = [];
  for (i = 0; i < arr.length; i++) {
    if (arr[i].length > 5) {
      filteredArr.push(arr[i]);
    }
  }
  return filteredArr;
}
console.log(
  filterLongStrings([
    "kia",
    "tesla",
    "bmw",
    "mercedes",
    "toyota",
    "hyundai",
    "ford",
    "chevrolet",
    "audi",
    "volkswagen",
  ])
);
