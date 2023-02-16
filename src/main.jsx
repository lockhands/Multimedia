import React from 'react'
import ReactDOM from 'react-dom/client'


import './index.css'

import {
  createBrowserRouter,
  RouterProvider,
} from "react-router-dom";

import Login from './routes/Login';
import BoletosScanner from './routes/BoletosScaner';
import ValidateBoletos from './routes/ValidateBoletos';
import HomeWorker from './routes/HomeWorker';

import Dashboard from './routes/Dashboard';
import HomeCliente from './routes/Cliente/HomeCliente';

const router = createBrowserRouter([
  {
    path: "/",
    element: <Login />, 
  },
  {
    path: "/dashboard",
    element: <Dashboard />, 
  },
  {
    path:'/dashboard/validate-boletos/scan',
    element: <BoletosScanner />
  },
  {
    path:'/dashboard/validate-boletos/accept',
    element: <ValidateBoletos />
  },
  {
    path:'/dashboard/home/cliente',
    element:   <HomeCliente />
  },
  {
    path:'/dashboard/HomeWorker',
    element: <HomeWorker />
  }
  
]);

ReactDOM.createRoot(document.getElementById('root')).render(
  <React.StrictMode>
    <RouterProvider router={router} />
  </React.StrictMode>,
)
