import React, { useEffect, useState } from 'react';

import { useNavigate } from 'react-router-dom';

import Counter from 'components/Counter/Counter';
import Select from 'components/Select/Select';

import ASSETS from 'assets';
import { assetsBaseUrl } from 'app.config';
// import { useCart } from 'context/CartContext';

const Product = ({ product, category, shop = false }) => {
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
      <p className='text-lg my-6'>{product?.name}</p>
      <p className='text-xl text-secondary-600'>
        Rs. {price}/-
      </p>
      <div className='select my-[22px]'>
        {product.sizes.length > 1 && (
          <Select
          options={product?.sizes} 
          onSizeChange={handleSizeChange}
          />
        )}
      </div>
      <div className='flex items-center gap-4 mt-auto'>
        <Counter count={count} setCount={setCount} />
        <button className='text-sm text-white rounded-md font-semibold bg-secondary-600 px-2 py-[5px]'>
          ADD TO CART
        </button>
      </div>
    </div>
  );
};

export default Product;
