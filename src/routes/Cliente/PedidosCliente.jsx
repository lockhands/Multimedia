import { css } from '@emotion/react'
import React from 'react'
import {  Button, Typography } from '@mui/material';
import '../../styles/styles.css';
import LayoutSuperior from '../../components/molecules/LayoutSuperiorPedidos';
function PedidosCliente() {

      
  return (
    <div className='view'
        >
          <LayoutSuperior nombre="Pedidos" />
          <div className='main'> 
              
          </div>
    </div>
  )
}

export default PedidosCliente