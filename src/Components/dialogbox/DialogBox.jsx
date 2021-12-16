import "./dialogbox.css";

const DialogBox = () => {
  return (
    <div className="dialogBox">
      <div className="dialogBox__header">
        <h1>Invalid input</h1>
      </div>
      <div className="dialogBox__body">
        <p>Please enter a valid name and age (non-empty values)</p>
        <button>Okay</button>
      </div>
    </div>
  );
};

export default DialogBox;
