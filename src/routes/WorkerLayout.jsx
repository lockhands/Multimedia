import { css } from "@emotion/react";
import { Outlet } from "react-router-dom";
import BottomNavbar from "../components/molecules/BottomNavbar";

import Navbar from '../components/molecules/Navbar'

const WorkerLayout = () => {
	return (
		<div
			css={css`
				.outlet-wrapper {
					background-color: #0E1321;
					height: calc(100vh - 56px - 1rem);   
					background-color: #0E1321;
					color: white;
					overflow-y:scroll;
				}
				
				@media (min-width: 800px) {
					.outlet-wrapper {
						height: 100vh;
					}
				}
			`}
		>
			<Navbar></Navbar>
			<div className="outlet-wrapper">
				<Outlet />
			</div>
			<BottomNavbar
				home="/dashboard/HomeWorker"
				tickets="/dashboard/HomeWorker/validate-boletos"
				pedidos="/dashboard/HomeWorker/Pedidos"
			/>
		</div>
	);
};

export default WorkerLayout;
