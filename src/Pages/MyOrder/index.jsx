import {useContext} from 'react'
import Layout from "../../Components/Layout"
import { ShoppingCartContext } from '../../Context'
import OrderCard from '../../Components/OrderCard'

function MyOrder() {
  const context = useContext(ShoppingCartContext)

    return (

    <Layout>
      My Order
      <div className='flex flex-col w-80'>
            {
                context.order?.slice(-1)[0].products.map(product=> (
                    <OrderCard 
                    key={product.id}
                    id= {product.id}
                    title={product.title} 
                    price={product.price}
                    imageURL={product.image}
                    />
                ))
             }
            </div>
    </Layout>
    )
  }
  
  export default MyOrder