import React from "react";

//import PropTypes from "prop-types";

export default function Componente(props)
{

    const {data:{nombre="Sin nombre",apellidos="Sin apellido"}}=props;

    return(
        <form> 
            <FormInput title="Email" name="Email" type="email" placeholder="Ingrese su email." ></FormInput>
            <br/>
            <FormInput title="Password" name="Password" type="password" placeholder="Ingrese su clave." ></FormInput>
            <br/>
            <FormButtonSend></FormButtonSend>
        </form>
    );


}

function FormInput(props){
    const {title,name,type,placeholder} =props;

    return(    
        <div>
            <label>{title}: </label>
            <input name={name} type={type} placeholder={placeholder}/> 
        </div>
    );
}


function FormButtonSend()
{
return (

<button type="submit">Enviar</button>
);

}




// HolaMundo.propTypes={
// nombre:PropTypes.string.isRequired,
// apellidos:PropTypes.string

// }