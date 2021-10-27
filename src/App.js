import logo from './logo.svg';
import './App.css';
import { useState } from 'react';
import Users from './components/Users/Users';

function App() {
  const [familiar, setFamiliar] = useState(false);
  return (
    <div className="App">
      <h2>Is Familiar: {familiar.toString()}</h2>
      <button onClick={()=>setFamiliar(!familiar)}>Toggle Friend</button>
      <Users familiar = {familiar}></Users>
    </div>
  );
}

export default App;
