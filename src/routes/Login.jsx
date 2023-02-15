import { css } from '@emotion/react'
import React from 'react'
import Logo from '../components/Logo'
import { Box , Button, TextField } from '@mui/material';
import { styled } from '@mui/material/styles';
import Typography from '@mui/material/Typography';
import { red, green, blue } from '@mui/material/colors';
import { flexbox } from '@mui/system';

const Root = styled('div')(({ theme }) => ({
    height: '100%',
    padding: theme.spacing(1),
    [theme.breakpoints.down('md')]: {
       
    display:'flex',
    flexDirection: 'column',
    alignItems:'center',
    justifyContent:'center',

    },
  }));

const Superior = styled('div')(({theme}) => ({
    [theme.breakpoints.down('md')]:{

    }    
}))

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


           
       
        <Root>
       
        <TextField label="Correo electronico" variant="outlined"></TextField>
            <Box mb={2} ></Box>
            <TextField  label="Contraseña" variant="outlined" />
            <Box mb={2} ></Box>
            <Button variant="contained"> Iniciar Seccion</Button>
            
        </Root>
       
        </form> 
    </div>
  )
}

export default Login