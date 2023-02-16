import React from 'react'
import { css } from '@emotion/react'
import {Paper,Box} from '@mui/material/Paper';

import BottomNavbar from '../../components/molecules/BottomNavbar';

function HomeCliente (){
    return(
            <div
            css={css`
            display: grid;
            place-items: center;
                align-items:center;
                height:50vh;
                text-align: center;
            `}
            >

<div css={css`
            display: grid;
            place-items: center;
            text-align: center;
            width: 75%;
            max-width: 300px; 
        `}>
        <h4>CINES UNIDOS</h4>
        <hr css={css`
            width: 100%;
            max-width: 300px; 
        `} />
    </div>
    

    <Paper variant="outlined" elevation={3} />
    
       
                <BottomNavbar/>
            </div>
    );
}

export default HomeCliente;
