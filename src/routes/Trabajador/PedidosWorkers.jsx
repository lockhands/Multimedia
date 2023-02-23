import React from "react";

import { Button, css, Typography } from "@mui/material";
import { useNavigate } from "react-router-dom";
import Done from '@mui/icons-material/Done'


import Layout from "../../components/molecules/Layout";
import Pedido from "../../components/molecules/Pedido";
import PedidosList from "../../components/molecules/PedidosList";

import pedidos from "../../data/pedidos";

function PedidosWorkers(){
   const navigate = useNavigate();

    return(
        <div
            css={css`
                button {
                    margin-top: 2.5rem;
                    align-self:center ;
                    padding: 0.8rem 3rem;
                    font-weight: bold;
                    background-color: #FF8308;
                }
                h4 {
                    text-align: center;
                    margin-bottom:1.5rem;
                }
                .content {
                    background-color: #0E1321;
                    padding: 2rem 7%;
                    display: flex;
                    flex-direction: column;
                    justify-content: space-between;
                }
            `}
        >
            <Layout nombre="Pedidos" link="/dashboard/HomeWorker" />
            <div className="content" >
                <div>
                    <Typography variant="h4">Pedidos pendientes:</Typography>
                    <PedidosList>
                        {
                            pedidos.map( (p,idx) => ( 
                                <li key={idx}  ><Pedido imgSource={p.img} name={p.name} /></li>  
                            ))
                        }
                    </PedidosList>

                    
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