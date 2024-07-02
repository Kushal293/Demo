import ASSETS from 'assets';
import Counter from 'components/Counter/Counter';
import Select from 'components/Select/Select';
import React from 'react';

const Suppliment = () => {
  return (
    <div className='flex flex-col md:flex-row items-stretch'>
      <div className='wrapper '>
        <div className='image aspect-[1/0.9] h-full'>
          <img src={ASSETS.suppliment} alt='' className='h-full object-cover' />
        </div>
      </div>
      <div className='flex-grow flex flex-col gap-[25px] mt-4 md:mt-0'>
        <p className='text-lg'>Gut Feeling (Acidity / gas relief )</p>
        <p className='text-xl text-secondary-600'>Rs. 125/-</p>
        <Select />
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

export default Suppliment;
