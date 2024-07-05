import ASSETS from 'assets';
import Button from 'components/Button/Button';
import React from 'react';
import { Link } from 'react-router-dom';

const IdealWeight = () => {
  return (
    <div className='md:pt-24 md:pb-4 pb-2 sm:pt-12 pt-6'>
      <div className='flex'>
        <div className='flex-grow flex flex-col justify-end lg:h-[450px] md:h-[350px] sm:h-[200px] h-[144px] relative max-w-[75%] bg-primary-600 rounded-se-[36px] px-4 lg:py-12  md:py-8 py-[14px]'>
          <span className='lg:text-4xl md:text-3xl sm:text-xl  text-sm text-white font-normal md:max-w-none max-w-[20ch]'>
            Check your Dog’s{' '}
            <span className='text-secondary-600'>Body Condition Score</span>
          </span>
          <p className='lg:text-2xl md:text-base sm:text-[10px] text-[8px] md:mt-6  mt-2 text-white font-normal max-w-[45ch]'>
            <span className='text-secondary-600'>
              Ideal weight is the most important health marker ever.
            </span>{' '}
            Let’s check and maintain your cutie's weight and diet
          </p>
          <div>
            <Link to="/quiz" >
              <Button
                label='CALCULATE NOW'
                className='lg:mt-20 md:mt-16 mt-[22px] text-[7px] md:text-lg px-2 py-2'
              />
            </Link>
          </div>

          <img
            src={ASSETS.dog2}
            className='absolute bottom-0 right-0 translate-x-[60%] lg:w-[423px] md:w-[300px] sm:w-[170px] w-[129px]'
            alt=''
          />
        </div>
        <div className='lg:min-w-[350px] md:min-w-[300px] sm:min-w-[200px] min-w-[60px]'></div>
      </div>
      <div className='lg:p-12 md-6 sm-4 p-3'>
        <p className='lg:text-2xl md:text-base sm:text-sm text-[10px]  text-primary-600 text-center'>
          The biggest fear for pet parents is that they feel they dont know how
          to move towards better products and better food, because they have
          been convinced, they will make a MISTAKE if they try!
        </p>
        <br />
        <p className='lg:text-xl md:text-sm sm:text-[12px] text-[8px] text-black-100 text-center'>
          THIS is where a highly qualified and expirienced nutritionist comes
          in! Our consults are designed to educate you and make you independent!
        </p>
      </div>
    </div>
  );
};

export default IdealWeight;
