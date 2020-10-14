import React from 'react';
import logo from './logo.svg';
import './App.css';
import HolaMundo from "./componets/HolaMundo";
import AdiosMundo from "./componets/AdiosMundo";
import Saludar from "./componets/Saludar";
import SaludoBtn from "./componets/SaludoBtn";
import Despedirse from "./componets/Despedirse/Despedirse"
import Componente  from "./componets/Componente/Componente"
import LayoutBasic from "./componets/LayoutBasic"
import Car from "./componets/Car"
import CarObjState from "./componets/CarObjState"


function App() {
const UserName="pepe";
const edad="2";

const saludouser={ 
  nombre:"jhon",
 apellido:"hincapie"
};


const user={
   name:"userio de prueba 1",
  edad:12,
  color:"blue"
}

const saludarfn =(name,edad)=>{

  // console.log("hizo click! "+name + " y su edad es: "+edad);
  console.log(`hizo click! ${name} + " y su edad es: ${edad}`);
};


const data=
{
  nombre:"CARLOS ",
  apellidos:"Aguirre"
}

  return (
    <div className="App">
      <header className="App-header">
        <img src={logo} className="App-logo" alt="logo" /> 
        <p>
                 Jhon Edison Hincapié García, MI PRIMERA APP
        </p>
        <br/>
                {/* <HolaMundo></HolaMundo>
                <AdiosMundo></AdiosMundo> 
                <Saludar  name={UserName} edad={edad} ></Saludar>
                <Saludar  userInfo={user}  saludarfn={saludarfn} ></Saludar>
                <SaludoBtn nombre={saludouser.nombre} apellidos={saludouser.apellido}></SaludoBtn>
                <Despedirse></Despedirse>
                <HolaMundo data={data} ></HolaMundo>
                <Componente data={data}></Componente>

              <LayoutBasic>
                <h1>APP COMPONET LAYOUT</h1>
                <Componente data={data}></Componente>
                <button>Enviar</button>
              </LayoutBasic>*/}

              {/*componente hook estate */}
              {/*<Car></Car> */} 
              {/*COMPONENTE STATE TIPO OBJETOS*/}
                {/* <CarObjState></CarObjState> */}

          {/* 
             <p className="nombre">hola</p>
        <a className="App-link"
          href="https://reactjs.org"
          target="_blank"
          rel="noopener noreferrer">
          Learn React
        </a>  */}
      </header>
    </div>
  );
}


export default App;
