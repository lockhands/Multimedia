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

            <div className="puesto-container-header">

            
            <Typography variant="h6" sx={{color:'white'}}>
               
            </Typography>
            </div>
            <div className="puesto-oso">
                <img src={Pantalla}>
                
                </img>
            </div>

            <div className="puestos-container-c">
                <div className="puestos-container-1">  
                    {
                    array1.map( el => (
                        <div key={el} id={`div-${el}`} className="listop">
                            <Typography xs={{color:'white'}}></Typography>
                        </div>
                    ))
                    } 
                
                </div>
                <div className="puestos-container-2"> 
                {
                    array2.map( el => (
                        <div key={el.value} id={`div-${el}`} className="listop">
                            <Typography xs={{color:'white'}}></Typography>
                        </div>
                    ))
                    
                     } 
                      </div>
                      
            </div>

            <div className="puesto-container-label">
                <div className="puesto-container-label-1">
                    <div className="puesto-container-label-1-item"></div>
                    <Typography sx={{color:'#FF8308'}}>Puestos elegidos</Typography>
                </div>
            </div>
            
        </div>
      
         
</div>
        </div>
    )
}

export default PuestosCliente;