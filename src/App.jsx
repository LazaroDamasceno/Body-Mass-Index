import { useState } from 'react';
import './App.css';
import BMI from './BMI';

function App() {
  const [weight, setWeight] = useState(0);
  const [height, setHeight] = useState(0);

  return (
    <div className="App">
      <form>
        <label>Set a value to weight:</label>
        <br></br>
        <input type="number" value={weight} onChange={(e) => setWeight(e.target.value)} />        
        <br></br>
        <br></br>
        <label>Set a value to height:</label>
        <br></br>
        <input type="number" value={height} onChange={(e) => setHeight(e.target.value)} />
      </form>
      <h1 id="ans">{BMI(weight, height)}</h1>
    </div>
  )
};

export default App
