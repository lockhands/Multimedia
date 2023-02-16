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
import Index from "./routes";
import LoginCliente from "./routes/Cliente/LoginCliente";
import LoginTrabajador from "./routes/LoginTrabajador";

const router = createBrowserRouter([
	{
		path: "/",
		element: <Index/>
	},
	{
		path: "/dashboard",
		element: <WorkerLayout />,
		children: [
			{ path: "HomeWorker", element: <HomeWorker /> },
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
  {
    path:'/login/cliente',
    element: <LoginCliente />,
  },
  {
    path:'/login/trabajador',
    element: <LoginTrabajador />,
  }
]);

ReactDOM.createRoot(document.getElementById("root")).render(
	<React.StrictMode>
		<RouterProvider router={router} />
	</React.StrictMode>
);
