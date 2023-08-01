// // adding 100 para
// const t1 = performance.now();
// for (let i = 1; i <= 100; i++) {
//   let newElement = document.createElement("p");
//   newElement.textContent = "This is paragraph" + i;
//   document.body.appendChild(newElement);
// }
// const t2 = performance.now();
// console.log(t2 - t1 + "ms");

// // optimizing a bit
// const t3 = performance.now();
// let mydiv = document.createElement("div");

// for (let i = 1; i <= 100; i++) {
//   let newElement = document.createElement("p");
//   newElement.textContent = "This is paragraph" + i;
//   mydiv.appendChild(newElement);
// }

// document.body.appendChild(mydiv);
// const t4 = performance.now();
// console.log(t4 - t3 + "ms");

// const t5 = performance.now();
// let fragment = document.createDocumentFragment();
// for (let i = 1; i <= 10000000000 ; i++) {
//   let newElement = document.createElement("p");
//   newElement.textContent = "This is paragraph" + i;
//   fragment.appendChild(newElement);
// }
// document.body.appendChild(fragment); // 1 reflow , 1 repaint
// const t6 = performance.now();
// console.log(t6 - t5 + "ms");

// function addPara(){
//     let newElement = document.createElement("p");
//     newElement.textContent = "This is paragraph";
//     document.body.appendChild(newElement);
// }
// function appendNewMessage(){
//     let para = document.createElement("p");
//     para.textContent = "This is new message";
//     document.body.appendChild(para);
// }
// addPara();
// appendNewMessage();
