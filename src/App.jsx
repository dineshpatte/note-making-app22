import { useState } from "react";
import reactLogo from "./assets/react.svg";
import viteLogo from "/vite.svg";
import Note from "./components/note";

function App() {
  const [count, setCount] = useState(0);

  return (
    <>
      <Note />
    </>
  );
}

export default App;
