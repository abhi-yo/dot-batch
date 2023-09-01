import logo from "./logo.svg";
import "./App.css";
import { useEffect, useState } from "react";

function App() {
  const [text, setText] = useState("");

  // variation 1 -> every render
  // useEffect(() => {
  //   console.log("Ui rendered");
  // });

  // variation2 -> first render
  // useEffect(() => {
  //   console.log("Ui rendered");
  // }, []);

  // variation3 -> first render and whenever text changes
  // useEffect(() => {
  //   console.log("Change Observed");
  // }, [text]);

  // variation4 -> to handle unmounting of a component
  useEffect(() => {
    console.log("Component mounted");
    return () => {
      console.log("Component unmounted");
    };
  }, [text]);

  function changeHandler(event) {
    console.log(text);
    setText(event.target.value);
  }
  return (
    <div className="App">
      <input type="text" onChange={changeHandler}></input>
    </div>
  );
}

export default App;
