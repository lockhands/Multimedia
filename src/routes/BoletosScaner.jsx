import { css } from '@emotion/react'
import React from 'react'
import Navbar from '../components/molecules/Navbar'

import QRImage from '../assets/QR-example.jpg'
import { Button } from '@mui/material'
import { Box } from '@mui/system'
 
function BoletosScaner() {
  return (
    <div>
        <Navbar />
        <div
            css={css`
                padding:2rem;
                display:flex;
                flex-direction:column;
                align-items:center;
            `}
        >
            <h1> Codigo QR para pedidos </h1>
            
            <div>
                <img
                    css={css`
                        width:30rem;
                        height:auto;
                    `}
                src={QRImage} alt="" />
            </div>
            <Box  mb={2} > </Box>
            <Button variant="contained">  Continuar </Button>

        </div>


    </div>
  )
}

export default BoletosScaner