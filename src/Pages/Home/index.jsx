import {useState, useEffect} from 'react'
import Layout from '../../Components/Layout'
import Card from '../../Components/Card'
import { getAllProducts } from '../../utils/api';

function Home() {

  const [items, setItems]= useState([]);

  useEffect(()=> {
    getAllProducts().then(res => {
      console.log(res)
      setItems(res)
    });
  }, [])

    return (
      
      <Layout>
        Home
        <div className='grid gap-4 grid-cols-4 w-full max-w-screen-lg '>
        {
          items.map((item)=>{
            return <Card key={item.id} item={item}  />
          })
        }

        </div>
        
        
      </Layout>
      
      
    )
  }
  
  export default Home