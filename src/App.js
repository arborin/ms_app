// import styles from './App.module.css';
import { useState } from 'react'

function App() {

  const [counter, setCounter] = useState(0);


  return (
    <div>
      <h1>{counter}</h1>
      <button onClick={() => setCounter(counter + 1)}>Increase</button>
      <button onClick={() => setCounter(counter - 1)}>Decrease</button>
      <button onClick={() => setCounter(0)}>Set To Zero</button>
    </div>
  );
}



export default App;