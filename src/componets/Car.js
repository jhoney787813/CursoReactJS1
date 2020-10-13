import React,{useState} from "react";

export default function Car()
{
    const[started,setStarted]=useState(false);
    const[countKm,setCountKm]=useState(0);
    const checkStatedCar=()=>
    {
        if(started)
        {
            return <span style={{color:"green"}}>Encendido</span> ;
        }
        return <span style={{color:"red"}}> Apagado</span>;

    };

    const incrementKm=(num)=>
    {

        if(started)
        {
            setCountKm(countKm+num);
        }
        else
        {
                alert("No se puede aumentar KM, con el coche apagado.");
        }
    };

    return(
        <div>
            <h2>El coche esta: {checkStatedCar()} </h2>
            <h1>Kilometros recorridos: {countKm} </h1>
            <button onClick={()=>{setStarted(!started)}}>Encender / Apagar</button>
            <br/>
            <button  onClick={()=>{incrementKm(1)}}>Aumentar km</button>
        </div>
    );
}