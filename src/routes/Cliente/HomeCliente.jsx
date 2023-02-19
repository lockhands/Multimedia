import { css } from '@emotion/react'
import React from 'react'
import {Paper, Box, Card, Typography,CardContent,CardActions,Button,Grid} from '@mui/material';
import AssignmentIcon from '@mui/icons-material/Assignment';
import ShoppingCartIcon from '@mui/icons-material/ShoppingCart';


import './css/card.css'

const bull = (
    <Box
      component="span"
      sx={{ display: 'inline-block', mx: '2px', transform: 'scale(0.8)' }}
    >
      •
    </Box>
  );
  


function HomeCliente (){
    return(
            <div
            css={css`
            display: grid;
            place-items: center;
                align-items:center;
                height:50vh;
                text-align: center;
            `}
            >

<div css={css`
            display: grid;
            place-items: center;
            text-align: center;
            width: 75%;
            max-width: 300px; 
        `}>
        <h4>CINES UNIDOS</h4>
        <hr css={css`
            width: 100%;
            max-width: 300px; 
        `} />
    </div>
    
    <Grid container justifyContent="flex-start" sx={{ml:'10%'}}>
    <Typography variant="h5" component="div">
          Ultimos recibos
        </Typography>
    </Grid>

    <Grid container justifyContent="flex-start" sx={{ml:'30%'}}>
    <Typography variant="h5" component="div">
          Febrero, 2023
        </Typography>
    </Grid>

    <div className="container">
        
        <div className="card1">
          <div className="div1">
            <div className="icono">
              <AssignmentIcon className="icono1" /* sx={{ color: '#FF8308',height: '50px',width: '50px',position: 'absolute', left: '45px',top: '35px', }} */ />
            </div>
            <div className="tipotike">

              <h4>tickes</h4>
              <p>Bs. 100</p>

            </div>
            <div className="metodo">

              <h4>metodo de pago</h4>
              <p>efectivo</p>

            </div>

          </div>
          <div className="div2">
            <h4>No factura</h4>
            <p>KFF5TZS</p>
            <h4>1 febrero, 2023</h4>
            <p>01:41 pm</p>
            <div className="a1">
              <a href="#">Ver Mas</a>
            </div>
          </div>
        </div>




        <div className="card1">
          <div className="div1">
            <div className="icono">
              <ShoppingCartIcon className="icono1" /* sx={{ color: '#FF8308',height: '50px',width: '50px',position: 'absolute', left: '45px',top: '35px', }} */  />
            </div>
            <div className="tipotike">

              <h4>pedidos</h4>
              <p>Bs. 100</p>

            </div>
            <div className="metodo">

              <h4>metodo de pago</h4>
              <p>efectivo</p>

            </div>

          </div>
          <div className="div2">
            <h4>No factura</h4>
            <p>AUEQK35S</p>
            <h4>2 febrero, 2023</h4>
            <p>05:41 pm</p>
            <div className="a1">
              <a href="#">Ver Mas</a>
            </div>
          </div>
        </div>  

      </div>

      
      </div>
    );
}

export default HomeCliente;
