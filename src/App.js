import React from 'react';
import logo from './logo.svg';
import './App.css';
import Home from './home'

function App() {
  return (
      <div>
        <Home nome="Naruto"  />
        <Home nome="Renato"  />
        <Home nome="Sabrino" />
        <Home nome="Betolino"/>
      </div>
  );
}

export default App;
