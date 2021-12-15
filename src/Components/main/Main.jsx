import "./main.css";

const Main = () => {
  return (
    <div className="main">
      <form>
        <label htmlFor="username">Username</label>
        <input
          className="input"
          type="text"
          id="username"
          placeholder="Name..."
        />
        <label htmlFor="age">Age(years):</label>
        <input className="input" type="text" id="age" placeholder="Age..." />
        <button type="submit" value="Submit">
          Add User
        </button>
      </form>
    </div>
  );
};

export default Main;
