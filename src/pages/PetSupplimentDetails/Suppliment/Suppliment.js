import { assetsBaseUrl } from 'app.config';
import ASSETS from 'assets';
import Counter from 'components/Counter/Counter';
import Select from 'components/Select/Select';
import React, { useState } from 'react';

const Suppliment = ({sup}) => {

  const [count, setCount] = useState(1);
  const [price, setPrice] = useState(sup?.sizes[0]?.price);

  const handleSizeChange = (newPrice) => {
    setPrice(newPrice);
  }
  return (
    <div className='flex flex-row gap-3 md:items-stretch'>
      <div className='wrapper '>
        <div className='image aspect-[1/0.9] w-[62px] md:w-auto h-full'>
          <img src={`${assetsBaseUrl}/${sup?.image}`} alt='' className='h-[64px] md:h-full object-contain md:object-cover' />
        </div>
      </div>
      <div className='flex-grow flex flex-col md:gap-[25px] mt-0'>
        <p className='text-[6px] md:text-lg mb-[5px] md:mb-0'>{sup?.name}</p>
        <p className='text-[6.6px] md:text-xl text-secondary-600 mb-1'>Rs. {price}/-</p>
        <Select options={sup?.sizes} onSizeChange={handleSizeChange} className="w-[40.62px] md:w-[123px] md:h-[32px] h-[10px] flex md:flex-none md:items-center mb-2 md:mb-0" />
        <div className='flex items-center gap-1 md:gap-4'>
          <Counter count={count} setCount={setCount} className="w-[23.45px] h-[9.58px] text-[4.62px]" />
          <button className='text-white rounded-md font-semibold bg-secondary-600 md:px-2 md:py-[5px] p-0 w-[41px] h-[10px] text-[4.62px] md:text-sm md:w-[123px] md:h-[29px]'>
            ADD TO CART
          </button>
        </div>
      </div>
    </div>
  );
};

export default Suppliment;
