import { css } from '@emotion/react'
import React from 'react'
import {  Button } from '@mui/material';

function PedidosCliente() {

      
  return (
    <div
        css={css`
        display: grid;
        place-items: center;
            align-items:center;
            height:100vh;
            text-align: center;
        `}>

          <h2>pedidos</h2>
    </div>
  )
}

export default PedidosCliente