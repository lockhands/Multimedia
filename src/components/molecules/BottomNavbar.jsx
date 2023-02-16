import React, { useState } from "react";
import { Link } from "react-router-dom";
import { BottomNavigation, BottomNavigationAction,AppBar, Toolbar, Box, Paper } from "@mui/material";
import { ReactComponent as Food } from "../../assets/Icons/Food.svg";
import { ReactComponent as Home } from "../../assets/Icons/Home.svg";
import { ReactComponent as Ticket } from "../../assets/Icons/Ticket.svg";


function BottomNavbar() {

	

	const [value, setValue] = useState(0);

	return (
		<Paper sx={{ position: 'fixed', bottom: 0, left: 0, right: 0 }} elevation={3}>

	
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
			/>

			<BottomNavigationAction
				label="Tickets"
				icon={<Home stroke="#898989" />}
			/>
			{/* stroke solo */}

			<BottomNavigationAction
				label="Pedidos"
				icon={<Ticket fill="#898989" />}
			/>
			{/* fill solo */}
		</BottomNavigation>
		</Paper>
	);
}

export default BottomNavbar;
