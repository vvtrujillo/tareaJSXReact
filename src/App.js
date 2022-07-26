import logo from './logo.svg';
import './App.css';
import { Component } from 'react';
import Primero from './Componentes/Primero';


class App extends Component{
  
    render(){
      return(
        <div className='App'>
          <h1>Hola DOJO!</h1>
          <h2>Things I need to do:</h2>
          <Primero></Primero>
        </div>
      )
    }  
}

export default App;
