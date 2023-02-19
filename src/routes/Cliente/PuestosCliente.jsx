import React from "react";
import { Typography } from "@mui/material";
import Layout from "../../components/molecules/Layout";
import Pantalla from './Pantalla.png';
import '../../styles/Puestos/puestos.css';

function PuestosCliente() {
    const array1=[];
    const array2=[];
    for(let i=1;i<=30;i++) array1.push(i);
    for(let i=31;i<=60;i++) array2.push(i);

    console.log(array2);
    return(
        <div class="Main">
           
           <Layout nombre="Boletos" link="/cliente/tickets" />

        <div className="puesto-tickets">

        <div className="puesto-lobo">

            <Typography sx={{color:'white'}}>
                Escanéalo
            </Typography>
        
            <div className="puesto-oso">
                <img src={Pantalla}>
                
                </img>
            </div>

            <div className="puestos-container">
                <div className="puestos-container-1">  
                    {
                    array1.map( el => (
                        <div key={el.value} className="listop">
                            <Typography xs={{color:'white'}}>{el}</Typography>
                        </div>
                    ))
                    } 
                
                </div>
                <div className="puestos-container-2"> 
                {/*
                    array2.map( el => (
                        <div key={el.value} className="listop">
                            <Typography xs={{color:'white'}}>{el}</Typography>
                        </div>
                    ))
                    */
                     } 
                      </div>
            </div>
        </div>
      
            
</div>
        </div>
    )
}

export default PuestosCliente;