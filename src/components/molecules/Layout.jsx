import React from "react";
import { css, Typography } from "@mui/material";
import { Link, useNavigate } from "react-router-dom";
import ArrowBackIcon from '@mui/icons-material/ArrowBack';

import '../../styles/main-layout.css'

function Layout({nombre,link,onPhone}) {

    const navigate = useNavigate()

    return(
        <div
            css={css` 
                ${ onPhone ? 'display:flex;' : 'display:none;' } 
                @media (max-width: 800px) {
                    display:flex;
                }
            `}
            className="main-layout"
        >
            <Link  className="back-arrow-link" onClick={ ()=> navigate(-1) }>
                <ArrowBackIcon sx={{color:'white',marginLeft:'0.5rem'}} />
            </Link>
            <Typography variant="h5"  sx={{color:'white', paddingLeft: '5%'}}>{nombre}</Typography>
        </div>
    )
}

export default Layout;