import React, { useState } from "react";
import { Link } from "react-router-dom";
import { BottomNavigation, BottomNavigationAction,AppBar, Toolbar, Box, Paper } from "@mui/material";
import { ReactComponent as Food } from "../../assets/icons/Food.svg";
import { ReactComponent as Home } from "../../assets/icons/Home.svg";
import { ReactComponent as Ticket } from "../../assets/icons/Ticket.svg";
import { useNavigate } from "react-router-dom";



function BottomNavbar() {

	const [value, setValue] = useState(0);

	const navigate=useNavigate();

	const handleHome = () => {
		navigate('home/cliente');
	}
	
	const handleTickets =() =>{
		navigate('tickets/cliente');
	}

	const handlePedidos = () => {
		navigate('pedidos/cliente');
	}

	return (
		<Paper sx={{  position: 'fixed', bottom: 0, left: 0, right: 0}} elevation={3}>

	
		<BottomNavigation
			showLabels
			value={value}
			onChange={(event, newValue) => {
				setValue(newValue);
			}}
		>
			<BottomNavigationAction
				label="Home"
				icon={<Food fill="#898989" />} /* fill solo */
				onClick={handleHome}
			/>

			<BottomNavigationAction
				label="Tickets"
				onClick={handleTickets}
				icon={<Home stroke="#898989" />}
			/>
			{/* stroke solo */}

			<BottomNavigationAction
				label="Pedidos"
				onClick={handlePedidos}
				icon={<Ticket fill="#898989" />}
			/>
			{/* fill solo */}
		</BottomNavigation>
		</Paper>
	);
}

export default BottomNavbar;
