import { useContext } from 'react';
import { NavLink } from 'react-router-dom';
import { ShoppingCartContext } from '../../Context';

const Sidebar = () => {
  const context = useContext(ShoppingCartContext);
  const activeStyle = 'underline underline-offset-4';

  //Sign Out

  const signOut = localStorage.getItem('sign-out');
  const parsedSignOut = JSON.parse(signOut);
  const isUserSignOut = context.signOut || parsedSignOut;

  //Account
  const account = localStorage.getItem('account');
  const parsedAccount = JSON.parse(account);

  //Has an account
  const noAccountInLocalStorage = parsedAccount
    ? Object.keys(parsedAccount).length === 0
    : true;
  const noAccountInLocalState = context.account
    ? Object.keys(context.account).length === 0
    : true;
  const hasUserAnAccount = !noAccountInLocalStorage || !noAccountInLocalState;

  const RenderView = () => {
    if (hasUserAnAccount && !isUserSignOut) {
      return (
        <>
          <li className='text-black/60'>{parsedAccount.email}</li>
          <li>
            <NavLink
              to='/my-orders'
              onClick={() => context.toggleSidebar()}
              className={({ isActive }) => (isActive ? activeStyle : undefined)}
            >
              ● My Orders
            </NavLink>
          </li>
          <li>
            <NavLink
              to='/my-account'
              onClick={() => context.toggleSidebar()}
              className={({ isActive }) => (isActive ? activeStyle : undefined)}
            >
              ● My Account
            </NavLink>
          </li>
          <li className='pr-4 mr-4'>
            <NavLink
              to='/sign-in'
              className={({ isActive }) => (isActive ? activeStyle : undefined)}
              onClick={() => {
                context.toggleSidebar();
                handleSignOut();
              }}
            >
              ● Sign out
            </NavLink>
          </li>
        </>
      );
    } else {
      return (
        <div>
          <li className='pr-4 mr-4'>
            <NavLink
              to='/sign-in'
              className={({ isActive }) => (isActive ? activeStyle : undefined)}
              onClick={() => handleSignOut()}
            >
              ● Sign In
            </NavLink>
          </li>
        </div>
      );
    }
  };

  return (
    <div
      style={{ display: context.sidebarOpen ? 'block' : 'none' }}
      className='absolute w-screen h-screen opacity-95 z-10'
    >
      <div className='bg-white w-screen h-screen pt-10 mt-10'>
        <aside className='pl-4 ml-4'>
          <ul className='mb space-y-3 cursor-pointer '>
            <li className='mb-6 font-bold text-xl cursor-pointer'>
              <NavLink
                to={`${isUserSignOut ? '/sign-in' : '/'} `}
                onClick={() => {
                  context.toggleSidebar();
                  context.setSearchByCategory();
                }}
              >
                Shopi
              </NavLink>
            </li>

            <li className='font-semibold text-lg'>Categories</li>
            <li>
              <NavLink
                to='/'
                onClick={() => {
                  context.toggleSidebar();
                  context.setSearchByCategory();
                }}
              >
                🛒 All
              </NavLink>
            </li>

            <li>
              <NavLink
                to='/clothes'
                onClick={() => {
                  context.toggleSidebar();
                  context.setSearchByCategory('clothes');
                }}
              >
                👔 Clothes
              </NavLink>
            </li>

            <li>
              <NavLink
                to='/electronics'
                onClick={() => {
                  context.toggleSidebar();
                  context.setSearchByCategory('electronics');
                }}
              >
                💻 Electronics
              </NavLink>
            </li>

            <li>
              <NavLink
                to='/jewelry'
                onClick={() => {
                  context.toggleSidebar();
                  context.setSearchByCategory('jewelery');
                }}
              >
                💎 Jewelery
              </NavLink>
            </li>

            <li>
              <NavLink
                to='/others'
                onClick={() => {
                  context.toggleSidebar();
                  context.setSearchByCategory();
                }}
              >
                🛍️ More +
              </NavLink>
            </li>
          </ul>

          <div className='flex justify-right mt-20'>
            <ul className='cursor-pointer space-y-2'>{RenderView()}</ul>
          </div>
        </aside>
      </div>
    </div>
  );
};

export default Sidebar;
