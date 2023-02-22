import React from 'react'
import {  Button,css,Typography } from '@mui/material';
import { useNavigate } from 'react-router-dom';

import {ReactComponent as Food2} from '../../assets/icons/Food2.svg';
import {ReactComponent as Ticket} from '../../assets/icons/Ticket3.svg';

import '../../styles/Trabajador/home.css';

function HomeWorker() {

  const navigate=useNavigate();

  return (
    
    <div
      css={css`          
          @media (min-width: 800px) {
            .phone {
              display:none;
            } 
          }
      `}
      className='home-worker'
    >
      
      <div className='home-worker-topside'>
        <div className='home-worker-main phone'>
          <Typography variant="h4" sx={{color:'white'}}>Cines Unidos</Typography>
          <hr/>
        </div>
        <div className='main-dates-propio'>
        </div>

        <div
          className='phone'
          css={css`
            background-color: #1D2334;
            display: flex;
            flex-direction: column;
            border: solid 1.5px #395CEA;
            border-radius: 5%;
            align-items: center;
            align-self: stretch;
            margin: 1rem min(5%,5rem);
            color:white;
            padding:2rem;

            h4 , h5 , span {
              margin-top:0.5rem;
            }



          `}
        >
            <Typography variant="h4" >¡Bienvenida!</Typography>
            <Typography variant="h5" >Dahyana Nimo</Typography>
            <Typography variant="outlined" >V-123.456.789</Typography>

        </div>

      </div>




      <div className='main-buttons'>
        <Button 
          startIcon={<Ticket />}
          variant="contained" 
          onClick={() => navigate("validate-boletos/info")}
        >
          <Typography variant="buttontext" >Procesar Boletos</Typography>
        </Button>
        <Button
          startIcon={<Food2 />}
          variant="contained"
          onClick={() => navigate("Pedidos") }
        >
            <Typography variant="buttontext" >Procesar Pedidos</Typography>
        </Button>
      </div>
    </div>
  )
}

export default HomeWorker