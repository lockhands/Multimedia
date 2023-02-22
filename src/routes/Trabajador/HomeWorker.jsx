import React from 'react'
import {  Button,css,Typography } from '@mui/material';
import { useNavigate } from 'react-router-dom';

import {ReactComponent as Food2} from '../../assets/icons/Food2.svg';
import {ReactComponent as Ticket} from '../../assets/icons/Ticket3.svg';

function HomeWorker() {
  const navigate=useNavigate();
  return (
    
    <div
      css={css`          
          display: flex;
          flex-direction: column;
          align-items: center;
          justify-content: space-between;

          @media (min-width: 800px) {
            .phone {
              display:none;
            } 
          }


        

          .home-worker-topside {
            width:100%
          }

          h4 {
            margin-top:0.8rem;
            text-align:center;
          }

          .main-buttons {
              display: flex;
              flex-direction: column;
              align-items: stretch;
              align-self: stretch;
              margin: 2rem 10%;

              button {
                width: 100%;
                margin-bottom: 2.5rem;
                padding:1rem 3rem;
              }

          }

      `}
    >
      <div className='home-worker-topside'>
        <div className='home-worker-main phone'>
          <Typography variant="h4">Cines Unidos</Typography>
          <hr/>
        </div>

        <div
          className='phone'
          css={css`
            background-color: #1D2334;
            display: flex;
            flex-direction: column;
            border: solid 1.5px #395CEA;
            border-radius: 0.5rem;
            align-items: center;
            align-self: stretch;
            margin: 1rem min(5%,5rem);
            color:white;
            margin-top:1.5rem;
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


              <h1>haber</h1>

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