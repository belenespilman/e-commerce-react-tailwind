import { XMarkIcon } from '@heroicons/react/24/solid'




const OrdersCard = (props) => {
    const {totalPrice, totalProducts } = props
    


return (
<div className="flex justify-between items-center mb-3 border border-black ">
    
    <p>
        <span>01.01.2014</span>
        <span>{totalProducts}</span>
        <span>{totalPrice}</span>
    </p>
   
 </div>
)
} 

export default OrdersCard



