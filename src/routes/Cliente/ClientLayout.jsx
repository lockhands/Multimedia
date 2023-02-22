import { Outlet } from "react-router-dom";
import BottomNavbar from "../../components/molecules/BottomNavbar";

const ClientLayout = () => {
	return (
		<div>
			<Outlet />
			<BottomNavbar home="/cliente/home" tickets="/cliente/tickets" pedidos="/cliente/pedidos" />
		</div>
	);
};

export default ClientLayout
