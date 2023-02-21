import React from "react";
import '../../styles/tickets/estilos.css'
import { Typography } from "@mui/material";
import { Link } from "react-router-dom";
import ArrowBackIcon from '@mui/icons-material/ArrowBack';


function Layout({nombre,link}){
    return(
        <div className="view-tickets-main">
        <Link to={link}>
    <ArrowBackIcon sx={{color:'white',}} />
    </Link>
    <Typography variant="h5"  sx={{color:'white', paddingLeft: '5%'}}>{nombre}</Typography>
   
    
    
</div>
    )
}

export default Layout;