import { css } from '@emotion/react'
import React from 'react'
import {  Button,Typography } from '@mui/material';
import '../../styles/styles.css';
import {ReactComponent as Food2} from '../../assets/icons/Food2.svg';
import {ReactComponent as Ticket} from '../../assets/icons/Ticket3.svg';
import { useNavigate } from 'react-router-dom';

function HomeWorker() {

      const navigate=useNavigate();

  return (
    
    <div className='view'>
          <div className='main'>
       
       <Typography variant="h4" sx={{color:'white'}}>Cines Unidos</Typography>
      <hr/>
     </div>
  
      <div className='main-dates'>

       
 
     </div>

    <div className='pato'>
     
         <div className='araña'>
            <Typography variant="h4" sx={{margin:'5%'}}>¡Bienvenida!</Typography>
            <Typography variant="h6" sx={{margin:'5%'}}>Dahyana Nimo</Typography>
            <Typography variant="outlined" sx={{margin:'5%'}}>V-123.456.789</Typography>
         </div>
      

    </div>

    <div className='ardilla'>
    <div className='conejo'>

    
    <Button startIcon={<Ticket />}variant="contained" 
    onClick={() => navigate("validate-boletos")}>
        <Typography variant="buttontext" sx={{marginLeft:'5%'}}>Procesar Boletos</Typography>
    </Button>
    

    
    <Button startIcon={<Food2 />}variant="contained"
    onClick={() => navigate("Pedidos") }>
        <Typography variant="buttontext" sx={{marginLeft:'5%'}}>Procesar Pedidos</Typography>
    </Button>
    

    </div>
    </div>

    </div>
   
  )
}

export default HomeWorker