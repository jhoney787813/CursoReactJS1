import React from "react";

export default function LayoutBasic(props)
{
    const {children}= props;
    return(
        <div>
            <header>encabezado</header>
            <div>TOP MENU</div>
            <div>{children}</div>
            <footer>pie de pagina</footer>
        </div>
    );
}