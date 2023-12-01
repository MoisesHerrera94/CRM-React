import React from 'react'
import ReactDOM from 'react-dom/client'
import './index.css'
import { createBrowserRouter, RouterProvider } from 'react-router-dom'
import Layout from './componets/Layout'
import NuevoCliente, {action as nuevoClienteAction} from './pages/NuevoCliente'
import ErrorPage from './componets/ErrorPage'
import EditarCliente, {loader as EditarClienteLoader, action as EditarClienteAction}  from './pages/EditarCliente'
import Index, {loader as ClientesLoader} from './pages'
import { action as EliminarClienteAction } from './componets/Cliente'

const router = createBrowserRouter([
  {
    path: '/',
    element: <Layout></Layout>, 
    children: [
      {
        index: true,
        element: <Index></Index>,
        loader: ClientesLoader,
        errorElement: <ErrorPage/>
      },
      {
        path: '/clientes/nuevo',
        element: <NuevoCliente></NuevoCliente>,
        action: nuevoClienteAction,
        errorElement: <ErrorPage/>
      }, 
      {
        path:'/clientes/:clienteId/editar',
        element: <EditarCliente/>,
        loader: EditarClienteLoader,
        action: EditarClienteAction,
        errorElement: <ErrorPage/>
      }, 
      {
        path: '/clientes/:clienteId/eliminar',
        action: EliminarClienteAction
      }
    ]
  }
])

ReactDOM.createRoot(document.getElementById('root')).render(
  <React.StrictMode>
    <RouterProvider router={router}/>
  </React.StrictMode>,
)
