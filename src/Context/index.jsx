import { createContext, useState, useEffect } from 'react'
import { getAllProducts } from '../Utils/api';

export const ShoppingCartContext = createContext();

//Search products
export const ShoppingCartProvider = ({children}) => {



    //Shopping Cart - Increment amount
    const [count, setCount]= useState(0);

    //Product Detail - Open/Close
    const [isProductDetailOpen, setIsProductDetailOpen] = useState(false);
    const closeProductDetail = () => setIsProductDetailOpen(false)
    const openProductDetail= () => setIsProductDetailOpen(true)

    const search = (event) => {
      setSearchByTitle(event.target.value)
    }
        
    //Product Detail - Show product
    const [productToShow, setProductToShow] = useState({});
    
    
    //Shopping Cart - Add products to cart
    const [cartProducts, setCartProducts] = useState([]);
    
    //Shopping Cart - Order
    const [order, setOrder] = useState([]);

    //Checkout Side Menu - Open/Close

    const [isCheckoutSideMenuOpen, setIsCheckoutSideMenuOpen] = useState(false);
    const closeCheckoutSideMenu = () => setIsCheckoutSideMenuOpen(false)
    const openCheckoutSideMenu= () => setIsCheckoutSideMenuOpen(true)
    
    //Get Products 
    const [items, setItems]= useState([]);



    //Get products by title
    const [searchByTitle, setSearchByTitle]= useState([]);
    
    // Filtered Items
    const [filteredItems, setFilteredItems]= useState([]);
   

    useEffect(()=> {
        getAllProducts().then(res => {
          console.log(res)
          setItems(res)
        });
      }, [])

    const filteredItemsByTitle = (items, searchByTitle) => {
        return items?.filter(item => item.title.toLowerCase().includes(searchByTitle))
    }

   
    useEffect(()=> {
      if (searchByTitle) setFilteredItems(filteredItemsByTitle(items, searchByTitle))
      
    }, [items, searchByTitle])

  

    return (
        <ShoppingCartContext.Provider value={{
        count,
        setCount, 
        openProductDetail,
        closeProductDetail, 
        isProductDetailOpen,
        productToShow,
        setProductToShow,
        cartProducts,
        setCartProducts,
        closeCheckoutSideMenu,
        openCheckoutSideMenu,
        isCheckoutSideMenuOpen,
        setIsCheckoutSideMenuOpen,
        order,
        setOrder,
        items,
        setItems, 
        searchByTitle,
        setSearchByTitle,
        search, 
        filteredItems,
        setFilteredItems
        }}>

        {children}
        </ShoppingCartContext.Provider>
    )
}



