// console.log("Hello World!   ");

// let lastName = "Singh";

// let firstName = new String("Akshat");

// let message = `Hello ${lastName},

// Thanks for helping me with the assignment.

// Regards,
// Singh
// `;
// console.log(message);
// let words = message.split(" ");

// console.log(words);

// let date = new Date();
// console.log(date);

// let date1 = new Date("June 11 2003 11:15");
// console.log(date1);

// let date2 = new Date(2003, 5, 11, 11, 15);
// console.log(date2);

// date2.setFullYear(2004);
// console.log(date2);

// let numbers = [1, 3, 5, 7];
// console.log(numbers);

//end-> push
//begininning-> unshift
//middle-> splice

// Searching
// console.log(numbers);
// console.log(numbers.indexOf(3));
// we want to check  if a number exists in the array or not
// if (numbers.indexOf(3) !== -1) {
//   console.log("Number exists");
// }

// console.log(numbers.includes(3));

// console.log(numbers.indexOf(4, 0));

// let courses = [
//   { no: 1, name: "Akshat" },
//   { no: 2, name: "Piyush" },
// ];
// console.log(courses);

// let course = courses.find(course => course.name === "Kilvish");
// function(course){
//     return course.name === "Akshat";
// }
// console.log(course);

// let num = [1, 2, 3, 4, 5, 6, 7, 8, 9];
// num.pop();// beginning
// num.shift();// end
// num.splice(2, 1);// middle
// console.log(num);

// let numbers = [1, 2, 3, 4, 5, 6, 7, 8, 9];
// let numbers2 = numbers;
// // numbers = [];
// numbers.length = 0;
// console.log(numbers);
// console.log(numbers2);

// let first = [1, 2, 3];
// let second = [4, 5, 6];
// let combined = first.concat(second);
// console.log(combined);

// let sliced = combined.slice(2, 4);
// console.log(sliced);

// let first = [1, 2, 3];
// let second = [4, 5, 6];
// let combined = [...first, "a", ...second, "b", true];
// console.log(combined);

// // copy kese create kare
// let copy = [...combined];
// console.log(copy);

// let arr = [10, 20, 30, 40, 50];
// for (let value of arr) {
//   console.log(value);
// }

// for each loop
// arr.forEach((value) => console.log(value));

// let numbers = [1, 2, 3, 4, 5, 6, 7, 8, 9];
// const joined = numbers.join(",");
// console.log(joined);

// let message = "This is my first message";
// let parts = message.split(" ");
// console.log(parts);

// let numbers = [40, 30, 10, 20, 50];
// console.log(numbers.sort());
// console.log(numbers.reverse());

// let numbers = [7, 8, 9, 10, 11];
// let items = numbers.map(function (value) {
//   return "something" + value;
// });
// console.log(items);

let numbers = [1, 2, -6, -9];
let filtered = numbers.filter((value) => value >= 0);
let items = filtered.map(function (num) {
  return { value: num };
});
console.log(items);
