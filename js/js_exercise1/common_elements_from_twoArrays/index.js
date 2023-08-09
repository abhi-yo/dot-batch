function findCommonElement(arr1, arr2) {
  let commonElement = [];
  for (i = 0; i < arr1.length; i++) {
    if (arr2.includes(arr1[i])) {
      if (!commonElement.includes(arr1[i])) {
        commonElement.push(arr1[i]);
      }
    }
  }
  commonElement.sort((a, b) => a - b);
  return commonElement;
}

const arr1 = [1, 2, 3, 4, 5];
const arr2 = [2, 3, 5, 7];
console.log(findCommonElement(arr1, arr2));
