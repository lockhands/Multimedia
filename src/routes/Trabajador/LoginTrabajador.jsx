import { css } from '@emotion/react'
import React from 'react'
import Logo from '../../components/Logo'
import { Box , Button, TextField } from '@mui/material';
import { styled } from '@mui/material/styles';
import { useNavigate } from 'react-router-dom';
import Input from '../../components/atoms/Input';

const Root = styled('div')(({ theme }) => ({
    padding: theme.spacing(1),
    display:'flex',
    flexDirection: 'column',
    alignItems:'center',
    justifyContent:'center',
}));

const In = styled('div')(({theme}) =>({
    backgroundColor: "#1D2334",

}))


  
  const CssTextField = styled(TextField)({
    '& label.Mui-focused': {
      color: '#C2C2C2',
    },
    '& label':{
        color: '#C2C2C2',
    },
    '& .MuiInput-underline:after': {
      borderBottomColor: '#C2C2C2',
    },
    '& .MuiOutlinedInput-root': {
      '& fieldset': {
        borderColor: '#C2C2C2',
        color: '#C2C2C2',
      },
      '&:hover fieldset': {
        borderColor: '#C2C2C2',
      },
      '&.Mui-focused fieldset': {
        borderColor: '#C2C2C2',
      },
    },
  });

 


function LoginTrabajador() {

    const navigate = useNavigate();
    const handleClick = () => {
        navigate('/dashboard/HomeWorker');
    }

  return (
    <div
    css={css`
        display:flex;
        justify-content:center;
        align-items:flex-start;
        height:100vh;
        background-color:#0E1321;

        button {
          font-size:1.1rem;
        }

      }
    `}
>
    <form
        css={css`

            display:flex;

            justify-content:center;
            align-items:center;
            height:100vh;
            background-color:#0E1321;

            justify-content:flex-start;
            flex-direction:column;
            .text-field {
              align-self:stretch;
            }                
            margin-top:5rem;
        `}
    >

    <Root>
        <Logo />

        <div
          css={css`
            margin-top: 2rem;
            align-self:stretch;

          `}
        >
<<<<<<< HEAD
            <div css={css`
                display:flex;
                align-items:center;
                justify-content:center;
                background-color:transparent;
            `}>
                <Logo css={css`
 

`

                }></Logo>
            </div>


           
       
        <Root>
        
        <CssTextField xs={{backgroundColor: '#1D2334',}} label="Correo electrónico" id="custom-css-outlined-input" />

            <Box mb={2} ></Box>
           
           <CssTextField label="Contraseña" id="custom-css-outlined-input" />

            <Box mb={2} ></Box>

            <Button css={css`background-color:#395CEA; color:#ffff`}variant="contained" onClick={handleClick}> Iniciar Seccion</Button>
            
        </Root>
       
        </form> 
    </div>
 )
}

export default LoginTrabajador