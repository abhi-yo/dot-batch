function getPropertyNames(arr, propName) {
  const values = arr.map((obj) => obj[propName]);
  return values;
}
const people = [
  { name: "Pranay", age: 20, gender: "male" },
  { name: "Nidhi", age: 21, gender: "female" },
  { name: "Soumya", age: 21, gender: "male" },
];
console.log(getPropertyNames(people, "name"));
