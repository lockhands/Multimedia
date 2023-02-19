/* import { css } from '@emotion/react' */
import React from 'react'
import {  Button, Typography } from '@mui/material';
/* import '../../styles/styles.css'; */
import LayoutSuperior from '../../components/molecules/LayoutSuperiorPedidos';

import './css/card.css'
import imagen from './css/cine.jpeg'

import AssignmentIcon from '@mui/icons-material/Assignment';

function PedidosCliente() {

      
  return (

    <div>
      <div className='view'>
        <LayoutSuperior nombre="Pedidos" /> 
        <div className='main'>
          <div className="container">
            
            <div className="card1">
              <div className="div1">
                <div className="ima">
                  <img src={imagen}></img>
                </div>
                {/* <div className="tipotike">
                  <h4>tickes</h4>
                  <p>Bs. 100</p>
                </div> */}
                {/* <div className="metodo">
                  <h4>metodo de pago</h4>
                  <p>efectivo</p>

                </div> */}

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
          </div>
        </div>
      </div>
    </div>
  )
  }

export default PedidosCliente;