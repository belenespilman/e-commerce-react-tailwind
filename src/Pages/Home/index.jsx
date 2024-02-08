import {useContext} from 'react'
import Layout from '../../Components/Layout'
import Card from '../../Components/Card'
import ProductDetail from '../../Components/ProductDetail'
import {ShoppingCartContext} from '../../Context'


function Home() {

  const context = useContext(ShoppingCartContext)


  const renderView = () => {
    if (context.searchByTitle?.length > 0) {
      if (context.filteredItems?.length > 0) {
        return (
          context.filteredItems?.map((item)=>{
            return <Card key={item.id} item={item}  />
          })
        )
      } else {
        return ( 
        <div>
          <h1>We don't have that product :( </h1>
        </div>
        )
      }

    } else {
      return (
        context.items?.map((item)=>{
          return <Card key={item.id} item={item}  />
        })
      )
      
       
      
    }
  }


    return (
      
      <Layout>
       <div className="flex items-center justify-center relative w-80 mb-5">
          <h1 className="font-meduim text-xl">Exclusive Products</h1>
        </div> 

        <input 
        className='rounded-lg border-[0.5px] border-gray-400 w-80 p-4 mb-5 focus: outline-none'
        type="text" 
        placeholder='Search a product'
        onChange={(event) => context.search(event)}/>
        
        
        
        <div className='grid gap-4 grid-cols-4 w-full max-w-screen-lg '>
       
        {renderView ()}

        </div>
      
      <ProductDetail/>  
      </Layout>
      
      
    )
  }
  
  export default Home