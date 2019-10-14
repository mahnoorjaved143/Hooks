import React from 'react';
import logo from './logo.svg';
import './App.css';

import HookUseEffect from "./components/HookUseEffect"
import HookCounter from "./components/HookCounter"
import HookClassCounter2 from "./components/HookClassCounter2"
import HookCounter3 from "./components/HookCounter3"
import HookCounterFour from "./components/HookCounterFour"



// HOW TO USE HOOKD WITH USESTATE AND USE EFFECT
function App() {
  return (
    <div className="App">
     <HookUseEffect></HookUseEffect>
      <br></br>
      <HookCounter></HookCounter>
      <br></br>
      <HookClassCounter2></HookClassCounter2>
      <br></br>
      <HookCounter3></HookCounter3>
      <br></br>
      <HookCounterFour></HookCounterFour>
   
    </div>
  );
}

export default App;
