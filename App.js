import React, { useState } from 'react';
import './App.css';

function App() {

  const [count, setCount] = useState(0);

  function handleOnChangeEvent(evt) {
    const input = evt.target.value
    setCount(input.length);
  } 

  return (
    <div className="App">
      
      <input style={{margin: "1rem", padding: "1rem"}} type="text" onChange={(evt) => handleOnChangeEvent(evt)} />
      <p style={{ fontSize: "20px" }}>Este texto contem {count ? count : "0" } caracteres </p>


    </div>
  );
}

export default App;

