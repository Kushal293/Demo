import React from 'react';

import { Link } from 'react-router-dom';

import ASSETS from 'assets';

const MyChoice = () => {
  return (
    <div
      className='bg-primary-600-65% flex-grow flex flex-col justify-center px-4 md:px-[70px] relative md:static bg-no-repeat md:bg-right-bottom bg-contain md:bg-auto bg-right'
      style={{
        backgroundImage: `url(${ASSETS.choiceDog}), url(${ASSETS.circleBig})`,
        // backgroundPosition: '100% 100%, 100% 80%',
      }}
    >
      <p className='text-[22px] md:text-46px text-white font-semibold absolute top-14 left-6 md:left-auto md:top-auto md:static'>
        Let us know <span className='text-secondary-600'>your choice</span>
      </p>
      <div className='flex flex-col justify-stretch max-w-[645px] gap-5 mt-[123px]'>
        <Link to='/pet-profile'>
          <button className='flex items-center gap-1 md:gap-6 bg-white px-8 md:px-11 py-3 rounded-md shadow-custom w-full'>
            <img src={ASSETS.description} alt='' className='h-[24px] w-[24px] md:h-auto md:w-auto' />
            <p className='text-[12px] md:text-xl '>
              My Doggo is special and we need your help{' '}
            </p>
          </button>
        </Link>
        <Link to='/shop'>
          <button className='flex items-center gap-1 md:gap-6 bg-primary-600 px-8 md:px-11 py-3 rounded-md shadow-custom w-full'>
            <img src={ASSETS.storefront} alt='' className='h-[24px] w-[24px] md:h-auto md:w-auto' />
            <p className='text-[12px] md:text-xl text-white'>
              Direct me to shop ( Find all items)
            </p>
          </button>
        </Link>
      </div>
    </div>
  );
};

export default MyChoice;
