import React from "react";
import { css, Typography } from "@mui/material";
import { Link } from "react-router-dom";
import ArrowBackIcon from '@mui/icons-material/ArrowBack';

import '../../styles/main-layout.css'

function Layout({nombre,link}){
    return(
        <div
            css={css` 
                display:none;
                @media (max-width: 800px) {
                    display:flex;
                }
            `}
            className="main-layout"
        >
            <Link  className="back-arrow-link" to={link}>
                <ArrowBackIcon sx={{color:'white',marginLeft:'0.5rem'}} />
            </Link>
            <Typography variant="h5"  sx={{color:'white', paddingLeft: '5%'}}>{nombre}</Typography>
        </div>
    )
}

export default Layout;