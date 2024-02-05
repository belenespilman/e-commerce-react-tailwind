import { createContext, useState } from 'react'

export const ShoppingCartContext = createContext();

export const ShoppingCartProvider = ({children}) => {


    //Shopping Cart - Increment amount
    const [count, setCount]= useState(0);

    //Product Detail - Open - Close
    const [isProductDetailOpen, setIsProductDetailOpen] = useState(false);
    const closeProductDetail = () => setIsProductDetailOpen(false)
    const openProductDetail= () => setIsProductDetailOpen(true)
        
    //Product Detail - Show product
    const [productToShow, setProductToShow] = useState({});
    
    
    // SHopping Cart - Add products to cart
    const [cartProducts, setCartProducts] = useState([]);
    
    
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
        setCartProducts
        }}>

        {children}
        </ShoppingCartContext.Provider>
    )
}



