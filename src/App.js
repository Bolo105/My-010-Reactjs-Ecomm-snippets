import React from 'react'
import './App.css';
import EcommBase03 from './components/EcommBase03';
import { Products001 } from './components/Products001';
import EcommBase02 from './components/EcommBase02';
import EcommBase01 from './components/EcommBase01';


function App() {
  return (
    <div className="App">
      <Products001 />
      <EcommBase01 />
      <EcommBase02 />
      <EcommBase03 />
    </div>
  );
}

export default App;
