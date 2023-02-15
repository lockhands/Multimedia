import { css } from '@emotion/react'
import React from 'react'
import Logo from '../components/Logo'
import { Box , Button, TextField } from '@mui/material';

function Login() {
  return (
    <div
        css={css`
            display:flex;
            justify-content:center;
            align-items:center;
            height:100vh;
        `}
    >
        <form
            css={css`
                width: 25rem;
                display:flex;
                flex-direction:column;
                bottom:7rem;
                position:relative;
            `}
        >
            <div css={css`
                display:flex;
                align-items:center;
                justify-content:center;
            `}>
                <Logo></Logo>
            </div>


            <TextField label="Correo electronico" variant="outlined" />
            <Box mb={2} ></Box>
            <TextField  label="Contraseña" variant="outlined" />
            <Box mb={2} ></Box>
            <Button variant="contained"> Iniciar Seccion</Button>
        </form> 
    </div>
  )
}

export default Login