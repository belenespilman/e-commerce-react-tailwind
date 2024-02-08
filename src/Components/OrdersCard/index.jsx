import { ChevronRightIcon } from '@heroicons/react/24/solid'
import { ShoppingBagIcon } from '@heroicons/react/24/solid'
import { CalendarDaysIcon} from '@heroicons/react/24/solid'
import { currentDate } from '../../Utils'

const OrdersCard = (props) => {
    const {totalPrice, totalProducts } = props
    


return (
<div className="flex justify-between items-center w-[320px] h-full p-4 border border-black rounded-lg shadow-lg  mb-4 cursor-pointer">
    
    <div className='flex justify-between w-full'>

    <div className='flex flex-col'>

        <div className="flex items-center">

            <CalendarDaysIcon className="h-6 w-6 text-black-500 cursor-pointer"/>
            <span className='font-light ml-2'>{currentDate()}</span>
        </div>


        <div className="flex items-center mt-3">

            <ShoppingBagIcon className="h-6 w-6 text-black-500"/>
            <span className='font-light ml-2'>{totalProducts} articles</span>
        </div>
    </div>

    <p className='flex items-center gap-3'>

        <span className='font-medium text-2xl '>${totalPrice}</span>
        <ChevronRightIcon className="h-6 w-6 text-black-500 mt-1 cursor-pointer"/>

    </p>
        
    </div>
   
 </div>
)
} 

export default OrdersCard



