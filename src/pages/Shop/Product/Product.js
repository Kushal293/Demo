import React, { useEffect, useState } from 'react';

import { useNavigate } from 'react-router-dom';

import Counter from 'components/Counter/Counter';
import Select from 'components/Select/Select';

import ASSETS from 'assets';
import { assetsBaseUrl } from 'app.config';
// import { useCart } from 'context/CartContext';

const Product = ({ product, category, shop = false, ...other }) => {
  const navigate = useNavigate();
  const [count, setCount] = useState(1);
  // const [selectedOption, setSelectedOption] = useState(null);
  const [price, setPrice] = useState("");

  const handleSizeChange = (newPrice) => {
    setPrice(newPrice);
  }

  // const {
  //   getItemQuantity,
  //   increaseCartQuantity,
  //   decreaseCartQuantity,
  //   removeFromCart,
  // } = useCart();

  // const handleSizeChange = e => {
  //   const { value } = e.currentTarget;
  //   const size = product.sizes.find(size => size?._id === +value);
  //   setSelectedOption(size);
  // };


  const handleProductClick = () => {
    navigate(`/product/${product._id}`, { state: { product, category, shop } });
  };

  useEffect(() => {
    console.log(product);
    const sizes = product.sizes;
    if (sizes.length > 0) {
      setPrice(sizes[0]?.price);
      console.log(product?.price);
    } else {
      setPrice(product?.price);
    }
    // eslint-disable-next-line
  }, []);

  return (
    <div className='w-full flex flex-col'>
      <div
        className='w-full aspect-[1/1]  rounded-md overflow-hidden cursor-pointer'
        onClick={handleProductClick}
      >
        <img
          src={`${assetsBaseUrl}/${product.images[0].url}` || ASSETS.product}
          className='w-full h-full object-cover'
          alt=''
        />
      </div>
      <p className='text-[7.76px] md:text-lg mt-[11px] mb-[8px] md:my-6'>{product?.name}</p>
      <p className='text-[8.62px] md:text-xl text-secondary-600'>
        Rs. {price}/-
      </p>
      <div className='select mb-[15px] md:my-[22px]'>
        {product.sizes.length > 1 && (
          <Select
          options={product?.sizes} 
          onSizeChange={handleSizeChange}
          className="w-[55px] h-[14px] [&_.arrow]:!translate-y-2 md:w-[50%] md:h-full md:[&_.arrow]:!translate-y-0"
          />
        )}
      </div>
      <div className='flex items-center gap-1 md:gap-4 mt-2'>
        <Counter count={count} setCount={setCount} className="w-[31px] h-[13px] rounded-sm" />
        <button className='text-[6.5px] md:text-sm text-white rounded-sm md:rounded-md font-semibold bg-secondary-600 px-1 py-[2px] md:px-2 md:py-[5px]'>
          ADD TO CART
        </button>
      </div>
    </div>
  );
};

export default Product;
