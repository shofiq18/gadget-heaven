import { StrictMode } from 'react'
import { createRoot } from 'react-dom/client'
import './index.css'

import {
  createBrowserRouter,
  RouterProvider,
} from "react-router-dom";
import Root from './components/Root/Root.jsx';
import ErrorPage from './components/ErrorPage/ErrorPage.jsx';
import Home from './components/Home/Home.jsx';
import Dashboard from './components/Dashboard/Dashboard.jsx';
import GadgetDetails from './components/GadgetDetails/GadgetDetails.jsx';
import Cart from './components/Cart/Cart.jsx';
import Wishlist from './components/Wishlist/Wishlist.jsx';
const router = createBrowserRouter([
  {
    path: "/",
    element: <Root></Root>,
    errorElement: <ErrorPage></ErrorPage>,
    children: [
      {
        path: '/',
        element: <Home></Home>
      },
      {
        path:'gadget/:product_id',
        element: <GadgetDetails></GadgetDetails>,
        loader: () => fetch('/GadgetData.json')
      }, 
      {
        path: 'dashboard', 
        element: <Dashboard></Dashboard>
      },
      {
        path:'cart', 
        element: <Cart></Cart>
      },
      {
        path:'wishlist',
        element: <Wishlist></Wishlist>
      }
    ]
  },
]);




createRoot(document.getElementById('root')).render(
  <StrictMode>
     <RouterProvider router={router} />
  </StrictMode>,
)
 