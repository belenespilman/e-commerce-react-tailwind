import {useRoutes, BrowserRouter} from 'react-router-dom'
import { ShoppingCartProvider } from '../../Context';
import Home from "../Home";
import MyOrder from '../MyOrder';
import MyAccount from "../MyAccount";
import MyOrders from "../MyOrders";
import NotFound from "../NotFound";
import SignIn from "../SingIn";
import NavBar from "../../Components/NavBar"
import CheckoutSideMenu from '../../Components/CheckoutSideMenu';
import './App.css';


const AppRoutes= () => {
  let routes= useRoutes([
    {path: '/', element: <Home/>},
    {path: '/my-account', element: <MyAccount/>},
    {path: '/my-order', element: <MyOrder/>},
    {path: '/my-orders/last', element: <MyOrder/>},
    {path: '/my-orders', element: <MyOrders/>},
    {path: '/*', element: <NotFound/>},
    {path: '/sign-in', element: <SignIn/>},
  ])
  return routes
}

const App = () => {
  return (
    <ShoppingCartProvider>
      
      <BrowserRouter>
      <AppRoutes/>
      <NavBar/>
      <CheckoutSideMenu/>
      </BrowserRouter>


    </ShoppingCartProvider>
    
  
  )
}

export default App
