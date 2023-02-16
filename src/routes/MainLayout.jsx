import { Outlet } from "react-router-dom";
import BottomNavbar from "../components/molecules/BottomNavbar";

const MainLayout = () => {
	return (
		<>
			<Outlet />
			<BottomNavbar />
		</>
	);
};

export default MainLayout;
