import {useContext} from 'react'
import { XMarkIcon } from '@heroicons/react/24/solid'
import { ShoppingCartContext } from '../../Context'

const ProductDetail = () => {
    const context = useContext(ShoppingCartContext)
return (
    <aside 
    className= {`${context.isProductDetailOpen ? 'flex': 'hidden'} top-[68px] w-[360px] h-[calc(100vh-68px)] bottom-flex flex-col border border-black rounded fixed right-0 bg-white`}>
        <div className='flex justify-between items-center p-6'>
            <h2 className='font-medium text-xl'>Detail</h2>
            <div>
                <XMarkIcon className="h-6 w-6 text-black-500"></XMarkIcon>    
            </div>  
        </div>
    </aside>
)
}

export default ProductDetail

