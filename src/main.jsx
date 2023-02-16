import React from "react";
import ReactDOM from "react-dom/client";
import MainLayout from "./routes/MainLayout";

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
		element: <MainLayout />,
		children: [
			{ path: "", element: <Dashboard /> },
			{ path: "validate-boletos/scan", element: <BoletosScanner /> },
			{ path: "validate-boletos/accept", element: <ValidateBoletos /> },
			{ path: "home/cliente", element: <HomeCliente /> },
			{ path: "HomeWorker", element: <HomeWorker /> },
      { path: 'OrdersScanner', element: <OrdersScanner/> },
      { path: "pedidos/cliente",element:  <PedidosCliente /> },
      { path: "tickets/cliente", element: <TicketsCliente /> },
      
		],
	},
]);

ReactDOM.createRoot(document.getElementById("root")).render(
	<React.StrictMode>
		<RouterProvider router={router} />
	</React.StrictMode>
);
