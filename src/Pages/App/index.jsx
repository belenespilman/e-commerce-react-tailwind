import { useContext } from 'react';
import { useRoutes, BrowserRouter, Navigate } from 'react-router-dom';
import { ShoppingCartProvider, initializeLocalStorage, ShoppingCartContext } from '../../Context';
import Home from '../Home';
import MyOrder from '../MyOrder';
import MyAccount from '../MyAccount';
import MyOrders from '../MyOrders';
import NotFound from '../NotFound';
import SignIn from '../SingIn';
import NavBar from '../../Components/NavBar';
import CheckoutSideMenu from '../../Components/CheckoutSideMenu';
import './App.css';

const AppRoutes = () => {
  const context = useContext(ShoppingCartContext);
 //Sign Out

 const signOut = localStorage.getItem('sign-out')
 const parsedSignOut = JSON.parse(signOut)
 

 //Account
 const account = localStorage.getItem('account')
 const parsedAccount = JSON.parse(account)

 //Has an account
 const noAccountInLocalStorage = parsedAccount ? Object.keys(parsedAccount).length === 0 : true
 const noAccountInLocalState = context.account ? Object.keys(context.account).length === 0 : true
 const hasUserAnAccount = !noAccountInLocalStorage  || !noAccountInLocalState  
 const isUserSignOut = context.signOut || parsedSignOut


  let routes = useRoutes([
    { path: '/', element: <Home /> },
    { path: '/clothes', element: <Home /> },
    { path: '/electronics', element: <Home /> },
    { path: '/jewelry', element: <Home /> },
    { path: '/others', element: <Home /> },
    { path: '/my-account', element: hasUserAnAccount && !isUserSignOut ? <Home /> : <Navigate replace to={'sign-in'} /> },
    { path: '/my-order', element: hasUserAnAccount && !isUserSignOut ? <Home /> : <Navigate replace to={'sign-in'} />  },
    { path: '/my-orders/last', element: hasUserAnAccount && !isUserSignOut ? <Home /> : <Navigate replace to={'sign-in'} />  },
    { path: '/my-orders/:id', element: hasUserAnAccount && !isUserSignOut ? <Home /> : <Navigate replace to={'sign-in'} />  },
    { path: '/my-orders', element: hasUserAnAccount && !isUserSignOut ? <Home /> : <Navigate replace to={'sign-in'} />  },
    { path: '/*', element: hasUserAnAccount && !isUserSignOut ? <Home /> : <Navigate replace to={'sign-in'} />  },
    { path: '/sign-in', element: <SignIn /> },
  ]);
  return routes;
};

const App = () => {
  return (
    <ShoppingCartProvider>
      <BrowserRouter>
        <AppRoutes />
        <NavBar />
        <CheckoutSideMenu />
      </BrowserRouter>
    </ShoppingCartProvider>
  );
};

export default App;
