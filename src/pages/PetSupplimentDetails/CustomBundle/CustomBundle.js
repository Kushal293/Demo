import ASSETS from 'assets';
import React from 'react';

const CustomBundle = () => {
  return (
    <div className='w-full relative shadow-lg px-[10px] py-3 rounded-md'>
      <img src={ASSETS.offTag} className='absolute top-0 left-1' alt='' />
      <div className='img'>
        <img src={ASSETS.bundle} alt='' className='w-full' />
      </div>
      <div className='flex items-center gap-4 mt-4 mb-3'>
        <span className='text-secondary-600'>2</span> Supplements
        <div className='h-4 w-[2px] bg-primary-600'></div>
        <span className='text-secondary-600'>1</span> Treat
      </div>
      <div className='flex flex-col gap-2'>
        <div className='flex items-center gap-2'>
          <div className='circle w-2 h-2 rounded-full bg-CTA'></div>
          <p className='text-sm text-CTA'>
            Joint Venture/Gut feeling / Kefir Probiotic - 25gms
          </p>
        </div>
        <div className='flex items-center gap-2'>
          <div className='circle w-2 h-2 rounded-full bg-CTA'></div>
          <p className='text-sm text-CTA'>
            Joint Venture/Gut feeling / Kefir Probiotic - 25gms
          </p>
        </div>
        <div className='flex items-center gap-2'>
          <div className='circle w-2 h-2 rounded-full bg-CTA'></div>
          <p className='text-sm text-CTA'>Buff organs - 50gms</p>
        </div>
      </div>
      <div className='flex justify-between items-center mt-4'>
        <div className='price relative before:content-none '>
          <p className='text-sm text-secondary-600'>Rs. 550/-</p>
          <div className='absolute w-20 h-[1px] bg-red-700 rotate-[173deg] bottom-2'></div>
        </div>
        <button className='text-sm text-white rounded-md font-semibold bg-secondary-600 px-2 py-[5px]'>
          ADD
        </button>
      </div>
      <div className='flex justify-between items-center mt-2'>
        <p className='text-sm text-primary-600'>Rs. 470/-</p>
        <p className='text-sm text-primary-600'>Customizable </p>
      </div>
    </div>
  );
};

export default CustomBundle;
