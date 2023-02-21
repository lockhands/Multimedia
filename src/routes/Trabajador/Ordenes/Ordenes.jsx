import { Button, Typography } from '@mui/material'
import React, { useState } from 'react'
import Layout from '../../../components/molecules/Layout'
import Pedido from '../../../components/molecules/Pedido'

import './ordenes.css'
import Done from '@mui/icons-material/Done'
import ConfirmPopup from '../../../components/molecules/ConfirmPopup'
import { useNavigate } from 'react-router-dom'


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
    <div className='ordenes-container'>
      {
        popup && <ConfirmPopup onResolve={onResolve} />
      }

      <Layout nombre="Orden Escaneada" link="/dashboard/HomeWorker" />
      <div className='main-content'>
        <Typography variant="h6" > 
          Orden : <span className='order-code' > #ABCD4548988 </span>
        </Typography>

          <Typography variant="h5" > 
            Pedidos
          </Typography>
          <ul className='pedidos-list'>
            <Pedido />
            <Pedido />
            <Pedido />
          </ul>

        <div>
          <Typography variant="h5" > 
            Combos
          </Typography>
          <ul className='ordenes-list'>
            <Pedido />
            <Pedido />
            <Pedido />
          </ul>
        </div>
        <Button 

            startIcon={<Done />}
            variant="contained" 
            onClick={()=>setPopup(true)}
        >
            <Typography variant="buttontext" >Confirmar</Typography>
        </Button>
      </div>
    </div>
  )
}

export default Ordenes