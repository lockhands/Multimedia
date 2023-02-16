import React from "react";
import ReactDOM from "react-dom/client";
import ClientLayout from "././routes/Cliente/ClientLayout";
import WorkerLayout from "././routes/WorkerLayout";

import "./index.css";

import { createBrowserRouter, RouterProvider } from "react-router-dom";

import Login from "./routes/Login";
import BoletosScanner from "./routes/BoletosScaner";
import ValidateBoletos from "./routes/ValidateBoletos";
import HomeWorker from "./routes/HomeWorker";
import OrdersScanner from "./routes/OrdersScanner";
import Dashboard from "./routes/Dashboard";
import HomeCliente from "./routes/Cliente/HomeCliente";
import PedidosCliente from "./routes/Cliente/PedidosCliente";
import TicketsCliente from "./routes/Cliente/TicketsCliente";

const router = createBrowserRouter([
	{
		path: "/",
		element: <Login />,
	},
	{
		path: "/dashboard",
		element: <WorkerLayout />,
		children: [
			{ path: "", element: <Dashboard /> },
			{ path: "validate-boletos/scan", element: <BoletosScanner /> },
			{ path: "validate-boletos/accept", element: <ValidateBoletos /> },
			{ path: "HomeWorker", element: <HomeWorker /> },
			{ path: "OrdersScanner", element: <OrdersScanner /> },
		],
	},
	{
		path: "/cliente",
		element: <ClientLayout />,
		children: [
			{ path: "home", element: <HomeCliente /> },
			{ path: "pedidos", element: <PedidosCliente /> },
			{ path: "tickets", element: <TicketsCliente /> },
		],
	},
]);

ReactDOM.createRoot(document.getElementById("root")).render(
	<React.StrictMode>
		<RouterProvider router={router} />
	</React.StrictMode>
);
