import { useRef, useState } from "react";
import "./main.css";

const Main = () => {
  const [name, setName] = useState("");
  const [age, setAge] = useState("");

  const inputName = useRef(null);

  const onButtonClick = (e) => {
    e.preventDefault();
    setName(inputName.current.value);
    console.log("setBan", setName(inputName.current.value));
    console.log(inputName.current.value);
  };
  return (
    <div className="main">
      <form>
        <label htmlFor="username">Username</label>
        <input
          className="input"
          type="text"
          id="username"
          placeholder="Name..."
          ref={inputName}
        />
        <label htmlFor="age">Age(years):</label>
        <input className="input" type="text" id="age" placeholder="Age..." />
        <button
          onClick={inputName}
          onClick={onButtonClick}
          type="submit"
          value="Submit"
        >
          Add User
        </button>
      </form>
    </div>
  );
};

export default Main;
