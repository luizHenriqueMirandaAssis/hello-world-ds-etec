import React from 'react';
import logo from './logo.svg';
import './App.css';
import HelloWorld from './HelloWorld'
import HelloWorldWithProps from './HelloWorldWithProps'
import HelloWorldWithState from './HelloWorldWithState'
import Contador from './Contador'
import Somar from './Somar'

function App() {
  return (
      <div>       
          {/* <h1>Hello World Padrão</h1>
          <HelloWorld/>

          <h1>Hello World Com Props (Propriedades)</h1>
          <HelloWorldWithProps name="Aula" message="Muito Boa!!"/>

          <h1>Hello World Com State</h1>
          <HelloWorldWithState name="Aula" message="Boa Noite"/>         */}

          {/* <h1>Contador</h1>
          <Contador/> */}

          <h1>Somar</h1>
          <Somar/>
      </div>
  );
}

export default App;
