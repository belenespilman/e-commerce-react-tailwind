import { createContext, useState } from 'react'

export const ShoppingCartContext = createContext();

export const ShoppingCartProvider = ({children}) => {


    //Shopping Cart - Increment amount
    const [count, setCount]= useState(0);

    //Product Detail - Open/Close
    const [isProductDetailOpen, setIsProductDetailOpen] = useState(false);
    const closeProductDetail = () => setIsProductDetailOpen(false)
    const openProductDetail= () => setIsProductDetailOpen(true)
        
    //Product Detail - Show product
    const [productToShow, setProductToShow] = useState({});
    
    
    //Shopping Cart - Add products to cart
    const [cartProducts, setCartProducts] = useState([]);
    
    //Checkout Side Menu - Open/Close

    const [isCheckoutSideMenuOpen, setIsCheckoutSideMenuOpen] = useState(false);
    const closeCheckoutSideMenu = () => setIsCheckoutSideMenuOpen(false)
    const openCheckoutSideMenu= () => setIsCheckoutSideMenuOpen(true)
    
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
        setIsCheckoutSideMenuOpen
        }}>

        {children}
        </ShoppingCartContext.Provider>
    )
}



