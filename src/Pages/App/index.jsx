import Home from "../Home"
import './App.css';
import MyAccount from "../MyAccount";
import MyOrders from "../MyOrders";
import NotFound from "../NotFound";
import SignIn from "../SingIn";


function App() {

  return (
    <>

      <div className="font-bold">
        <Home/>
        <MyAccount/>
        <MyOrders/>
        <NotFound/>
        <SignIn/>
        
      </div>
      
    </>
  )
}

export default App
