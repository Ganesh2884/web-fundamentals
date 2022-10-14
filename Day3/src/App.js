import './App.css';
import App1 from './Components/app1';
import { useState } from 'react';
const App =() => {
  const [name, setName] = useState("");


  return (
    <div className="App">
      <input onChange={(e) => {
        setName(e.target.value);
      }}/>

      <App1 name={name}/>
    </div>
  );
}


export default App;
