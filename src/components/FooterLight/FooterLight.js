import ASSETS from 'assets';
import React from 'react';

const FooterLight = () => {
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
      </div>
      <div className='flex-grow'>
        <p className='text-lg text-primary'>Quick Links</p>

        <div className='flex mt-5 justify-between flex-col md:flex-row'> 
          <div className='flex flex-col'>
            <div className='flex gap-2 items-center'>
              <span className='h-1 w-1 rounded-full bg-gray-400'></span>
              <p className='text-sm text-primary-600'> Supplements</p>
            </div>
            <div className='flex gap-2 items-center'>
              <span className='h-1 w-1 rounded-full bg-gray-400'></span>
              <p className='text-sm text-primary-600'> Treats</p>
            </div>
            <div className='flex gap-2 items-center'>
              <span className='h-1 w-1 rounded-full bg-gray-400'></span>
              <p className='text-sm text-primary-600'> BCS</p>
            </div>
            <div className='flex gap-2 items-center'>
              <span className='h-1 w-1 rounded-full bg-gray-400'></span>
              <p className='text-sm text-primary-600'> Dog Profile </p>
            </div>
            <div className='flex gap-2 items-center'>
              <span className='h-1 w-1 rounded-full bg-gray-400'></span>
              <p className='text-sm text-primary-600'> Account </p>
            </div>
          </div>
          <div className='flex flex-col'>
            <div className='flex gap-2 items-center'>
              <span className='h-1 w-1 rounded-full bg-gray-400'></span>
              <p className='text-sm text-primary-600'>
                {' '}
                Customization & Consultation
              </p>
            </div>
            <div className='flex gap-2 items-center'>
              <span className='h-1 w-1 rounded-full bg-gray-400'></span>
              <p className='text-sm text-primary-600'> Contact Us</p>
            </div>
            <div className='flex gap-2 items-center'>
              <span className='h-1 w-1 rounded-full bg-gray-400'></span>
              <p className='text-sm text-primary-600'> Terms & Conditions</p>
            </div>
            <div className='flex gap-2 items-center'>
              <span className='h-1 w-1 rounded-full bg-gray-400'></span>
              <p className='text-sm text-primary-600'> Privacy Policies</p>
            </div>

            <div className='links flex gap-3 mt-9'>
              <img src={ASSETS.facebook} alt='' />
              <img src={ASSETS.twitter} alt='' />
              <img src={ASSETS.linkedIn} alt='' />
              <img src={ASSETS.insta} alt='' />
            </div>
          </div>
          <div>
            <p className='text-sm text-primary-600'>
              woof@doggiliciouus.com
              <br />
              <br />
              +919980018461
            </p>
          </div>
        </div>
      </div>
    </div>
  );
};

export default FooterLight;
