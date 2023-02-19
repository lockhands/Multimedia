import { css } from '@emotion/react'
import React from 'react'
import {  Button } from '@mui/material';

function HomeWorker() {

      
  return (
    
    <div>
          <div className='main'>
       
       <Typography variant="h4" sx={{color:'white'}}>Cines Unidos</Typography>
      <hr/>
     </div>
  
      <div className='main-dates'>

        <div className='main-dates-1'>
          <Typography   variant="h5" component="div">
        Ultimos recibos
          </Typography>
        </div>

        <div className='main-dates-1'>
        <Typography variant="subtitle1" sx={{color:'#7BD7B8',marginTop:'2%',marginLeft:'10%'}}component="div">
        Febrero, 2023
   </Typography>
        </div>
 
    </div>
      
    </div>
   
  )
}

export default HomeWorker