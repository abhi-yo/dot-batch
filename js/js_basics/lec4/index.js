// let x = 1;
// x = "a";
// console.log(x);

// function sum(a, b) {
//   return a + b;
// }

// console.log(sum(1, 2));
// console.log(sum(1));
// console.log(sum());
// console.log(sum(1, 2, 3, 4, 5));

// // rest operator
// function sum(num, value, ...args) {
//   console.log(args);
// }
// sum(1, 2, 3, 4, 5, 6, 7, 8, 9, 10);

// Default parameters
function interest(principal, rate, years = 2) {
  return ((principal * rate) / 100) * years;
}
console.log(interest(10000, 5));

// getter and setter
// getter => access properties
// setter => change (mutate) properties
let person = {
  firstName: "John",
  lastName: "Doe",
  get fullName() {
    return `${this.firstName} ${this.lastName}`;
  },
  set fullName(value) {
    if (typeof value !== String) {
      throw new Error("Value is not a string");
    }
    let parts = value.split(" ");
    this.firstName = parts[0];
    this.lastName = parts[1];
  },
};

try {
  person.fullName = true;
} catch (e) {
  alert(e);
}

let arr = [1, 2, 3, 4, 5];
let total = 0;
for (let i of arr) {
  total += i;
}
console.log(total);
let totalSum = arr.reduce(
  (accumulator, currrentValue) => accumulator + currrentValue,
  0
);
console.log(totalSum);
