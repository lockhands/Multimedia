import { css } from '@emotion/react'
import React from 'react'
import {Paper, Box, Card, Typography,CardContent,CardActions,Button,Grid} from '@mui/material';
import AssignmentIcon from '@mui/icons-material/Assignment';
import ShoppingCartIcon from '@mui/icons-material/ShoppingCart';

import image1 from './css/combopequeno.jpg'
import image2 from './css/combomediano.jpg'
import image3 from './css/combo2.jpg'
import image4 from './css/megacombo.jpg'
import chocolatesaboy from './css/savoychocos.jpg'

import pelicula1 from './css/huesera.jpg'
import pelicula2 from './css/imagen2.jpg'
import pelicula3 from './css/imagen3.jpg'
import pelicula4 from './css/imagepelicula4.jpg'
/* import imagenwed from 'https://cinecalidad.st/wp-content/uploads/2023/02/eGcpjDqXlMxUTL4OBougtUEEJP6-420x600.jpg' */

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
   

    {/* <Card sx={{ minWidth: 275 }}>
      <CardContent>
        <Typography sx={{ fontSize: 14 }} color="text.secondary" gutterBottom>
          Word of the Day
        </Typography>
        <Typography variant="h5" component="div">
          be{bull}nev{bull}o{bull}lent
        </Typography>
        <Typography sx={{ mb: 1.5 }} color="text.secondary">
          adjective
        </Typography>
        <Typography variant="body2">
          well meaning and kindly.
          <br />
          {'"a benevolent smile"'}
        </Typography>
      </CardContent>
      <CardActions>
        <Button size="small">Learn More</Button>
      </CardActions>
    </Card> */}

    <div class="container">
        
        <div class="card1">
          <div class="div1">
            <div class="icono">
              <AssignmentIcon class="icono1" />
            </div>
            <div class="tipotike">

              <h4>tickes</h4>
              <p>Bs. 100</p>

            </div>
            <div class="metodo">

              <h4>metodo de pago</h4>
              <p>efectivo</p>

            </div>

          </div>
          <div class="div2">
            <h4>No factura</h4>
            <p>KFF5TZS</p>
            <h4>1 febrero, 2023</h4>
            <p>01:41 pm</p>
            <div class="a1">
              <a href="#">Ver Mas</a>
            </div>
          </div>
        </div>




        <div class="card1">
          <div class="div1">
            <div class="icono">
              <ShoppingCartIcon class="icono1" />
            </div>
            <div class="tipotike">

              <h4>pedidos</h4>
              <p>Bs. 100</p>

            </div>
            <div class="metodo">

              <h4>metodo de pago</h4>
              <p>efectivo</p>

            </div>

          </div>
          <div class="div2">
            <h4>No factura</h4>
            <p>AUEQK35S</p>
            <h4>2 febrero, 2023</h4>
            <p>05:41 pm</p>
            <div class="a1">
              <a href="#">Ver Mas</a>
            </div>
          </div>
        </div>  






        {/* <div class="card">

          <img src={image2}></img>
          <h4>combo mediano </h4>
          <p>viene a compañado 1 cotufa de 8 oz mas 2 bebida grande 945 ml</p>
          <a href="#">perdir</a>

        </div> 
        
        
        <div class="card">

          <img src={image3}></img>
          <h4>combo para 2</h4>
          <p>viene a compañado 1 cotufa de 8 oz mas 2 bebida grande 945 ml</p>
          <a href="#">perdir</a>

        </div> 

        <div class="card">

          <img src={image4}></img>
          <h4>combo para 2</h4>
          <p>viene a compañado 1 cotufa de 8 oz mas 2 bebida grande 945 ml</p>
          <a href="#">perdir</a>

        </div> 
        <div class="card">

          <img src={chocolatesaboy}></img>
          <h4>compra 2 llevas 3</h4>
          <p>viene a compañado 1 cotufa de 8 oz mas 2 bebida grande 945 ml</p>
          <a href="#">perdir</a>

        </div> 

        <Grid container justifyContent="flex-start" sx={{ml:'10%'}}>
    <Typography variant="h5" component="div">
          Ultimo en peliculas
        </Typography>
    </Grid>

        <div class="card">

          <img src={pelicula1}></img>
          <h4>huesera</h4>
          <p>	Huesera es una película mexicana dirigida por Michelle Garza Cervera.</p>
          <a href="#">perdir</a>

        </div> 

        <div class="card">

          <img src={pelicula2}></img>
          <h4>Más Muppets que nunca</h4>
          <p>Esta breve serie sin guión presenta personajes icónicos de los Muppets junto a estrellas invitadas </p>
          <a href="#">perdir</a>

        </div> 

        <div class="card">

          <img src={pelicula3}></img>
          <h4>Entre el Amor y la Amistad</h4>
          <p>Entre el Amor y la Amistad Dos mejores amigos, Uche y Toyin, se enamoran de Sunday </p>
          <a href="#">perdir</a>

        </div> <div class="card">

          <img src="https://cinecalidad.st/wp-content/uploads/2023/02/eGcpjDqXlMxUTL4OBougtUEEJP6-420x600.jpg"></img>
          <h4>Embaucadores</h4>
          <p>		
            Entre el Amor y la Amistad Dos mejores amigos, Uche y Toyin, se enamoran de Sunday,</p>
          <a href="#">perdir</a>

        </div> 

        <div class="card">

          <img src={pelicula4}></img>
          <h4>Malcriados</h4>
          <p>		
            Malcriados Francisca ha criado de manera muy sobreprotectora a su hijo Alejandro</p>
          <a href="#">perdir</a>

        </div> 
 */}

      </div>

      
      </div>
    );
}

export default HomeCliente;
