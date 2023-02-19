
import React from 'react'
import {  Button,Typography } from '@mui/material';
import '../../styles/styles.css';
import { useNavigate } from 'react-router-dom';
import Layout from '../../components/molecules/Layout';
import '../../styles/layout.css'

function BoletosInfo() {


      const navigate=useNavigate();

  return (
    
    <div className='view'>

          <div className='container-layout'>
       
       
          <Layout nombre="Zona de control" link="/dashboard/HomeWorker/validate-boletos" />

       
 
     </div>

    <div className='pato'>
     
         <div className='araña'>
            <Typography variant="h4" sx={{margin:'5%'}}>¡Bienvenida!</Typography>
            <Typography variant="h6" sx={{margin:'5%'}}>Dahyana Nimo</Typography>
            <Typography variant="outlined" sx={{margin:'5%'}}>V-123.456.789</Typography>
         </div>
      

    </div>

    <div className='ardilla'>
    <div className='conejo'>

    
 
    <Button variant="contained" sx={{backgroundColor:'#FF8308'}} onClick={() => navigate('/dashboard/HomeWorker/validate-boletos')}>
        <Typography variant="buttontext" sx={{marginLeft:'5%' }}>Confirmar</Typography>
    </Button>
    

    </div>
    </div>

    </div>
   
  )
}

export default BoletosInfo