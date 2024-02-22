import { useContext } from 'react';
import { XMarkIcon } from '@heroicons/react/24/solid';
import { ShoppingCartContext } from '../../Context';

const ProductDetail = () => {
  const context = useContext(ShoppingCartContext);

  return (
    <aside
      className={`${context.isProductDetailOpen ? 'flex' : 'hidden'} top-[68px] w-[360px] h-[calc(100vh-68px)] bottom-flex flex-col border border-black rounded fixed right-0 bg-white`}
    >
      <div className='flex justify-between items-center p-6'>
        <h2 className='font-medium text-xl'>Detail</h2>
        <div>
          <XMarkIcon
            className='h-6 w-6 text-black-500 cursor-pointer'
            onClick={() => context.closeProductDetail()}
          ></XMarkIcon>
        </div>
      </div>
      <figure className='px-10 py-10'>
        <img
          className='w-56 h-60 ml-8 rounded-lg'
          src={context.productToShow.image}
          alt={context.productToShow.title}
        />
      </figure>
      <p className='flex flex-col p-6'>
        <span className='font-medium text-md mb-2'>
          {' '}
          ${context.productToShow.price}
        </span>
        <span className='font-medium text-2xl'>
          {context.productToShow.title}
        </span>
        <span className='font-light text-sm'>
          {context.productToShow.description}
        </span>
      </p>
    </aside>
  );
};

export default ProductDetail;
