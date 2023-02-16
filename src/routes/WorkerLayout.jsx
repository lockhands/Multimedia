import { Outlet } from "react-router-dom";
import BottomNavbar from "../components/molecules/BottomNavbar";

const WorkerLayout = () => {
	return (
		<>
			<Outlet />
			<BottomNavbar
				home="/dashboard"
				tickets="/dashboard/validate-boletos/scan"
				pedidos="/dashboard/OrdersScanner"
			/>
		</>
	);
};

export default WorkerLayout;
