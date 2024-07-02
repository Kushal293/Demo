import React from 'react';

import styled from 'styled-components';
import { Link } from 'react-router-dom';

import ASSETS from 'assets';
import Select from 'components/Select/Select';
import Button from 'components/Button/Button';
import FooterLight from 'components/FooterLight/FooterLight';
import { useCart } from 'context/CartContext'; 
import CartItem from './CartItem/CartItem';

const Cart = () => {

  const { cartItems } = useCart();

  return (
    <Container>
      <div className='w-full bg-tritary h-[51px] flex items-center '></div>
      <div className='content px-[70px]'>
        <table className='mt-[-51px] w-full'>
          <thead>
            <tr className='h-[51px]'>
              <th className='text-lg text-left font-normal w-[40%]'>Product</th>
              <th className='text-lg text-left font-normal'>Price</th>
              <th className='text-lg text-left font-normal'>Quantity</th>
              <th className='text-lg text-left font-normal'>Total</th>
              <th className='text-lg'></th>
            </tr>
          </thead>
          <tbody>
          {
            cartItems.map(item => (
              <CartItem key={item.id} {...item} />
            ))
          }
          </tbody>
        </table>
        <div className='flex justify-end mt-[14px] mb-8 gap-6'>
          <Link to='/pet-suppliment-details'>
            <Button
              label='BACK'
              className='!py-3 !rounded-sm bg-transparent !text-primary-600 !font-medium border border-primary-600'
            />
          </Link>
          <Link to='/shop'>
            <Button
              label='DIRECT TO SHOP'
              className='!py-3 !rounded-sm !font-medium'
            />
          </Link>
        </div>

        <div className='flex justify-end'>
          <div className='w-full max-w-[513px] bg-tritary px-6 py-2 rounded-lg'>
            <div className='flex justify-between items-center border-b pt-2 pb-3 border-b-CTA'>
              <p className='text-sm'>Sub total</p>
              <p className='text-sm'>Rs. 650</p>
            </div>
            <div className='flex justify-between items-center border-b pt-2 pb-3 border-b-CTA'>
              <p className='text-sm'>Sub total</p>
              <p className='text-sm'>Rs. 650</p>
            </div>
            <div className='flex justify-between items-center pt-2 pb-3'>
              <p className='text-sm text-secondary-600'>Sub total</p>
              <p className='text-sm text-secondary-600'>Rs. 650</p>
            </div>
          </div>
        </div>

        <div className='flex justify-end mt-2 mb-4 gap-6'>
          <Link to='/order-success'>
            <Button
              label='PROCEED TO CHECKOUT'
              className='!py-3 !rounded-sm !font-medium'
            />
          </Link>
        </div>

        <p className='text-26px text-primary-600 text-medium mb-8'>
          You may like these Hot Selling Products
        </p>

        <div className='flex gap-2 justify-between px-10'>
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
      </div>
      <div className='shadow'></div>
      <div className='px-[70px]'>
        <FooterLight />
      </div>
    </Container>
  );
};

export default Cart;

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
