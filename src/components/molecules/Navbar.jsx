import { css } from '@emotion/react';
import { Box } from '@mui/system';
import React from 'react';
import { Link } from "react-router-dom";
import LogoNoText from '../../assets/logo-no-text.png'
import AccountCircleIcon from '@mui/icons-material/AccountCircle';


function NavigationLink({to,children}) {
  return (
    <Link
      to={to}
    >    
      <h2
        css={css`
          margin-left:0.8rem;
          font-weight: normal;
          font-size:1.3rem;
        `}
      >
        {children}
      </h2>
    </Link>
  )
}

function Navbar() {
  return (
    <div 
      css={css`
        width:100%;
        background-color: #db0000;
        padding: 1rem;
        display:flex;
        justify-content:space-between;
        align-items:center;
        color:white;
      `}
    >

      
      <Box
        css={css`
          display:flex;
          align-items:center;
        `}
      >
        <div
          css={css`
            padding: 1rem;
            height:5rem;
            display:flex;
            align-items:center;
          `}
        >
          <img
            css={css`
              max-height:100%;
            `}
            src={LogoNoText}
            alt="logo"
          />

          <span
            css={css`
            margin-left:1.5rem;
            font-weight: bolder;
            font-size:1.3rem;
            `}
          >
            CineWorld
          </span>
        </div>
        <Box
          ml={4}
          css={css`
            display:flex;
            flex-direction:row;
          `}
        >
          <NavigationLink to="/dashboard" > Menu Principal </NavigationLink>
          <NavigationLink to="/dashboard/validate-boletos/scan"> Procesar Boletos </NavigationLink>
          <NavigationLink to="/dashboard/validate-pedidos"> Procesar Pedidos  </NavigationLink>
        </Box>
      </Box>
      <div
        css={css`
          display:flex;
          align-items:center;
        `}
      >
        <span
          css={css`
            margin-right:0.8rem;
            font-size:1.2rem;
          `}
        > Jose Marquez </span>
        <AccountCircleIcon  fontSize='large' />
      </div>

      


      


    </div>
  )
}
export default Navbar;