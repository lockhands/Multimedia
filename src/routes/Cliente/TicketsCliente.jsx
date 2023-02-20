import { css } from '@emotion/react'
import React from 'react'
import {  Button, ImageListItem, Typography,Box } from '@mui/material';
import LayoutSuperiorBoletos from '../../components/molecules/LayoutSuperiorBoletos';
import '../../styles/layouts/CB1.css';
import { ReactComponent as Calendar } from '../../assets/icons/Calendar.svg';
import { ReactComponent as Clock } from '../../assets/icons/Clock.svg';
import { ReactComponent as Ticket } from '../../assets/icons/Ticket2.svg';
import { useNavigate } from 'react-router-dom';
function TicketsCliente() {

    const navigate=useNavigate();

    const styles ={
        boton1:{
            backgroundColor:'#0E1321',
            color:'white',
            fontSize:'10pt',
        },
        boton2:{
            backgroundColor:'#505B77',
            color:'white',
            fontSize:'10pt',
        },
        text:{
            color: 'white',
            fontSize: '21.33px',
        },
        view:{
            display: 'flex',
            flexDirection: 'column',
            alignItems: 'flex-start',
            height: '100vh',
            backgroundColor: '#0E1321',
         
        },
        main:{
            display: 'flex',
            flexDirection:'column',
            flexWrap:'nowrap',
            justifyContent:'center',
            alignItems:'center',
            alignContent:'stretch',
        },
        fila:{
            display: 'flex',
            flexDirection: 'row'

        },
        centrarhorizontal:{
            display: 'flex',
            flexDirection: 'row',
            flexWrap: 'nowrap',
            justifyContent: 'space-evenly',
            alignItems: 'center',
            aligncontent: 'stretch',
            width: '100%',
            margin:'2.5%'
        },
        centrarhorizontalmentepegado:{
            display: 'flex',
	        flexDirection: 'row',
	        justifyContent: 'center',
	        alignItems: 'center',
	        alignContent: 'stretch',
            width:'100%'
        },
        centrarverticalmente:{
            display: 'flex',
	        flexDirection: 'column',
	        flexWrap: 'nowrap',
	        justifyContent: 'center',
	        alignItems: 'center',
	        alignContent: 'stretch',
            boxSizing:'content-box',
        },
        centrarpantalla:{
            display: 'flex',
	        flexDirection: 'column',
	        flexWrap: 'nowrap',
	        justifyContent: 'center',
	        alignItems: 'center',
	        alignContent: 'stretch',
            boxSizing:'content-box',
            width:'100%',
            height:'35%',
            margin:'5%',
        },
        imagen:{
            borderRadius:'30px',
            
            width: '100%',
    height: '100%',
    overflow: 'hidden',
    position: 'relative',
        },
        cuadro:{
            width:'50%',
            height:'100%',
        },
        factura:{
            margin:'5%',
        }

      
  }
  

  return (
    
    <Box style={styles.view}>
    
        <div className="CB1-layout">
            <Typography variant="h5"  sx={{color:'white', paddingLeft: '5%'}}>Boletos</Typography>
            <div className="view-tickets-main-container">
                <Button style={styles.boton1}>Reciente   </Button>
                <Button style={styles.boton2}>Historial   </Button>
            </div>
        </div>

        <Box style={styles.factura}>
        <Typography style={styles.text}>N° KFF5TZS</Typography>
        </Box>

        <Box style={styles.centrarpantalla}>

            <Box   style={styles.cuadro} sx={{ border: '1px dashed grey' }}>
                 
                 <ImageListItem style={styles.imagen}>
                    <img  src={`https://lumiere-a.akamaihd.net/v1/images/poster-avatar-2-lat_46034440_1_c359a2d2.png`}/>
                 </ImageListItem>
            </Box>
            <Typography variant="h5" sx={{color:'white'}}>Avatar. El camino del agua</Typography>
            <Typography variant="subtitle1" sx={{color:'#7BD7B8'}} >Director. James Cameron</Typography>
        </Box>

        <Box style={styles.centrarhorizontal}>
            <Typography variant="body1" sx={{color:'#7BD7B8'}}>2022</Typography>
            <Typography variant="body1" sx={{color:'#7BD7B8'}}>Sub. Español</Typography>
            <Typography variant="body1" sx={{color:'#7BD7B8'}}>3h 2m</Typography>
        </Box>

      
       

        <Box style={styles.centrarhorizontal}>
            <Box style={styles.centrarverticalmente}>
            <Calendar />
            <Typography style={styles.text}>03/02</Typography>
            </Box>
            <Box style={styles.centrarverticalmente}>
            <Clock />
            <Typography style={styles.text}>18:15</Typography>
            </Box>
            <Box style={styles.centrarverticalmente}>
            <Ticket />
            <Typography style={styles.text}>3</Typography>
            </Box>
        </Box>
        
        <Box style={styles.centrarhorizontal}>
            <Button sx={{ color: '#FFFF', background: '#FF8308'}} variant="contained" onClick={() => navigate('qr')}>Código QR</Button>
            <Button sx={{  background: '#003EE4',}} variant="contained" onClick={() => navigate('puestos')}>Puestos</Button>

        </Box>

        </Box>
        
  )

 
}


export default TicketsCliente