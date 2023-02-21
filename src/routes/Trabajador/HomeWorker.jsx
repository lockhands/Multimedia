import React from 'react'
import {  Button,Typography } from '@mui/material';
import '../../styles/Trabajador/home.css';
import {ReactComponent as Food2} from '../../assets/icons/Food2.svg';
import {ReactComponent as Ticket} from '../../assets/icons/Ticket3.svg';
import { useNavigate } from 'react-router-dom';

function HomeWorker() {

  const navigate=useNavigate();

  return (
    
    <div className='home-worker'>

      <div className='home-worker-topside'>
        <div className='home-worker-main'>
          <Typography variant="h4" sx={{color:'white'}}>Cines Unidos</Typography>
          <hr/>
        </div>
        <div className='main-dates-propio'>
        </div>

        <div className='welcome-message'>
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