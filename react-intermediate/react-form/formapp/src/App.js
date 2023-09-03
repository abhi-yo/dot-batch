import logo from "./logo.svg";
import "./App.css";
import { useState } from "react";

function App() {
  // const [firstName, setFirstName] = useState("");
  // const [lastName, setLastName] = useState("");

  // console.log(firstName);
  // console.log(lastName);

  // function changeFirstNameHandler(e) {
  //   // console.log(e.target.value);
  //   setFirstName(e.target.value);
  // }
  // function changeLastNameHandler(e) {
  //   // console.log(e.target.value);
  //   setLastName(e.target.value);
  // }

  // with the help of object we will handle the state
  const [formData, setFormData] = useState({
    firstName: "",
    lastName: "",
    email: "",
    comments: "",
    check: false,
    mode: "",
    favCar: "",
  });
  console.log(formData);
  function changeHandler(e) {
    const { name, value, checked, type } = e.target;
    setFormData((prevFormData) => {
      return {
        ...prevFormData,
        // [e.target.name]: e.target.value,
        [name]: type === "checkbox" ? checked : value,
      };
    });
  }
  function submitHandler(e) {
    e.preventDefault();
    // print the form data
    console.log(formData);
  }
  return (
    <div className="App">
      <form onSubmit={submitHandler}>
        <br />
        <br />
        <input
          type="text"
          placeholder="first name"
          onChange={changeHandler}
          name="firstName"
          value={formData.firstName}
        />
        <br />
        <br />
        <input
          type="text"
          placeholder="last name"
          onChange={changeHandler}
          name="lastName"
          value={formData.lastName}
        />
        <br />
        <br />
        <input
          type="email"
          placeholder="enter your email"
          onChange={changeHandler}
          name="email"
          value={formData.email}
        />
        <br />
        <br />
        <textarea
          placeholder="enter your comments here"
          onChange={changeHandler}
          name="comments"
          value={formData.comments}
        />
        <br />
        <br />
        <input
          type="checkbox"
          onChange={changeHandler}
          name="check"
          id="check"
          checked={formData.check}
        />{" "}
        <label htmlFor="check">Am I visible?</label>
        <br />
        <br />
        <input
          type="radio"
          onChange={changeHandler}
          name="mode"
          value="Online-Mode"
          id="Online-Mode"
          checked={formData.mode === "Online-Mode"}
        />
        <label htmlFor="Online-Mode">Online Mode</label>
        <input
          type="radio"
          onChange={changeHandler}
          name="mode"
          value="Offline-Mode"
          id="Offline-Mode"
          checked={formData.mode === "Offline-Mode"}
        />
        <label htmlFor="Offline-Mode">Offline Mode</label>
        <br />
        <br />
        <label htmlFor="favCar">Tell me your favourite car ?</label>
        <select
          name="favCar"
          id="favCar"
          value={formData.favCar}
          onChange={changeHandler}
        >
          <option value="swift">Swift</option>
          <option value="alto">Alto</option>
          <option value="gwagon">GWagon</option>
        </select>
        <br />
        <br />
        <button>Submit</button>
      </form>
    </div>
  );
}

export default App;
