import { css, Typography } from '@mui/material'
import React from 'react'
import { useNavigate } from 'react-router-dom'

import pedidoPhoto from '../../assets/pedido.webp'


function Pedido() {

    const navigate = useNavigate()

  return (
    <div
        css={css`
            color:white;
            align-self:stretch;
        `}
    >
        <div
            css={css`
                background-color: #1D2334;
                border: solid #395CEA 1px;
                border-radius: 0.5rem;
                align-self: stretch;
                display: flex;
                margin: 0.5rem 0rem;
                color: white;
                padding: 1rem;
            `}
        >
            <div>
                <img
                    css={css`
                        width: 4.5rem;
                        border-radius: 0.5rem;
                    `}
                    src={pedidoPhoto} 
                />
            </div>
                <div
                    css={css`
                        position: relative;
                        flex: 1;
                        height: 4.5rem;
                        padding-left: 1rem ;
                        display:flex;
                        align-items: flex-start;
                        flex-direction: column;
                        justify-content: space-between;
                    `}
                >
                <Typography variant="h6">Tequeños</Typography>
                <div    >
                    <div
                        css={css`
                            background-color: #395CEA;
                            padding: 0.3rem 0.7rem;
                            border-radius: 0.5rem;
                            color: white;
                            font-size: 1rem;
                        `}
                    >
                        <Typography>Cantidad : 5</Typography>
                    </div>
                    <Typography 
                        css={css`
                            position: absolute;
                            bottom: 0;
                            color: #FF8308;
                            font-weight: bolder;
                            right: 0 ;
                        `}
                        onClick={()=> navigate('/dashboard/HomeWorker/ordenes/see-more')}
                    >
                        Ver mas
                    </Typography>
                </div>
            </div>
        </div>
    </div>
  )
}

export default Pedido