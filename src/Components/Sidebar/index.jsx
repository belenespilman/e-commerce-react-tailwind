import { useContext } from 'react';
import { NavLink } from 'react-router-dom';
import { ShoppingCartContext } from '../../Context';
import ShoppingCart from '../ShoppingCart';
import {XMarkIcon} from '@heroicons/react/24/solid'


const Sidebar = () => {

    const activeStyle = 'underline underline-offset-4';
    const context = useContext(ShoppingCartContext);



    return (
    <div className="w-screen h-screen">
            
            <div className=" bg-white w-screen h-screen border pt-10 mt-10">
                
                <aside className="pl-4 ml-4">
                        <button className='ml-80'>
                        <XMarkIcon className='w-6 h-6'/>
                       </button>
                    <ul className='mb-80 space-y-3 cursor-pointer '> 
                        <li
                        className='mb-6 font-semibold text-xl cursor-pointer'>
                        <NavLink
                        //   to= {`${isUserSignOut ? '/sign-in' : '/'} `} 
                          onClick={() => context.setSearchByCategory()}>
                          Shopi
                        </NavLink>
                       </li>

                    

                        <li>All</li>
                        <li>Clothes</li>
                        <li>Electronics</li>
                        <li>Jewelery</li>
                        <li>Others</li>
                    </ul>
               
                

             
                    <div className='flex justify-end pr-8'>
                        <ul className='cursor-pointer space-y-2'>
                            <li>Sign In</li>
                            <li>Email</li>
                            <li>My Orders</li>
                            <li>My Account</li>
                        </ul>
                    </div>
              
    
                </aside>
            </div>
    </div>
  )
};
  
  export default Sidebar;