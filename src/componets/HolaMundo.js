import React from "react";

import PropTypes from "prop-types";

export default function HolaMundo(props)
{

const {data:{nombre,apellidos}}=props;

return(
<><h1>Hola {nombre} {apellidos}!</h1>
<h2>Las mejores..</h2>
</>
);
}

HolaMundo.propTypes={
nombre:PropTypes.string.isRequired,
apellidos:PropTypes.string

}