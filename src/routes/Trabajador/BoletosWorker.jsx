import React from "react";
import { Button, Typography } from "@mui/material";
import { useNavigate } from "react-router-dom";

import '../../styles/Trabajador/Scan.css';
import Layout from "../../components/molecules/Layout";

function BoletosWorker(){
    const navigate=useNavigate();
    return(
        <div>
            <Layout nombre="Zona de control" />
            <div hidden={true} >
                <div className="container-contorno-aviso">
                    <Typography variant="h5" >¡Se ha escaneado la compra!</Typography>
                    <Button variant="contained"  onClick={() => navigate("info")} >Ok</Button>
                </div>
            </div>
        </div>
    )
}

export default BoletosWorker;