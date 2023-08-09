function getKeys(obj) {
  const keys = Object.keys(obj);
  return keys;
}
const person = {
  name: "John",
  age: 30,
  hobbies: ["reading", "music", "movies"],
};
console.log(getKeys(person));
// Output
// [ 'name', 'age', 'hobbies' ]
// In this snippet, we have a function getKeys that takes an object as an argument and returns an array of all the keys in the object. We can use the Object.keys() method to get an array of all the keys in an object. We can then return this array from the function.
