import { Outlet } from "react-router-dom";
import BottomNavbar from "../../components/molecules/BottomNavbar";

const ClientLayout = () => {
	return (
		<>
			<Outlet />
			<BottomNavbar home="/cliente" tickets="/cliente/tickets" pedidos="/cliente/pedidos" />
		</>
	);
};

export default ClientLayout;
