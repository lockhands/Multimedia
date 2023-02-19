import React from "react";

import { Button, Typography } from "@mui/material";
import '../../styles/Trabajador/Pedidos.css';
import { ReactComponent as Food2 } from "../../assets/icons/Home.svg";
import { useNavigate } from "react-router-dom";

function PedidosWorkers(){

   const navigate = useNavigate();

    return(
        <div>
            <div>
            <div className="aview-tickets-main">
     
  
            <Typography variant="h5"  sx={{color:'white', paddingLeft: '5%'}}>Pedidos </Typography>
            <Button variant="contained" onClick={ () => navigate("Scanner")}>Escanear
    </Button>
            </div>

           
            <div className="aview-tickets">
                       
                        <div className="acontainer-contorno-aviso">
                        <Typography variant="h5" sx={{color:'white'}}>Pedidos pendientes:</Typography>
                        <div>

                            {
                                //Aqui vienen las cards
                            }
                             </div>
                             
                        </div>
            </div>
        </div>

        </div>
    );
}

export default PedidosWorkers