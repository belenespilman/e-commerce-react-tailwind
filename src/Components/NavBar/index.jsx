import { ShoppingBagIcon } from '@heroicons/react/24/solid';
import { useContext } from 'react';
import { NavLink } from 'react-router-dom';
import { ShoppingCartContext } from '../../Context';
import ShoppingCart from '../ShoppingCart';


const NavBar = () => {
  const activeStyle = 'underline underline-offset-4';
  const context = useContext(ShoppingCartContext);

  //Sign Out

  const signOut = localStorage.getItem('sign-out')
  const parsedSignOut = JSON.parse(signOut)
  const isUserSignOut = context.signOut  || parsedSignOut

  //Account
  const account = localStorage.getItem('account')
  const parsedAccount = JSON.parse(account)

  //Has an account
  const noAccountInLocalStorage = parsedAccount ? Object.keys(parsedAccount).length === 0 : true
  const noAccountInLocalState = context.account ? Object.keys(context.account).length === 0 : true
  const hasUserAnAccount = !noAccountInLocalStorage  || !noAccountInLocalState  



  const handleSignOut = () => {
    localStorage.setItem('sign-out', JSON.stringify(true));
    context.setSignOut(true);
  };

  const RenderView = () => {
    if (hasUserAnAccount && !isUserSignOut) {
        return (
            
            <>
        <li className='text-black/60'>
         {parsedAccount.email}
        </li>
        <li>
          <NavLink
            to='/my-orders'
            className={({ isActive }) => (isActive ? activeStyle : undefined)}
          >
            My Orders
          </NavLink>
        </li>
        <li>
          <NavLink
            to='/my-account'
            className={({ isActive }) => (isActive ? activeStyle : undefined)}
          >
            My Account
          </NavLink>
        </li>
        <li>
          <NavLink
            to='/sign-in'
            className={({ isActive }) => (isActive ? activeStyle : undefined)}
            onClick={() => handleSignOut()}
          >
            Sign out
          </NavLink>
        </li>

        </>

             )
    } else {
        return (
        <>
         <li>
                <NavLink
                to='/sign-in'
                className={({ isActive }) => isActive ? activeStyle : undefined}
                onClick={()=> handleSignOut()}>
                Sign In
                </NavLink>
            </li>  
        </>
        )
    }
  }

  return (
    <nav className='flex justify-between items-center fixed z-10 w-full top-0 py-5 px-8 text-sm font-light bg-white'>
      <ul className='flex items-center gap-3'>
        <li className='font-semibold text-lg'>
          <NavLink
            to= {`${isUserSignOut ? '/sign-in' : '/'} `} 
            onClick={() => context.setSearchByCategory()}>
            Shopi
          </NavLink>
        </li>

        <li>
          <NavLink
            to='/'
            onClick={() => context.setSearchByCategory()}
            className={({ isActive }) => (isActive ? activeStyle : undefined)}
          >
            All
          </NavLink>
        </li>
        <li>
          <NavLink
            to='/clothes'
            onClick={() => context.setSearchByCategory('clothes')}
            className={({ isActive }) => (isActive ? activeStyle : undefined)}
          >
            Clothes
          </NavLink>
        </li>
        <li>
          <NavLink
            to='/electronics'
            onClick={() => context.setSearchByCategory('electronics')}
            className={({ isActive }) => (isActive ? activeStyle : undefined)}
          >
            Electronics
          </NavLink>
        </li>
        <li>
          <NavLink
            to='/jewelry'
            onClick={() => context.setSearchByCategory('jewelery')}
            className={({ isActive }) => (isActive ? activeStyle : undefined)}
          >
            Jewelery
          </NavLink>
        </li>
        <li>
          <NavLink
            to='/others'
            onClick={() => context.setSearchByCategory()}
            className={({ isActive }) => (isActive ? activeStyle : undefined)}
          >
            Others
          </NavLink>
        </li>
      </ul>
  
  <ul className='flex items-center gap-3'>
    {RenderView()}
    <li className='flex items-center'>
          <ShoppingCart/>
    </li>
  </ul>
      
</nav>
  );
};

export default NavBar;
