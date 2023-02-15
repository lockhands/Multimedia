import { css } from '@emotion/react'
import React from 'react'
import {  Button } from '@mui/material';


function HomeWorker() {

      
  return (
    <div
        css={css`
        display: grid;
        place-items: center;
            align-items:center;
            height:100vh;
            text-align: center;
        `}
    >  
    <div css={css`
            display: grid;
            place-items: center;
            text-align: center;
            width: 100%;
            max-width: 300px; 
        `}>
        <h4>CINES UNIDOS</h4>
        <hr css={css`
            width: 100%;
            max-width: 300px; 
        `} />
    </div>
        <div css={css`
            display: grid;
            place-items: center;
            text-align: center;
            width: 100%;
            max-width: 300px; 
            border-radius: 10px;
            background-color: #882525;
        `}>
           <h3 css={css`
                color: #F5EB9D;
                margin-top: 20px;
                margin-bottom: 20px;
        `}> ¡Bienvenido!</h3>
           <h3 css={css`
                color: #F5EB9D;
                margin-top: 20px;
                margin-bottom: 20px;
        `}>Carlos Andrés Pérez</h3>
           <h3 css={css`
                color: #F5EB9D;
                margin-top: 20px;
                margin-bottom: 20px;
        `}>V-5.432.123</h3>
        </div>
        <Button  
        variant="contained"> Procesar boletos</Button>
        <Button variant="contained"> Procesar pedidos</Button>
        <Button variant="contained"> Cerrar sesión</Button>
      
    </div>
  )
}

export default HomeWorker