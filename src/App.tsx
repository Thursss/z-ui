import React from 'react';
import Button from './components/Button/index';

function App() {
  const print = () => {
    console.log('index click');
  };
  return (
    <div className="App">
      <main>
        <h1>z-ui</h1>
        <Button onClick={print}>Button</Button>
      </main>
    </div>
  );
}

export default App;
