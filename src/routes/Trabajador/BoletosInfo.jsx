
import React from 'react'
import {  Button,Typography } from '@mui/material';
import '../../styles/styles.css';
import { useNavigate } from 'react-router-dom';
import Layout from '../../components/molecules/Layout';
import '../../styles/Trabajador/boletos-info.css'
import {ReactComponent as Ticket} from '../../assets/icons/Ticket3.svg';

import Done from '@mui/icons-material/Done'


function BoletosInfo() {
  const navigate=useNavigate();

  return (
    <div className='boletos-info'>      
      <Layout nombre="Zona de control" link="/dashboard/HomeWorker/validate-boletos" />
      <div className='content-container' >
        <div className='content'>
          <div className='info-card' >
            <div className='info-card-header info-card-el'>
              <Typography > Dahyana Mendoza </Typography>
              <Typography  className='cedula' > V-15.128.359 </Typography>
            </div>
            <Typography className='info-card-el' variant="h6"> Avatar. El camino del agua </Typography>
            <Typography className='info-card-el' variant="h6"> Sala 4-A </Typography>
            <Button 
              className='info-card-el'
              variant="contained" 
              startIcon={<Ticket />}

            >
              <Typography variant="buttontext" > 5 personas </Typography>
            </Button>

          </div>
          <div className='action' >
            <Button 
              startIcon={<Done />}
              sx={{backgroundColor:'orange'}}
              variant="contained" 
              onClick={() => navigate("/dashboard/HomeWorker")}
            >
              <Typography variant="buttontext" >Confirmar</Typography>
            </Button>
          </div>
        </div>
      </div>
    </div>
  )
}

export default BoletosInfo