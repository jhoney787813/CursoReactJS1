import React from "react";
import styles from "../css/Button.module.css";


export default function SaludoBtn(props)
{
const {nombre,apellidos}=props

return(
<div>
    <p>
        Hola {nombre} {apellidos} commo estas?
    </p>
    <button className={styles.buttonError}>Error</button>
    <br/>
    <button className={styles.buttonSuccess}>Correcto</button>

</div>
);
}

