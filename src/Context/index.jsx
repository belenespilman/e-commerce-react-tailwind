import { createContext, useState, useEffect } from 'react';
import { getAllProducts } from '../Utils/api';

export const ShoppingCartContext = createContext();

export const initializeLocalStorage = () => {
  const accountInLocalStorage = localStorage.getItem('account');
  const signOutInLocalStorage = localStorage.getItem('sign-out');
  let parsedAccount;
  let parsedSignOut;

  if (!accountInLocalStorage) {
    localStorage.setItem('account', JSON.stringify({}));
    parsedAccount = {};
  } else {
    parsedAccount = JSON.parse(accountInLocalStorage);
  }

  if (!signOutInLocalStorage) {
    localStorage.setItem('sign-out', JSON.stringify({}));
    parsedSignOut = false;
  } else {
    parsedSignOut = JSON.parse(signOutInLocalStorage);
  }
};

//Search products
export const ShoppingCartProvider = ({ children }) => {
  //My Account
  const [account, setAccount] = useState({});

  //Sign out
  const [signOut, setSignOut] = useState(false);

  //Shopping Cart - Increment amount
  const [count, setCount] = useState(0);

  //Product Detail - Open/Close
  const [isProductDetailOpen, setIsProductDetailOpen] = useState(false);
  const closeProductDetail = () => setIsProductDetailOpen(false);
  const openProductDetail = () => setIsProductDetailOpen(true);

  const search = (event) => {
    setSearchByTitle(event.target.value);
  };

  //Product Detail - Show product
  const [productToShow, setProductToShow] = useState({});

  //Shopping Cart - Add products to cart
  const [cartProducts, setCartProducts] = useState([]);

  //Shopping Cart - Order
  const [order, setOrder] = useState([]);

  //Checkout Side Menu - Open/Close

  const [isCheckoutSideMenuOpen, setIsCheckoutSideMenuOpen] = useState(false);
  const closeCheckoutSideMenu = () => setIsCheckoutSideMenuOpen(false);
  const openCheckoutSideMenu = () => setIsCheckoutSideMenuOpen(true);

  //Get Products
  const [items, setItems] = useState([]);

  //Get products by title
  const [searchByTitle, setSearchByTitle] = useState([]);

  // Get Products by Category
  const [searchByCategory, setSearchByCategory] = useState('');

  // Filtered Items
  const [filteredItems, setFilteredItems] = useState([]);

  //SideBar - Open-Close

  const [sidebarOpen, setSidebarOpen] = useState(false);

  const [scrollEnabled, setScrollEnabled] = useState(true);

  const toggleSidebar = () => {
    setSidebarOpen(!sidebarOpen);
    setScrollEnabled(!scrollEnabled);
    if (!scrollEnabled) {
      document.body.style.overflow = 'auto';
    } else {
      document.body.style.overflow = 'hidden';
    }
  };

  useEffect(() => {
    getAllProducts().then((res) => {
      setItems(res);
    });
  }, []);

  const filteredItemsByTitle = (items, searchByTitle) => {
    return items?.filter((item) =>
      item.title.toLowerCase().includes(searchByTitle)
    );
  };

  const filteredItemsByCategory = (items, searchByCategory) => {
    if (searchByCategory === 'clothes') {
      const filteredItems = items?.filter(
        (item) =>
          item.category.toLowerCase().includes("men's clothing") ||
          item.category.toLowerCase().includes("women's clothing")
      );
      return filteredItems;
    }
    const filteredItems = items?.filter((item) =>
      item.category.toLowerCase().includes(searchByCategory)
    );
    return filteredItems;
  };

  useEffect(() => {
    if (searchByTitle)
      setFilteredItems(filteredItemsByTitle(items, searchByTitle));
    if (searchByCategory)
      setFilteredItems(filteredItemsByCategory(items, searchByCategory));
  }, [items, searchByTitle, searchByCategory]);

  return (
    <ShoppingCartContext.Provider
      value={{
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
        setFilteredItems,
        searchByCategory,
        account,
        setAccount,
        signOut,
        setSignOut,
        sidebarOpen,
        setSidebarOpen,
        toggleSidebar,
        setSearchByCategory,
      }}
    >
      {children}
    </ShoppingCartContext.Provider>
  );
};
