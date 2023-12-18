import { useState } from "react";
import "./App.css";

const App = () => {
  const [open, setOpen] = useState(false);
  return (
    <div>
      <button
        className={`claw ${open ? "close" : "open"}`}
        onClick={() => setOpen(!open)}
      ></button>
      <div className={`sidebar ${open ? "show" : undefined}`}>
        <h2>sidebar</h2>
      </div>
    </div>
  );
};
export default App;
