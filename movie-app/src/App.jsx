import { useState, useEffect, useRef } from "react";
import "./scss/App.scss";

import Button from "./components/Button";

function App() {
  const [count, setCount] = useState(0);

  useEffect(() => {
    console.log("aaa");
  }, []);

  const buttonRef = useRef();

  const inputRef = useRef();
  const inputChangeTest = () => {
    console.log(inputRef.current.value);
  };


  return (
    <>
      <p>
        count : {count}
      </p>
    
      <Button btnRef={buttonRef} text="Click" buttonClickEvent={() => setCount(cnt => cnt+1)} /> {/* 해당부분 추가 */}

      <hr />

      <input type="text" ref={inputRef} onChange={inputChangeTest} placeholder="User Name" />
    </>
  );
}

export default App;
