import { css } from '@emotion/react'
import React from 'react'
import {  Button,Typography } from '@mui/material';
import '../../styles/styles.css';

function HomeWorker() {

      
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
            a
         </div>
      

    </div>

    <div className='ardilla'>
    <div className='conejo'>
        
    <Button variant="contained">
        Procesar Boletos
    </Button>

    <Button variant="contained">
        Procesar Pedidos
    </Button>

    </div>
    </div>

    </div>
   
  )
}

export default HomeWorker