import ASSETS from 'assets';
import React from 'react';
import { useNavigate } from 'react-router-dom';

const Footer = () => {

  const navigate = useNavigate();
  return (
    <div className='bg-primary-600 md:pt-12 sm:pt-6 pt-2'>
      <div className='flex justify-center'>
        <img
          src={ASSETS.gallery}
          className='md:max-w-[786px] max-w-[80%]'
          alt=''
        />
      </div>
      <div className='bg-secondary-50 md:px-12 px-6 pt-6 pb-8 md:mt-12 sm:mt-6 mt-2'>
        <p className='md:text-4xl sm:text-2xl text-xl font-medium text-white'>
          Subscribe to our News Letter
        </p>
        <p className='md:text-xl sm:text-base text-sm text-black mt-3 mb-5'>
          Let’s stay connected
        </p>

        <div className='mail-box flex mt-2 bg-secondary-100 rounded-md'>
          <input
            type='email'
            name=''
            id=''
            className='flex-1 bg-transparent border-none outline-none md:text-sm text-xs  md:px-5 px-3 text-black-100 placeholder:opacity-1'
            placeholder='Mail ID ...'
          />
          <button className='md:text-2xl sm:text-lg text-sm cursor-pointer text-white h-full md:p-5 p-3 bg-secondary-600 rounded-md'>
            SUBMIT
          </button>
        </div>
      </div>
      <div className='footer lg:pt-20 md:pt-14 sm:pt-8 pt-5 lg:px-16 md:px-10 sm:px-6 px-5 flex pb-12 items-center gap-9'>
        <div className='flex-grow max-w-[470px] flex flex-col gap-7 items-start'>
          <img src={ASSETS.logo} className='md:h-[70px] h-[17px]' alt='' />
          <p className='md:text-sm sm:text-[10px] text-[6px] text-white md:max-w-[100%] max-w-[40ch]'>
            Doggiliciouus started as{' '}
            <span className='text-secondary-600'>
              India's 1st Qualified canine nutritionist designed organic Fresh
              dog food brand!
            </span>{' '}
            And from that labor of love was born-Root-ted In Love. Our organic
            natural effective dog{' '}
            <span className='text-secondary-600'>
              wellness supplements and Dehydrated treats.
            </span>
          </p>
        </div>
        <div className='flex-grow'>
          <p className='md:text-lg sm:text-xs text-[6px] text-white'>
            Quick Links
          </p>

          <div className='flex md:mt-5 mt-3 justify-between gap-3'>
            <div className='flex flex-col'>
              <div className='flex gap-2 items-center'>
                <span className='h-1 w-1 rounded-full bg-gray-400'></span>
                <p className='md:text-sm sm:text-[10px] text-[6px] text-gray-400'>
                  {' '}
                  Supplements
                </p>
              </div>
              <div className='flex gap-2 items-center'>
                <span className='h-1 w-1 rounded-full bg-gray-400'></span>
                <p className='md:text-sm sm:text-[10px] text-[6px] text-gray-400'>
                  {' '}
                  Treats
                </p>
              </div>
              <div className='flex gap-2 items-center'>
                <span className='h-1 w-1 rounded-full bg-gray-400'></span>
                <p className='md:text-sm sm:text-[10px] text-[6px] text-gray-400'>
                  {' '}
                  BCS
                </p>
              </div>
              <div className='flex gap-2 items-center'>
                <span className='h-1 w-1 rounded-full bg-gray-400'></span>
                <p className='md:text-sm sm:text-[10px] text-[6px] text-gray-400'>
                  {' '}
                  Dog Profile{' '}
                </p>
              </div>
              <div className='flex gap-2 items-center'>
                <span className='h-1 w-1 rounded-full bg-gray-400'></span>
                <p className='md:text-sm  sm:text-[10px] text-[6px] text-gray-400'>
                  {' '}
                  Account{' '}
                </p>
              </div>
            </div>
            <div className='flex flex-grow md:justify-evenly md:flex-row flex-col gap-2'>
              <div className='flex flex-col'>
                <div className='flex gap-2 items-center'>
                  <span className='h-1 w-1 rounded-full bg-gray-400'></span>
                  <p className='md:text-sm sm:text-[10px] text-[6px] text-gray-400'>
                    {' '}
                    Customization & Consultation
                  </p>
                </div>
                <div className='flex gap-2 items-center'>
                  <span className='h-1 w-1 rounded-full bg-gray-400'></span>
                  <p className='md:text-sm sm:text-[10px] text-[6px] text-gray-400'>
                    {' '}
                    Contact Us
                  </p>
                </div>
                <div className='flex gap-2 items-center cursor-pointer' onClick={() => navigate('/terms')}>
                  <span className='h-1 w-1 rounded-full bg-gray-400'></span>
                  <p className='md:text-sm sm:text-[10px] text-[6px] text-gray-400'>
                    {' '}
                    Terms & Conditions
                  </p>
                </div>
                <div className='flex gap-2 items-center cursor-pointer' onClick={() => navigate('/policies')}>
                  <span className='h-1 w-1 rounded-full bg-gray-400'></span>
                  <p className='md:text-sm sm:text-[10px] text-[6px] text-gray-400'>
                    {' '}
                    Pricavy Policies
                  </p>
                </div>

                <div className='links flex flex-nowrap gap-3 md:mt-9 sm:mt-4 mt-2'>
                  <img
                    src={ASSETS.facebook}
                    className='md:w-5 md:h-5 h-[10px] w-[10px]'
                    alt=''
                  />
                  <img
                    src={ASSETS.twitter}
                    className='md:w-5 md:h-5 h-[10px] w-[10px]'
                    alt=''
                  />
                  <img
                    src={ASSETS.linkedIn}
                    className='md:w-5 md:h-5 h-[10px] w-[10px]'
                    alt=''
                  />
                  <img
                    src={ASSETS.insta}
                    className='md:w-5 md:h-5 h-[10px] w-[10px]'
                    alt=''
                  />
                </div>
              </div>
              <div>
                <p className='md:text-sm sm:text-[10px] text-[6px] text-gray-400'>
                  woof@doggiliciouus.com
                  <br />
                  <br />
                  +919980018461
                </p>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Footer;
