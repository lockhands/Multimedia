/* import { css } from '@emotion/react' */
import React from 'react'
import {  Button, Typography } from '@mui/material';
/* import '../../styles/styles.css'; */
import LayoutSuperior from '../../components/molecules/LayoutSuperiorPedidos';

import './css/card1.css'
import imagen from './css/cine.jpeg'
import imagen1 from './css/savoychocos.jpg'
import imagen2 from './css/megacombo.jpg'

import AssignmentIcon from '@mui/icons-material/Assignment';

function PedidosCliente() {

      
  return (

    <div>
      <div className='view'>
        <LayoutSuperior nombre="Pedidos" /> 
        <div className='main'>
          <div className="container1">
            
            <div className="card1">
              <div className="div1">
                <div className="ima">
                  <img src={imagen}></img>
                </div>
              </div>
              <div className="div2">
                <h4>combo familiar</h4>
                <p>cripetas grandes 230 gr bebidad grandes 798ml</p>
                
                <div className="a1">
                  <a href="#">cantidad:  05</a>
                </div>
              </div>
            </div>
            
            <div className="card2">
              <div className="div1">
                <div className="ima">
                  <img src={imagen}></img>
                </div>
              </div>
              <div className="div2">
                <h4>combo familiar</h4>
                <p>cripetas grandes 230 gr bebidad grandes 798ml</p>
                
                <div className="a1">
                  <a href="#">cantidad:  2</a>
                </div>
              </div>
              
              <div className='div1_1'>

                <div className="ima">
                  <img src={imagen1}></img>
                </div>

              </div>
              <div className='div1_2'>

                <h4>chocolates savoy</h4>
                <p>chocolate de 250 gr </p>
                
                <div className="a1">
                  <a href="#">cantidad:  1</a>
                </div>

              </div>

            </div>
            
            
            
            <div className="card1">
              <div className="div1">
                <div className="ima">
                  <img src={imagen2}></img>
                </div>
              </div>
              <div className="div2">
                <h4>megacombo</h4>
                <p>cripetas grandes 500 gr bebidad grandes 798ml y tequeños</p>
                
                <div className="a1">
                  <a href="#">cantidad:  05</a>
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