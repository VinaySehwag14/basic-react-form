import { useState } from "react";
import "./app.css";
import AddUser from "./Components/Users/AddUser";
import UsersList from "./Components/Users/UsersList";
// import DialogBox from "./Components/dialogbox/DialogBox";
// import Main from "./Components/main/Main";
function App() {
  const [usersList, setUsersList] = useState([]);

  const addUserHandler = (uName, uAge) => {
    setUsersList((prevUsersList) => {
      return [
        ...prevUsersList,
        { name: uName, age: uAge, id: Math.random().toString() },
      ];
    });
  };

  return (
    <div>
      <AddUser onAddUser={addUserHandler} />
      <UsersList users={usersList} />

      {/* <Main /> */}
      {/* <DialogBox /> */}
    </div>
  );
}

export default App;
