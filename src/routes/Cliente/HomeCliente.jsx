import React from 'react'
import { css } from '@emotion/react'
import {Paper, Box, Card, Typography,CardContent,CardActions,Button,Grid} from '@mui/material';
import '../../styles/styles.css';

const bull = (
    <Box
      component="span"
      sx={{ display: 'inline-block', mx: '2px', transform: 'scale(0.8)' }}
    >
      
    </Box>
  );
  


function HomeCliente (){
    return(
            
    <div className='view'>

      <div className='main'>
       
         <h4>CINES UNIDOS</h4>
        <hr/>
       </div>
    
        <div className='main-dates'>

          <div className='main-dates-1'>
            <Typography   variant="h5" component="div">
          Ultimos recibos
            </Typography>
          </div>

          <div className='main-dates-1'>
          <Typography variant="h6" component="div">
          Febrero, 2023
     </Typography>
          </div>
   
    </div>

    <Grid container justifyContent="flex-start" sx={{ml:'30%'}}>
    
    </Grid>
   

    









            </div>
    );
}

export default HomeCliente;
