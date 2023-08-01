// console.log("hello world");

// setTimeout(function () {
//   console.log("third");
// }, 3000);
// function sync() {
//   console.log("first");
// }
// sync();
// console.log("second");

// let meraPromise1 = new Promise(function (resolve, reject) {
//   setTimeout(function () {
//     console.log("I am inside promise1");
//   }, 5000);
//   // resolve(2233);
//   reject(new Error("I am inside reject"));
// });
// meraPromise1.then((value) => {
//   console.log(value);
// });
// meraPromise1.catch((error) => {
//   console.log("Recieved an error");
// });

// let meraPromise2 = new Promise(function (resolve, reject) {
//   setTimeout(function () {
//     console.log("I am inside promise2");
//   }, 3000);
//   // resolve(2233);
//   // reject(new Error("I am inside reject"));
// });

// console.log("Pehla");

// let waada1 = new Promise(function (resolve, reject) {
//   setTimeout(() => {
//     console.log("settimeout1 started");
//   }, 2000);
//   resolve(true);
// });

// let output = waada1.then(() => {
//   let waada2 = new Promise(function (resolve, reject) {
//     setTimeout(() => {
//       console.log("settimeout2 started");
//     }, 3000);
//     resolve("waada 2 resolved");
//   });
//   return waada2;
// });
// output.then((value) => console.log(value));

// async function abcd() {
//   return 7;
// }
// console.log(abcd());

// async function utility() {
//   let delhiMausam = new Promise(function (resolve, reject) {
//     setTimeout(() => {
//       resolve("Delhi ka mausam thanda hai");
//     }, 2000);
//   });

//   let hyderabadMausam = new Promise(function (resolve, reject) {
//     setTimeout(() => {
//       resolve("Hyderabad ka mausam garam hai");
//     }, 3000);
//   });
//   let dM = await delhiMausam;
//   let hM = await hyderabadMausam;
//   return [dM, hM];
// }

// let obj = {
//   heading: "head",
// };
// async function utility() {
//   let content = await fetch("https://jsonplaceholder.typicode.com/posts/1");
//   let output = await content.json();
//   console.log(output);
// }
// utility();

// async function helper() {
//   let options = {
//     method: "POST",
//     body: JSON.stringify({
//       title: "foo",
//       body: "bar",
//       userId: 1,
//       weight: 70,
//     }),
//     headers: {
//       "Content-type": "application/json; charset=UTF-8",
//     },
//   };
//   let content = await fetch(
//     "https://jsonplaceholder.typicode.com/posts",
//     options
//   );
//   let response = content.json();
//   return response;
// }

// async function utility() {
//   let ans = helper();
//   console.log(ans);
// }

// utility();

function init() {
  var name = "abc";
  function sayName() {
    console.log(name);
  }
  sayName();
}
let func1 = init();
func1();
