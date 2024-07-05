import React from 'react';

import ASSETS from 'assets';
import Button from 'components/Button/Button';
import { Link } from 'react-router-dom';

const MealTopper = () => {
  return (
    <div className='md:py-24 sm:py-14 py-3 md:px-24 sm:px-14 px-9  flex flex-col items-center'>
      <p className='md:text-4xl sm:text-2xl text-sm text-primary-600  font-medium text-center max-w-[25ch]'>
        Looking for Meal Toppers with{' '}
        <span className='text-secondary-600'>Health Benefits</span>
      </p>
      <p className='md:text-sm sm:text-[10px] text-[8px] font-light mb-4 mt-2 text-black text-center max-w-[70ch] '>
        Choose Fresh, Whole Ingredient, Real, Biological blends for your dogs in
        stead of synthetic factory made ingredients! Why do Nature-Similar
        synthetics When you can do Nature itself!
      </p>
      <div className='flex justify-center items-start md:mt-12 sm:mt-8 mt-4 md:gap-[70px] sm:gap-[70px] gap-[30px]'>
        <div className='lg:w-[360px] md:w-[280px] sm:w-[250px] w-[150px]'>
          <p className='lg:text-xl md:text-base sm:text-[10px] text-[8px] text-primary-600 text-center'>
            Explore{' '}
            <span className='text-secondary-600'>Supplement options</span> that
            best suits your doggo
          </p>
          <div className='image-container  mt-[10px] bg-no-repeat bg-center bg-cover rounded-full relative'>
            <img src={ASSETS.circle} className='z-20 w-full' alt='' />
            <div
              className='absolute px-8 md:w-[100%] sm:w-[105%] w-[118%]'
              style={{
                top: '50%',
                left: '50%',
                transform: 'translate(-50%,-50%)',
              }}
            >
              <img
                src={ASSETS.circleImage1}
                className='w-full h-full object-cover z-10'
                alt=''
              />
            </div>
            <div className='absolute right-0 bottom-0'>
              <Link to="/choice">
              <Button label='EXPLORE NOW' className="text-[7px] md:text-lg px-2 py-2" />
              </Link>
            </div>
          </div>
        </div>
        <div className='lg:w-[360px] md:w-[280px] sm:w-[250px] w-[150px] '>
          <p className='lg:text-xl md:text-base sm:text-[10px] text-[8px] text-primary-600 text-center'>
            Give your Dog the{' '}
            <span className='text-secondary-600'>gift of health </span>
            <br />
            <br />
          </p>
          <div className='image-container  mt-[10px] bg-no-repeat bg-center bg-cover rounded-full relative'>
            <img src={ASSETS.circle} className='z-20 w-full' alt='' />
            <div
              className='absolute px-8 md:w-[100%] sm:w-[105%] w-[118%]'
              style={{
                top: '50%',
                left: '50%',
                transform: 'translate(-50%,-50%)',
              }}
            >
              <img src={ASSETS.circleImage2} className='w-full' alt='' />
            </div>
            <div className='absolute right-0 bottom-0'>
              <Link to="/shop">
              <Button label='SHOP NOW' className="text-[7px] md:text-lg px-2 py-2" />
              </Link>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default MealTopper;
