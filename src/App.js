import React from 'react';
import './App.css';

function App() {
  const myFunction = async () => {
    try {
      const response = await fetch('https://pokeapi.co/api/v2/pokemon/ditto');
      const data = await response.json();
      console.log('API Data:', data);
    } catch (error) {
      console.error('Error calling API:', error);
    }
  };

  return (
    <div className="App">
      <header className="App-header">
        <p>Hello World</p>
        <button onClick={myFunction}>Go to API</button>
      </header>
    </div>
  );
}

export default App;




