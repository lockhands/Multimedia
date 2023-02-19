import { css } from '@emotion/react'
import React from 'react'
import {  Button, Typography } from '@mui/material';
import '../../styles/styles.css';
import LayoutSuperior from '../../components/molecules/LayoutSuperiorPedidos';
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

    <div className='view'
        >
          <LayoutSuperior nombre="Pedidos" />
          <div className='main'> 
              
          </div>

    </div></div>
  )
  }

export default PedidosCliente