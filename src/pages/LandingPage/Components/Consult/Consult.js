import ASSETS from 'assets';
import Button from 'components/Button/Button';
import React from 'react';
import { Link } from 'react-router-dom';

const Consult = () => {
  return (
    <div className='bg-secondary-100 lg:px-12 md:px-6 px-6 flex lg:gap-14 md:gap-6 sm:gap-4 gap-[6px] '>
      <div
        className='lg:min-w-[378px] md:min-w-[300px] sm:min-w-[230px] min-w-[128px] bg-no-repeat bg-cover bg-center'
        style={{ backgroundImage: `url(${ASSETS.woman})` }}
      ></div>
      <div className='flex-1 md:pb-12 sm:pb-6 md:pt-11 sm:pt-6 pt-2 pb-2'>
        <p className='lg:text-2xl md:text-xl sm:text-sm text-[10px] text-primary-600'>
          The way your dog's{' '}
          <span className='text-secondary-600'>
            food, supplements and treats
          </span>{' '}
          should be!
        </p>
        <p className='lg:text-4xl md:text-2xl sm:text-lg text-sm text-secondary-600 mt-3'>
          Canine nutritionist designed ....
        </p>
        <p className='md:text-sm sm:text-[12px] text-[8px] text-black-100 mt-6'>
          Fresh dog food can often mean imbalanced, incomplete and inappropriate
          ingredients if it is not species appropriate and made with the
          adequate proteins and fats. Educating your self on what is{' '}
          <span className='text-secondary-600'>NEEDED</span> by our dogs to be
          healthy and happy, is the best way to combat fear of feeding fresh dog
          food. <br />
          <br /> Our consultation process is designed to give your high quality
          science based knowlege that will make you confident and ready to start
          your Fresh feeding journey, or to UP your game, if you are already
          feeding fresh food to your dog.
        </p>
        <Link to="/consult">
          <Button label='CONSULT NOW' className='md:mt-10 sm:mt-6 mt-2 text-[7px] md:text-lg px-2 py-2' />
        </Link>
      </div>
    </div>
  );
};

export default Consult;
