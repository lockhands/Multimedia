import React from "react";
import '../../styles/tickets/estilos.css';
import { Button, Typography } from "@mui/material";
import ArrowBackIcon from '@mui/icons-material/ArrowBack';
import { Link } from "react-router-dom";
import { Box } from "@mui/system";
import Layout from "../../components/molecules/Layout";


function CodigoQRBoletos () {

    return(
        <div class="Main">
           
           <Layout nombre="Boletos" link="/cliente/tickets" />

        <div className="view-tickets">

        <div className="lobo">

            <Typography sx={{color:'white'}}>
                Escanéalo
            </Typography>
        
            <div className="oso">
                <img src={`https://upload.wikimedia.org/wikipedia/commons/d/d7/Commons_QR_code.png`}>
                </img>
            </div>
        </div>
            
</div>
        </div>
    )
}

export default CodigoQRBoletos;