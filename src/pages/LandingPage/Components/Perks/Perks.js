import ASSETS from 'assets';
import React from 'react';

const Perks = () => {
  return (
    <div className='grid grid-cols-5 md:gap-10 sm:gap-4 gap-2 flex-wrap justify-center  lg:px-24 md:px-14 px-4 sm:mt-0 mt-4'>
      <div className='flex col-span-1 flex-col items-center gap-[7px]'>
        <img
          src={ASSETS.noChemical}
          className='w-8 h-8 md:w-[84px] sm:w-[65px] md:h-[84px] sm:h-[65px]'
          alt=''
        />
        <p className='md:text-lg sm:text-[10px] text-[8px] text-primary-600 max-w-[15ch] text-center'>
          no preservatives or chemicals
        </p>
      </div>
      <div className='flex col-span-1 flex-col items-center gap-[7px]'>
        <img
          src={ASSETS.lion}
          className='w-8 h-8 md:w-[84px] sm:w-[65px] md:h-[84px] sm:h-[65px]'
          alt=''
        />
        <p className='md:text-lg sm:text-[10px] text-[8px] text-primary-600 max-w-[15ch] text-center'>
          Made in India Product
        </p>
      </div>
      <div className='flex col-span-1 flex-col items-center gap-[7px]'>
        <img
          src={ASSETS.dogMom}
          className='w-8 h-8 md:w-[84px] sm:w-[65px] md:h-[84px] sm:h-[65px]'
          alt=''
        />
        <p className='md:text-lg sm:text-[10px] text-[8px] text-primary-600 max-w-[15ch] text-center'>
          Company run by Pet Moms
        </p>
      </div>
      <div className='flex col-span-1 flex-col items-center gap-[7px]'>
        <img
          src={ASSETS.handMade}
          className='w-8 h-8 md:w-[84px] sm:w-[65px] md:h-[84px] sm:h-[65px]'
          alt=''
        />
        <p className='md:text-lg sm:text-[10px] text-[8px] text-primary-600 max-w-[15ch] text-center'>
          Hand-Made Products
        </p>
      </div>
      <div className='flex col-span-1 flex-col items-center gap-[7px]'>
        <img
          src={ASSETS.inHouse}
          className='w-8 h-8 md:w-[84px] sm:w-[65px] md:h-[84px] sm:h-[65px]'
          alt=''
        />
        <p className='md:text-lg sm:text-[10px] text-[8px] text-primary-600 max-w-[15ch] text-center'>
          100% Inhouse Production
        </p>
      </div>
    </div>
  );
};

export default Perks;
