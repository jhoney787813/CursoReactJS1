import React  from "react";

export default function Saludar(props){
const{userInfo,saludarfn}=props;
const{name="Anonymos",edad=-1}=userInfo;

console.log(props);
console.log(userInfo);

    return(
        // <div>
        //     <h2>Hola,{props.userInfo.name}, tiene {props.userInfo.edad} años y color favorito {props.userInfo.color}</h2>
        // </div>
        <div>
            <button onClick={()=>props.saludarfn(name,edad)}  >Acción Saludar!</button>
        </div>
        
    );
}