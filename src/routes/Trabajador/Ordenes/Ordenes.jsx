import React, { useState } from 'react'
import { useNavigate } from 'react-router-dom'
import { Button, css, Typography } from '@mui/material'

import Layout from '../../../components/molecules/Layout'
import Pedido from '../../../components/molecules/Pedido'
import ConfirmPopup from '../../../components/molecules/ConfirmPopup'
import PedidosList from '../../../components/molecules/PedidosList'
import ConfirmButton from '../../../components/atoms/ConfirmButton'


function Ordenes() {

  const navigate= useNavigate();

  const [popup,setPopup] = useState(false)

  const onResolve = (result) =>{
    if (result) {
      navigate("/dashboard/HomeWorker")
    } else {  
      setPopup(false)
    }
  }

  return (
    <div
      className='ordenes-container'
      css={css`
          .order-code {
            color:#395CEA;
          }

          h4 {
            margin:1rem 0;
          }

          .main-content {
            padding: 1rem;
          }
          @media (min-width: 800px) {
            padding: 1.5rem 3rem;
          }
      `}
    >
      {
        popup && <ConfirmPopup onResolve={onResolve} />
      }

      <Layout nombre="Orden Escaneada" link="/dashboard/HomeWorker" />
      <div className='main-content'>
        <Typography variant="h5" > 
          Orden : <span className='order-code' > #ABCD4548988 </span>
        </Typography>

          <Typography variant="h4" > 
            Invidivuales
          </Typography>
          <PedidosList
            css={css`
              align-self:center;  
            `}
          >
            <li> <Pedido /> </li>
            <li> <Pedido /> </li>
            <li> <Pedido /> </li>
          </PedidosList>

        <div>
          <Typography variant="h4" > 
            Combos
          </Typography>
        <PedidosList
            css={css`
              align-self:center;  
            `}
          >
            <li> <Pedido /> </li>
            <li> <Pedido /> </li>
            <li> <Pedido /> </li>
          </PedidosList>
        </div>
        <ConfirmButton onClick={ ()=>setPopup(true) } > Confirmar </ConfirmButton>
      </div>
    </div>
  )
}

export default Ordenes