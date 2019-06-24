import React from 'react';
import './App.css';
import Homepage from "./components/homepage";
import ButtNav from "./components/ButtNav";
import Content from "./components/elements/Content"
import NavBar from "./components/elements/NavBar"

function App() {
  return (
    <div className="App">
      Learn
      {/* <Homepage/>
      <NavBar/>
      <Content/> */}
      <ButtNav/>
      
    </div>
  );
}

export default App;
