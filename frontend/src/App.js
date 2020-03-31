import React, { useState } from 'react';
import Header from './Header';
import Logon from './pages/Logon';
import './global.css';

function App() {
  const [counter, setCounter] = useState(0);

  function increment() {
    setCounter(counter + 1);
  }

  return (
    <div>
      <Header title="Be THE Hero">frontend {counter}</Header>
      <button onClick={increment}>Add to</button>
      <Logon />
    </div>
  );
}

export default App;
