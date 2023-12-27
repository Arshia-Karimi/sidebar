import { useEffect, useState } from "react";
import "./sidebar.css";

const App = () => {
  const [open, setOpen] = useState(false);

  useEffect(() => {
    const ser = localStorage.getItem("item");
    if (ser) {
      const localButton = JSON.parse(ser);
      setOpen(localButton);
    }
  }, []);

  const openButton = () => {
    const a = !open;
    setOpen(a);
    localStorage.setItem("item", JSON.stringify(a));
  };

  return (
    <div>
      <button
        className={`claw ${open ? "close" : "open"}`}
        onClick={openButton}
      ></button>
      <div className={`sidebar ${open ? "show" : undefined}`}>
        <h2>sidebar</h2>
      </div>
    </div>
  );
};
export default App;
