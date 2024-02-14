import { CheckIcon, PlusIcon } from '@heroicons/react/24/solid';
import { useContext } from 'react';
import { ShoppingCartContext } from '../../Context';

const Card = ({ item }) => {
  const context = useContext(ShoppingCartContext);

  const showProduct = (productDetail) => {
    context.openProductDetail();
    context.setProductToShow(productDetail);
  };

  const addProductsToCart = (event, productData) => {
    if (event.stopPropagation) event.stopPropagation();
    context.setCount(context.count + 1);
    context.setCartProducts([...context.cartProducts, productData]);
    context.openCheckoutSideMenu();
  };

  const renderIcon = (id) => {
    const isInCart =
      context.cartProducts.filter((product) => product.id === id).length > 0;

    if (isInCart) {
      return (
        <div className='absolute font-semibold top-0 right-0 flex justify-center items-center bg-black w-6 h-6 rounded-full m-2 p-1'>
          <CheckIcon className='h-6 w-6 text-white'></CheckIcon>
        </div>
      );
    } else {
      return (
        <div
          className='absolute font-semibold top-0 right-0 flex justify-center items-center bg-white w-6 h-6 rounded-full m-2 p-1'
          onClick={(event) => addProductsToCart(event, item)}
        >
          <PlusIcon
            onClick={() => addProductsToCart(item)}
            className='h-6 w-6 text-black-500'
          ></PlusIcon>
        </div>
      );
    }
  };

  return (
    <div
      className='bg-white cursor-pointer w-56 h-60 rounded-lg'
      onClick={() => showProduct(item)}
    >
      <figure className='relative mb-2 w-full h-4/5'>
        <span className='absolute bottom-0 left-0 bg-white/60 rounded-lg text-black text-xs m-2 px-3 py-0.5'>
          {item.category}
        </span>
        <img
          className='w-full h-full object-cover rounded-lg'
          src={item.image}
          alt={item.title}
        />
        {renderIcon(item.id)}
      </figure>

      <p className='flex justify-between'>
        <span className='text-sm font-light truncate overflow: ellipsis'>
          {item.title}
        </span>
        <span className='text-lg font-medium'>{`$${item.price}`}</span>
      </p>
    </div>
  );
};

export default Card;
