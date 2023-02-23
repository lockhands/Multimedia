import React, { useState } from 'react'
import {  Box, Button, Tab, Tabs, Typography } from '@mui/material';
import { css } from '@emotion/react'
import AssignmentIcon from '@mui/icons-material/Assignment';
import LayoutSuperior from '../../components/molecules/LayoutSuperiorPedidos';
import './css/card1.css'

import imagen from './css/cine.jpeg'
import imagen1 from './css/savoychocos.jpg'
import imagen2 from './css/megacombo.jpg'
import PedidosList from '../../components/molecules/PedidosList';
import Pedido from '../../components/molecules/Pedido';


function PedidosCliente() {

  const [tab,setTab] = useState(0)


  return (
      <div
        css={css`  
          display: flex;
          flex-direction: column;
          align-items: flex-start;
          height: calc(100vh - 56px - 1rem);
          overflow-y:scroll;
          background-color: #0E1321;
          button {
            color:white;
            font-size:1.4rem;
          }

          .hidden {
            display:none;
          }

        `}
      
      >
        <LayoutSuperior nombre="Pedidos" /> 
        <div css={css`
          padding:0;
          align-self:stretch;
        `}>
          <div
            css={css`
              border-radius: 0.5rem;
              margin: 2rem 2rem 1rem;
              background-color:#2E3445;
              display:grid;
              grid-template-columns: 1fr 1fr;

              button {
                padding : 0.2rem 0;
                font-size:1.2rem;
                text-align:center;
              }

              .active {
                background-color:#1A202E;
                color:#7BD7B8;
              }

              .left-btn {
                border-radius: 0.5rem 0 0 0.5rem;
              }

              .right-btn {
                border-radius: 0rem 0.5rem 0.5rems 0rem;
              }

            `}
          >
            <button onClick={()=>setTab(0)} className={`${ tab == 0 ? 'active ' : ' '}left-btn`} > Disponible </button>
            <button onClick={()=>setTab(1)} className={`${ tab == 1 ? 'active ' : ' '}right-btn`} > No Disponible </button>
          </div>

          <div
            css={css`
              padding: 0 2rem;  
              margin-bottom:1rem;
            `}
          >            
            <PedidosList hidden={tab != 0 } onPhone={true}>
                <li><Pedido onPhone={true} /></li>
                <li><Pedido onPhone={true} /></li>
                <li><Pedido onPhone={true} /></li>
                <li><Pedido onPhone={true} /></li>
                <li><Pedido onPhone={true} /></li>
            </PedidosList>
            <PedidosList hidden={tab != 1 } onPhone={true}>
                <li><Pedido onPhone={true} name="Palomitas" /></li>
                <li><Pedido onPhone={true} name="Palomitas" /></li>
                <li><Pedido onPhone={true} name="Palomitas" /></li>
                <li><Pedido onPhone={true} name="Palomitas" /></li>
                <li><Pedido onPhone={true} name="Palomitas" /></li>
            </PedidosList>
          </div>

          <div className="container1 hidden">
            
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
    )
  }

export default PedidosCliente;