import { useState } from "react";
import "./scss/App.scss";

import Button from "./components/Button";

function App() {
  const [count, setCount] = useState(0);

  return (
    <>
      <p>
        count : {count}
      </p>
      
      
      <Button /> {/* 해당부분 추가 */}
      <button type="button" onClick={() => setCount(cnt => cnt+1)}>Click</button>
    </>
  );
}

export default App;
