import ASSETS from 'assets';
import classNames from 'classnames';
import React, { useState } from 'react';

import styled from 'styled-components';

const Checkbox = ({ label }) => {
  const [checked, setChecked] = useState(false);

  const toggle = () => setChecked(!checked);
  return (
    <div
      className='flex gap-4 items-center cursor-pointer'
      onClick={toggle}
    >
      <img src={checked ? ASSETS.checkboxFilled : ASSETS.checkbox} alt='' />
      <p
        className={classNames(
          'text-[10px] md:text-lg',
          checked ? 'text-secondary-600' : 'text-white'
        )}
      >
        {label}
      </p>
    </div>
  );
};

export default Checkbox;

