import ASSETS from 'assets';
import React from 'react';
import { useNavigate } from 'react-router-dom';

const FooterLight = () => {

  const navigate = useNavigate();

  return (
    <div className='footer pt-20 flex pb-6 items-center gap-9 flex-wrap'>
      <div className='flex-grow max-w-[470px] flex flex-col gap-7 items-start'>
        <img src={ASSETS.logoLight} className='h-[70px]' alt='' />
        <p className='text-sm text-primary'>
          Doggiliciouus started as{' '}
          <span className='text-secondary-600'>
            India's 1st Qualified canine nutritionist designed organic Fresh dog
            food brand!
          </span>{' '}
          And from that labor of love was born-Root-ted In Love. Our organic
          natural effective dog{' '}
          <span className='text-secondary-600'>
            wellness supplements and Dehydrated treats.
          </span>
        </p>
        <div className='flex items-start justify-between w-full'>
          <div>
            <p className='text-sm text-primary-600'>
                woof@doggiliciouus.com
                <br />
                <br />
                +919980018461
              </p>
          </div>
          <div className='links flex gap-3 mr-9 mt-1'>
              <img src={ASSETS.facebook} alt='' />
              <img src={ASSETS.twitter} alt='' />
              <img src={ASSETS.linkedIn} alt='' />
              <img src={ASSETS.insta} alt='' />
            </div>
        </div>
      </div>
      <div className='flex-grow items-start'>
        <p className='text-lg text-primary'>Quick Links</p>

        <div className='flex mt-5 justify-between flex-col md:flex-row'> 
          <div className='flex flex-col'>
            <div className='flex gap-2 items-center cursor-pointer' onClick={() => navigate('/shop')}>
              <span className='h-1 w-1 rounded-full bg-gray-400'></span>
              <p className='text-sm text-primary-600'> Supplements</p>
            </div>
            <div className='flex gap-2 items-center cursor-pointer' onClick={() => navigate('/shop')}>
              <span className='h-1 w-1 rounded-full bg-gray-400'></span>
              <p className='text-sm text-primary-600'> Treats</p>
            </div>
            <div className='flex gap-2 items-center cursor-pointer' onClick={() => navigate('/quiz')}>
              <span className='h-1 w-1 rounded-full bg-gray-400'></span>
              <p className='text-sm text-primary-600'> BCS</p>
            </div>
            <div className='flex gap-2 items-center cursor-pointer' onClick={() => navigate('/prt-profile')}>
              <span className='h-1 w-1 rounded-full bg-gray-400'></span>
              <p className='text-sm text-primary-600'> Dog Profile </p>
            </div>
            <div className='flex gap-2 items-center cursor-pointer' onClick={() => navigate('/profile')}>
              <span className='h-1 w-1 rounded-full bg-gray-400'></span>
              <p className='text-sm text-primary-600'> Account </p>
            </div>
          </div>
        </div>
      </div>
      <div className='flex flex-col'>
            <div className='flex items-center mt-9'>
              <div className='bg-primary-600 w-[100px] md:w-[230px] h-[1.5px] rounded-md'/>
              <p className='text-[14px] md:text-[18px] text-nowrap text-primary-600 bg-white px-1 md:px-3'>Populer search</p>
              <div className='bg-primary-600 w-[100px] md:w-[230px] h-[1.5px] rounded-md'/>
            </div>
            <div className='flex mt-5 justify-between flex-col md:flex-row gap-7'> 
              <div className='flex flex-col gap-[2px]'>
                <div className='flex gap-2 items-center'>
                  <span className='h-1 w-1 rounded-full bg-gray-400'></span>
                  <p className='text-sm text-primary-600'> german shepherd food</p>
                </div>
                <div className='flex gap-2 items-center'>
                  <span className='h-1 w-1 rounded-full bg-gray-400'></span>
                  <p className='text-sm text-primary-600'> hypoallergenic dog food</p>
                </div>
                <div className='flex gap-2 items-center'>
                  <span className='h-1 w-1 rounded-full bg-gray-400'></span>
                  <p className='text-sm text-primary-600'> puppy food</p>
                </div>
                <div className='flex gap-2 items-center'>
                  <span className='h-1 w-1 rounded-full bg-gray-400'></span>
                  <p className='text-sm text-primary-600'> shih tzu food </p>
                </div>
              </div>
              <div className='flex flex-col gap-[2px]'>
                <div className='flex gap-2 items-center'>
                  <span className='h-1 w-1 rounded-full bg-gray-400'></span>
                  <p className='text-sm text-primary-600'> wet dog food</p>
                </div>
                <div className='flex gap-2 items-center'>
                  <span className='h-1 w-1 rounded-full bg-gray-400'></span>
                  <p className='text-sm text-primary-600'> husky food</p>
                </div>
                <div className='flex gap-2 items-center'>
                  <span className='h-1 w-1 rounded-full bg-gray-400'></span>
                  <p className='text-sm text-primary-600'> beagle food</p>
                </div>
                <div className='flex gap-2 items-center'>
                  <span className='h-1 w-1 rounded-full bg-gray-400'></span>
                  <p className='text-sm text-primary-600'> pug food </p>
                </div>
                <div className='flex gap-2 items-center'>
                  <span className='h-1 w-1 rounded-full bg-gray-400'></span>
                  <p className='text-sm text-primary-600'> pomeranian food </p>
                </div>
                <div className='flex gap-2 items-center'>
                  <span className='h-1 w-1 rounded-full bg-gray-400'></span>
                  <p className='text-sm text-primary-600'> healthy homemade dog food </p>
                </div>
              </div>
              <div className='flex flex-col gap-[2px]'>
                <div className='flex gap-2 items-center'>
                  <span className='h-1 w-1 rounded-full bg-gray-400'></span>
                  <p className='text-sm text-primary-600'> homemade dog food</p>
                </div>
                <div className='flex gap-2 items-center'>
                  <span className='h-1 w-1 rounded-full bg-gray-400'></span>
                  <p className='text-sm text-primary-600'> german shepherd puppy food</p>
                </div>
                <div className='flex gap-2 items-center'>
                  <span className='h-1 w-1 rounded-full bg-gray-400'></span>
                  <p className='text-sm text-primary-600'> best dog food for allergies</p>
                </div>
                <div className='flex gap-2 items-center'>
                  <span className='h-1 w-1 rounded-full bg-gray-400'></span>
                  <p className='text-sm text-primary-600'> human grade dog food </p>
                </div>
              </div>
        </div>
          </div>
          
    </div>
  );
};

export default FooterLight;
