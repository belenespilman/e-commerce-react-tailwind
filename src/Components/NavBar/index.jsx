import { useContext } from 'react';
import { NavLink } from 'react-router-dom'
import { ShoppingCartContext } from '../../Context';



const NavBar = () => {
    const activeStyle = 'underline underline-offset-4'
    const context= useContext(ShoppingCartContext)
    
    return (
        <nav className='flex justify-between items-center fixed z-10 w-full top-0 py-5 px-8 text-sm font-light'>
            <ul className='flex items-center gap-3'>
                <li className='font-semibold text-lg'>
                <NavLink 
                to='/'>
                    Shopi
                </NavLink>
                </li>
                <li>
                <NavLink to='/'
                className={({isActive}) => isActive ? activeStyle : undefined}>
                    All
                </NavLink>
                </li>
                <li>
                <NavLink to='/clothes'
                className={({isActive}) => isActive ? activeStyle : undefined}>
                    Clothes
                </NavLink>
                </li>
                <li>
                <NavLink to='/electronics'
                className={({isActive}) => isActive ? activeStyle : undefined}>
                    Electronics
                </NavLink>
                </li>
                <li>
                <NavLink to='/jewelry'
                className={({isActive}) => isActive ? activeStyle : undefined}>
                    Jewelry
                </NavLink>
                </li>
                <li>
                <NavLink to='/others'
                className={({isActive}) => isActive ? activeStyle : undefined}>
                    Others
                </NavLink>
                </li>

        
            </ul>

            <ul className='flex items-center gap-3'>
                <li className='text-black/60'>
                <NavLink >
                    belen@myproject.com
                </NavLink>
                </li>
                <li>
                <NavLink to='/my-orders'
                className={({isActive}) => isActive ? activeStyle : undefined}>
                    My Orders
                </NavLink>
                </li>
                <li>
                <NavLink to='/my-account'
                className={({isActive}) => isActive ? activeStyle : undefined}>
                    My Account
                </NavLink>
                </li>
                <li>
                <NavLink to='/sign-in'
                className={({isActive}) => isActive ? activeStyle : undefined}>
                    Sign In 
                </NavLink>
                </li>
                <li>
                🛒 {context.count}
                </li>
            </ul>
        
        </nav>
    )
}

export default NavBar; 
