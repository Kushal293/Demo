import ASSETS from 'assets';
import Button from 'components/Button/Button';
import React from 'react';
import { Link } from 'react-router-dom';

const OurStory = () => {
  return (
    <>
      <div className='lg:pl-10 lg:pr-10 pl-6 pr-0 '>
        <div className='flex mt-[10px] items-center lg:gap-12 md:gap-6 sm:gap-4 gap-[2px]'>
          <div className='flex-1'>
            <p className='lg:text-2xl md:text-base sm:text-[12px] text-[10px] text-primary-600 font-normal'>
              When it comes to the health if your beloved... this is the REAL
              deal! We are your best friend !
            </p>
            <p className='lg:text-4xl md:text-2xl sm:text-xl text-sm mt-3 mb-3 text-secondary-600'>
              Our Story
            </p>

            <p className='lg:text-sm md:text-[12px] sm:text-[10px] text-[8px] text-black-100 font-light'>
              Many years ago when we started looking at the market for the right
              kind of dog nutritional supplements and healthy meat based high
              quality treats, made with the right ingredients, the right
              quality, perhaps organic raw materials, preservative free and
              formulations that are potent enough to give results - we came up
              with a blank. Very few products existed, and they were not
              available in India.
              <br />
              <br />
            </p>
            <p className='lg:text-sm md:text-[12px] sm:text-[10px] text-[8px] text-black-100 font-light'>
              This helplessness is where the Root-ted In Love product range was
              born! With the desire to heal and nourish the bodies of our
              client's dogs. Our ingredient handling, and processing is frankly
              better than most human kitchens. We drind and blend all out
              products 100% inhouse.
            </p>
            <p className='lg:text-2xl md:text-sm sm:text-[12px] text-[10px] md:mt-7 text-primary-600 mt-3'>
              We believe in the following: NO Nonsense nutrition! We do as we
              say! You get what your see! Products that work!
            </p>
            <Link to="/about-us">
              <Button label='ABOUT US' className='lg:mt-12 mt-3 mb-4' />
            </Link>
          </div>
          <div className='lg:w-[402px] md:w-[300px] sm:w-[200px] w-[132px] pt-3'>
            <img src={ASSETS.dog} className='w-full' alt='' />
          </div>
        </div>
      </div>
      <div className='flex justify-between lg:px-10 md:px-6 sm:px-4 px-1'>
        <div className='flex flex-col gap-2 items-center'>
          <p className='lg:text-28px md:text-2xl text-sm text-secondary-600'>
            5000+
          </p>
          <p className='lg:text-lg md:text-base text-[8px] text-primary-600'>
            Healthier Dogs
          </p>
        </div>
        <div className='flex flex-col gap-2 items-center'>
          <p className='lg:text-28px md:text-2xl text-sm text-secondary-600'>
            8000+
          </p>
          <p className='lg:text-lg md:text-base text-[8px] text-primary-600'>
            Adoring Pet Parents
          </p>
        </div>
        <div className='flex flex-col gap-2 items-center'>
          <p className='lg:text-28px md:text-2xl text-sm text-secondary-600'>
            10,00,000+
          </p>
          <p className='lg:text-lg md:text-base text-[8px] text-primary-600'>
            Kilos of food cooked
          </p>
        </div>
        <div className='flex flex-col gap-2 items-center'>
          <p className='lg:text-28px md:text-2xl text-sm text-secondary-600'>
            84 months+
          </p>
          <p className='lg:text-lg md:text-base text-[8px] text-primary-600 text-center'>
            Months of RnD in Natural Health
          </p>
        </div>
      </div>
    </>
  );
};

export default OurStory;
