import { assetsBaseUrl } from 'app.config';
import ASSETS from 'assets';
import Counter from 'components/Counter/Counter';
import Select from 'components/Select/Select';
import React, { useState } from 'react';

const AddOns = ({add}) => {
  
  const [count, setCount] = useState(1);
  const [price, setPrice] = useState(add?.sizes[0]?.price);

  const handleSizeChange = (newPrice) => {
    setPrice(newPrice);
  }

  return (
    <div className='flex md:items-stretch gap-[1.5px] md:gap-4'>
      <div className='wrapper '>
        <div className='image h-[38px] w-[37.16px] md:w-[126px] md:h-[132px]'>
          <img src={`${assetsBaseUrl}/${add?.image}`} alt='' className='h-full object-cover' />
        </div>
      </div>
      <div className='flex-grow flex flex-col md:gap-[20px]'>
        <p className='text-[5.31px] md:text-lg'>{add?.name}</p>
        <div className='flex items-center mb-[2px]'>
          <p className='text-[5px] md:text-xl text-secondary-600 mr-1'>Rs. {price}/-</p>
          <Select options={add?.sizes} onSizeChange={handleSizeChange} className="w-[36px] md:w-[123px] md:h-[32px] h-[8.55px] flex md:flex-none md:items-center" />
        </div>
        <div className='flex items-center md:gap-4'>
          <Counter count={count} setCount={setCount} className="w-[23.45px] h-[9px] text-[4.62px]" />
          <button className='ml-1 text-white rounded-md font-semibold bg-secondary-600 md:px-2 md:py-[5px] p-0 w-[36px] h-[9px] text-[4.62px] md:text-sm md:w-[123px] md:h-[29px]'>
            ADD TO CART
          </button>
        </div>
      </div>
    </div>
  );
};

export default AddOns;
