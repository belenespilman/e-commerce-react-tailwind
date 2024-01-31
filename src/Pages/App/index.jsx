import {useRoutes, BrowserRouter} from 'react-router-dom'
import Home from "../Home";
import MyOrder from '../Home/MyOrder';
import MyAccount from "../MyAccount";
import MyOrders from "../MyOrders";
import NotFound from "../NotFound";
import SignIn from "../SingIn";
import NavBar from "../../Components/NavBar"
import './App.css';


const AppRoutes= () => {
  let routes= useRoutes([
    {path: '/', element: <Home/>},
    {path: '/my-account', element: <MyAccount/>},
    {path: '/my-order', element: <MyOrder/>},
    {path: '/my-orders', element: <MyOrders/>},
    {path: '/*', element: <NotFound/>},
    {path: '/sign-in', element: <SignIn/>},
  ])
  return routes
}

const App = () => {
  return (
    <BrowserRouter>
      <AppRoutes/>
      <NavBar/>
    </BrowserRouter>
  
  )
}

export default App
