// document.addEventListener("click", function () {
//   console.log("I have clicked the document");
// });

// function eventFunction() {
//   //method 2
//   console.log("I have clicked the document");
// }
// document.addEventListener("click", eventFunction);
// // removing event listener only this method works
// document.removeEventListener("click", eventFunction);

// function eventFunction() {
//   console.log("I have clicked the document");
// }
// const content = document.querySelector("#wrapper");
// content.addEventListener("click", function (babbar) {
//   console.log(babbar);
// });

// let links = document.querySelectorAll("a");
// let thirdLink = links[2];
// thirdLink.addEventListener("click", function (e) {
//   e.preventDefault();
//   console.log("I have clicked the link");
// });

// let mydiv = document.createElement("div");
// function paraStatus(event) {
//   console.log(event.target.textContent);
// }
// mydiv.addEventListener("click", paraStatus);
// for (let i = 1; i <= 100; i++) {
//   let newElement = document.createElement("p");
//   newElement.textContent = "This is paragraph" + i;
//   mydiv.appendChild(newElement);
// }
// document.body.appendChild(mydiv);

let element = document.querySelector("#wrapper");
element.addEventListener("click", function (event) {
  if (event.target.nodeName === "SPAN") {
    console.log("span pr click kiya hai" + event.target.textContent);
  }
});
