import classNames from 'classnames';
import React from 'react';

const Button = ({ label, className, ...rest }) => {
  return (
    <button
      {...rest}
      className={classNames(
        'md:px-10 md:py-4 sm:px-6 sm:py-2 bg-secondary-600 md:text-lg text-white md:rounded-lg rounded sm:text-base',
        className
      )}
    >
      {label}
    </button>
  );
};

export default Button;
