import React from 'react';

import styled from 'styled-components';

import ASSETS from 'assets';
import FooterLight from 'components/FooterLight/FooterLight';
import Button from 'components/Button/Button';

const OrderSuccess = () => {
  return (
    <Container>
      <div className='flex flex-col px-10 pt-[77px] justify-center items-center'>
        <div className='gif w-[303px] h-[303px] bg-gray-100'></div>
        <p className='text-32px text-primary-600 mt-11'>
          Order Placed Successfully!
        </p>
        <Button
          label='TRACK ORDER'
          className='!text-lg font-semibold !rounded-md mt-[61px]'
        />
      </div>
      <div className='flex gap-2 justify-between px-10 mt-[159px]'>
        <div>
          <img
            src={ASSETS.suppliment}
            className='w-[212px] h-[200px] object-cover'
            alt=''
          />
          <p className='text-lg text-center mt-3'>Quick Heal Balm</p>
        </div>
        <div>
          <img
            src={ASSETS.suppliment}
            className='w-[212px] h-[200px] object-cover'
            alt=''
          />
          <p className='text-lg text-center mt-3 w-[212px]'>
            Organic Paw & Snout Butter
          </p>
        </div>
        <div>
          <img
            src={ASSETS.suppliment}
            className='w-[212px] h-[200px] object-cover'
            alt=''
          />
          <p className='text-lg text-center mt-3 w-[212px]'>
            Chicken Bits (Single ingredient)
          </p>
        </div>
        <div>
          <img
            src={ASSETS.suppliment}
            className='w-[212px] h-[200px] object-cover'
            alt=''
          />
          <p className='text-lg text-center mt-3 w-[212px]'>
            Chicken neck (Single ingredient)
          </p>
        </div>
      </div>
      <div className='shadow'></div>
      <div className='px-[70px]'>
        <FooterLight />
      </div>
    </Container>
  );
};

export default OrderSuccess;

const Container = styled.div`
  & td {
    padding-block: 26px 35px;
    border-bottom: 1px solid #bababa;
  }

  & .shadow {
    box-shadow: 0px 4px 4px 0px #00000040;
    margin-block: 39px;
    height: 4px;
  }
`;
