import './App.css';
import freeCodeCampLogo from './img/freecodecamp-logo.png'
import Boton from './components/Boton';
import Pantalla from './components/Pantalla';
import BotonClear from './components/BotonClear';
import { useState } from 'react';
import { evaluate } from 'mathjs';



function App() {

  const [input, setInput] = useState('')

  const  agregarInput = (val) =>{
    setInput(input + val);
  };

  const borrarPantalla = (e) =>{
    setInput('')
  };
  
  const calcularResultado = () => {
    if(input){
      setInput(evaluate(input));
    }else{
      alert("Por favor ingrese valores")
    }
    
  };

  return (
    <div className="App">
      <div className='logo-contenedor'>
        <img className='freeCodeCamp-logo' src={freeCodeCampLogo} alt='Logo de FreeCodeCamp'/>
      </div>
      <div className='contenedor-calculadora'>
      <Pantalla input={input}/>
        <div className='fila'>
          <Boton manejarclick={agregarInput}>1</Boton>
          <Boton manejarclick={agregarInput}>2</Boton>
          <Boton manejarclick={agregarInput}>3</Boton>
          <Boton manejarclick={agregarInput}>+</Boton>
        </div>
        <div className='fila'>
          <Boton manejarclick={agregarInput}>4</Boton>
          <Boton manejarclick={agregarInput}>5</Boton>
          <Boton manejarclick={agregarInput}>6</Boton>
          <Boton manejarclick={agregarInput}>-</Boton>
        </div>
        <div className='fila'>
          <Boton manejarclick={agregarInput}>7</Boton>
          <Boton manejarclick={agregarInput}>8</Boton>
          <Boton manejarclick={agregarInput}>9</Boton>
          <Boton manejarclick={agregarInput}>*</Boton>
        </div>
        <div className='fila'>
          <Boton manejarclick={calcularResultado}>=</Boton>
          <Boton manejarclick={agregarInput}>0</Boton>
          <Boton manejarclick={agregarInput}>.</Boton>
          <Boton manejarclick={agregarInput}>/</Boton>
        </div>
        <div className='fila'>
        <BotonClear manejarPantalla={borrarPantalla}>Clear</BotonClear>
        </div>
      </div>
    </div>
  );
}

export default App;
