import { css } from '@emotion/react'
import React from 'react'
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
  /* </Grid> */
   

    

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
