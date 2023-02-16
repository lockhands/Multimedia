import React, { useState } from "react";
import { Link } from "react-router-dom";
import { BottomNavigation, BottomNavigationAction } from "@mui/material";
import { ReactComponent as Food } from "../../assets/Icons/Food.svg";
import { ReactComponent as Home } from "../../assets/Icons/Home.svg";
import { ReactComponent as Ticket } from "../../assets/Icons/Ticket.svg";

function BottomNavbar(value) {
	return (
		<BottomNavigation
			showLabels
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
	);
}

export default BottomNavbar;
