import { css } from '@emotion/react'
import React from 'react'
import {  Button } from '@mui/material';
import BottomNavbar from '../../components/molecules/BottomNavbar';

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
      <BottomNavbar></BottomNavbar>
    </div>
  )
}

export default PedidosCliente