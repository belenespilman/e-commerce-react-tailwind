import {useContext} from 'react'
import { XMarkIcon } from '@heroicons/react/24/solid'
import { ShoppingCartContext } from '../../Context'
import OrderCard from '../OrderCard'
import './styles.css'


const CheckoutSideMenu = () => {
    const context = useContext(ShoppingCartContext)
    
       
    return (
        <aside 
        className= {`${context.isCheckoutSideMenuOpen ? 'flex': 'hidden'} checkout-side-menu top-[68px] w-[360px] h-[calc(100vh-68px)] bottom-flex flex-col border border-black rounded fixed right-0 bg-white`}>
            <div className='flex justify-between items-center p-6'>
                <h2 className='font-medium text-xl'>My Order</h2>
                <div>
                    <XMarkIcon 
                    className="h-6 w-6 text-black-500 cursor-pointer"
                    onClick= {()=> context.closeCheckoutSideMenu()}
                    
                    ></XMarkIcon>    
                </div>  
            </div>

            <div className='px-6'>
            {
            context.cartProducts.map((product)=> (
                <OrderCard 
                key={product.id}
                title={product.title} 
                price={product.price}
                imageURL={product.image}      
                            />
            ))
          }
            </div>
            
         
        </aside>
    )
}

export default CheckoutSideMenu 
