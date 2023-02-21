import React from "react";

import { Button, Typography } from "@mui/material";
import { useNavigate } from "react-router-dom";

import '../../styles/Trabajador/Pedidos.css';

import pedidoPhoto from '../../assets/pedido.webp'

import Done from '@mui/icons-material/Done'

import Layout from "../../components/molecules/Layout";
import Pedido from "../../components/molecules/Pedido";

function PedidosWorkers(){
   const navigate = useNavigate();

    return(
        <div className="pedidos-pendientes" >
            <Layout nombre="Pedidos" link="/dashboard/HomeWorker" />
            <div className="content" >
                <div>
                    <Typography variant="h4" sx={{color:'white'}}>Pedidos pendientes:</Typography>
                    <ul  className="pedidos-list">
                        <Pedido />
                        <Pedido />
                    </ul>
                </div>
                <Button 
                    startIcon={<Done />}
                    variant="contained" 
                    onClick={() => navigate("/dashboard/HomeWorker/ordenes")}
                >
                    <Typography variant="buttontext" >Escanear Pedido</Typography>
                </Button>
            </div>
        </div>
    )
}

export default PedidosWorkers