import classNames from 'classnames';
import React from 'react';
// import { useCart } from 'context/CartContext';

const Counter = ({ count=1, setCount, id, className }) => {


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
          'flex items-center justify-between px-1 md:px-[6px] bg-CTA md:h-[29px] md:w-[71px] rounded-md',
          className
        )}
      >
        <span
          className='text-[4.62px] md:text-sm text-primary-600 flex items-center justify-center'
          role='button'
          onClick={handleDecrement}
        >
          -
        </span>
        <span className='text-[4.62px] md:text-sm text-primary-600 flex items-center justify-center'>{count}</span>
        <span
          className='text-[4.62px] md:text-sm text-primary-600 flex items-center justify-center'
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
