import "./main.css";

const Main = () => {
  return (
    <div className="main">
      <form>
        <label htmlFor="username">Username</label>
        <input type="text" id="username" placeholder="Name..." />
        <label htmlFor="age">Age(years):</label>
        <input type="text" id="age" placeholder="Age..." />
        <input type="submit" value="Submit" />
      </form>
    </div>
  );
};

export default Main;
