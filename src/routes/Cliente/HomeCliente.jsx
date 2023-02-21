import React from 'react'
import { css } from '@emotion/react'
import {Paper, Box, Card, Typography,CardContent,CardActions,Button,Grid} from '@mui/material';
import '../../styles/styles.css';
import '../../styles/card.css'
import AssignmentIcon from '@mui/icons-material/Assignment';
import ShoppingCartIcon from '@mui/icons-material/ShoppingCart';
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

  
  <div className="recuadro">
  
      <div className="card">
        <div className="card-container-1">
            <div className="card-container-1-1">
                a
            </div>
            <div className="card-container-1-2">
<Typography>Tickets</Typography>
<Typography>Bs. 100,0</Typography>
            </div>
            <div className="card-container-1-2">
<Typography>No. Factura</Typography>
<Typography>KFF5TZS</Typography>
            </div>
        </div>
        <div className="card-container-3">
            <div className="card-container-1-2-1">
            <Typography>Método de pago</Typography>
<Typography>Efectivo</Typography>
            </div>
            <div className="card-container-1-2-1">
            <Typography>1 febrero, 2023</Typography>
<Typography>01:41 pm</Typography>
            </div>
        </div>
        <div className="card-container-2">
        <Typography>Ver más</Typography>
        <Typography>01:41 pm</Typography>
        </div>
</div>
   
</div>

</div>
    );
}

export default HomeCliente;
