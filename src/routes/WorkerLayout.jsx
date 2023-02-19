import { Outlet } from "react-router-dom";
import BottomNavbar from "../components/molecules/BottomNavbar";

const WorkerLayout = () => {
	return (
		<>
			<Outlet />
			<BottomNavbar
				home="/dashboard/HomeWorker"
				tickets="/dashboard/HomeWorker/validate-boletos"
				pedidos="/dashboard/HomeWorker/Pedidos"
			/>
		</>
	);
};

export default WorkerLayout;
