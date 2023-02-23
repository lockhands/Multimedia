import React from "react";
import Layout from "../../components/molecules/Layout";
import { Button, Typography } from "@mui/material";
import Scanner from "../../components/Scanner";
function PedidosScan(){
    return(
        


        <div>
            
        <div className='container-layout'>
     
     
     <Layout nombre="Zona de despacho" link="/dashboard/HomeWorker/validate-boletos" />

     </div>

            <Scanner direccion={"/dashboard/HomeWorker/validate-boletos"} />

            <div className="view-tickets">
                        <div className="container-contorno-aviso">
                            <Typography variant="h5" sx={{color:'white'}}>¡Se ha escaneado la compra!</Typography>
                            <Button variant="contained" sx={{backgroundColor:'#395CEA'}} onClick={() => navigate("info")} >Ok</Button>
                            
                </div>
            </div>

        </div>
  
    )
}

export default PedidosScan;

