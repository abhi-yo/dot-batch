function changeButtonText() {
  const button = document.getElementById("myButton");

  if (button.textContent === "Click Me!") {
    button.textContent = "Clicked!";
  } else {
    button.textContent = "Click Me!";
  }
}

const button = document.getElementById("myButton");
button.addEventListener("click", changeButtonText);
