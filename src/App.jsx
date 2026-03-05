import EvenOdd from "./Even";
import { useState } from "react";
import Message from "./Message";


function App() {
  const [count, setCount] = useState(0);
  const [count2, setCount2] = useState(0);
  return (
    <div>

      
      <h1>Caleb's Names</h1>
      <Message name="Caleb Kironde: BSIT  YEAR 1"/>
      <Message name="Precious Nekuse: BSIT  YEAR 1"/>
      <Message name="Genevieve Bwayo: BSIT  YEAR 1"/>
      <Message name="Mark Mulyanti Kibombo: BSIT  YEAR 1"/>
      <Message name="Mesh Mugisha: BSIT  YEAR 1"/>


      <h1>Counter: {count}</h1>
      
      <button onClick={() => setCount(count + 1)}>
        Increase
      </button>

      <button onClick={() => setCount(count - 1)}>
        Decrease
      </button>

      <button onClick={() => setCount(0)}>
        Reset
      </button>

      <h1>Counter: {count2}</h1>

      <button onClick={() => setCount2(count2 + 1)}>Increase</button>
      <button onClick={() => setCount2(count2 - 1)}>Decrease</button>

      <EvenOdd number={count2} />

    </div>

    
  );
}

export default App;

