import ASSETS from 'assets';
import Counter from 'components/Counter/Counter';
import Select from 'components/Select/Select';
import React from 'react';

const AddOns = () => {
  return (
    <div className='flex flex-col md:flex-row items-stretch gap-4'>
      <div className='wrapper '>
        <div className='image h-full md:w-[126px] md:h-[132px]'>
          <img src={ASSETS.suppliment} alt='' className='h-full object-cover' />
        </div>
      </div>
      <div className='flex-grow flex flex-col gap-[10px]'>
        <p className='text-lg'>Gut Feeling (Acidity / gas relief )</p>
        <div className='flex items-center gap-1'>
          <p className='text-xl text-secondary-600'>Rs. 125/-</p>
          <Select />
        </div>
        <div className='flex items-center gap-4'>
          <Counter />
          <button className='text-sm text-white rounded-md font-semibold bg-secondary-600 px-2 py-[5px]'>
            ADD TO CART
          </button>
        </div>
      </div>
    </div>
  );
};

export default AddOns;
