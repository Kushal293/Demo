import classNames from 'classnames';
import React from 'react';
// import { useCart } from 'context/CartContext';

const Counter = ({ count, setCount, id, className }) => {

  // const { getItemQuantity,
  //   increaseCartQuantity,
  //   decreaseCartQuantity,
  //   removeFromCart,
  // } = useCart();

  // const quantity = getItemQuantity(id);

  const handleIncrement = () => {
    setCount(count + 1);
  };

  const handleDecrement = () => {
    if (count === 1) return;
    setCount(count - 1);
  };
  return (
    <div className=''>
      <div
        className={classNames(
          'flex items-center justify-between px-[6px] bg-CTA h-[29px] w-[71px] rounded-md',
          className
        )}
      >
        <span
          className='text-sm text-primary-600'
          role='button'
          onClick={handleDecrement}
        >
          -
        </span>
        <span className='text-sm text-primary-600'>{count}</span>
        <span
          className='text-sm text-primary-600'
          role='button'
          onClick={handleIncrement}
        >
          +
        </span>
      </div>
    </div>
  );
};

export default Counter;
