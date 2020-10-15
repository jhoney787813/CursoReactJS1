import React,{useState,useEffect} from "react";

export default function CarObjState()
{
    // const[started,setStarted]=useState(false);
    // const[countKm,setCountKm]=useState(0);
    const[CarState,setCarState]=useState({
        started:false,
        countKm:0

    })
    const checkStatedCar=()=>
    {
        if(CarState.started)
        {
            return <span style={{color:"green"}}>Encendido</span> ;
        }
        return <span style={{color:"red"}}> Apagado</span>;

    };

    const incrementKm=(num)=>
    {

        if(CarState.started)
        {
            setCarState({
                ...CarState,
                countKm:CarState.countKm+num
            });
        }
        else
        {
                alert("No se puede aumentar KM, con el coche apagado.");
        }
    };

    return(
        <div>
            <h2>El coche esta: {checkStatedCar()} </h2>
             <h1>Kilometros recorridos: {CarState.countKm} </h1> 
            <button onClick={()=>{
                
                setCarState(
                {
                ...CarState,started: !CarState.started
                 })
            
            }}>Encender / Apagar</button>
            <br/>
            <button  onClick={()=>{incrementKm(1)}}>Aumentar km</button> 
            
        </div>
    );
}