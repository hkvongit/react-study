import React from 'react';
import './App.css';
import Commentary from './components/Commentary'
import cards from './components/cards';
import Cards from "./components/cards"

function App() {
  return (
    <div className="App">
      <Cards
        name="hari"
        time="9 pm Today"
        comment="hai this is hari"
      />
    </div>
  );
}

export default App;
