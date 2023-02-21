import React from "react";
import { Button, Typography } from "@mui/material";
import '../../styles/Trabajador/Scan.css';
import { useNavigate } from "react-router-dom";
function BoletosWorker(){

    const navigate=useNavigate();

    return(
        <div>
            <div className="view-tickets-main">
     
  
            <Typography variant="h5"  sx={{color:'white', paddingLeft: '5%'}}>Boletos</Typography>
            
            </div>

            <div className="view-tickets">
                        <div className="container-contorno-aviso">
                            <Typography variant="h5" sx={{color:'white'}}>¡Se ha escaneado la compra!</Typography>
                            <Button variant="contained" sx={{backgroundColor:'#395CEA'}} onClick={() => navigate("info")} >Ok</Button>
                            
                </div>
            </div>
        </div>
    )
}

export default BoletosWorker;