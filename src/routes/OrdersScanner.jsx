import { css } from '@emotion/react'
import React from 'react'
import {  Button } from '@mui/material';
import BottomNavbar from '../components/molecules/BottomNavbar';

function HomeWorker() {

      
  return (
    
    <div
        css={css`
        display: grid;
        place-items: center;
            align-items:center;
            height:100vh;
            text-align: center;
            grid-template-rows: 80% 20%;
        `}
    >  
        <div
        css={css`
        display: grid;
        gap: 20px;
        place-items: center;
        text-align: center;
        width: 100%;
        max-width: 300px; 
    `}
        >
        
        </div>
        <BottomNavbar></BottomNavbar>
    </div>
   
  )
}

export default HomeWorker