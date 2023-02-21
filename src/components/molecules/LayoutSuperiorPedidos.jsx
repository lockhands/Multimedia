import { Typography } from "@mui/material";
import React from "react";
import '../../styles/styles.css';
import { Link } from "react-router-dom";
function LayoutSuperiorPedidos({nombre}){

    return(
        <div className='Layout-Pedidos'>
            <p className='Layout-Pedidos-text-1'>{nombre}</p>
            <Link to={"qr"}>
            <p className='Layout-Pedidos-text-2'>Codigo QR</p>        
            </Link>
        </div>
    );

}

export default LayoutSuperiorPedidos;