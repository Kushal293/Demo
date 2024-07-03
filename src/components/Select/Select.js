import React from 'react';
import classNames from 'classnames';

import styled from 'styled-components';

const Select = ({ options = [], onChange, value, className, onSizeChange }) => {

  const handleSelectChange = (event) => {
    onSizeChange(event.target.value);
  };

  return (
    <Container>
      <div className={classNames('wrapper-select', className)}>
        <select
          value={value}
          className='text-primary bg-CTA h-full text-[4px] md:text-[12px] px-2 md:px-[6px] md:py-[8px]'
          id=''
          onChange={handleSelectChange}
        >
          {options.map(option => (
            <option value={option?.price}>{option?.size}</option>
          ))}
        </select>
        <div className='arrow border-t-primary-600 border border-r-[3px] border-t-[3px] border-l-[3px] md:border-t-[5px] md:border-r-[5px] md:border-l-[5px] border-transparent right-1 md:right-[11px]'></div>
      </div>
    </Container>
  );
};

export default Select;

const Container = styled.div`
  & .wrapper-select {
  
    position: relative;
    cursor: pointer;
    & .arrow {
      position: absolute;
      top: 50%;
      transform: translateY(-50%);
      pointer-events: none;
    }
  }
  & select {
    cursor: pointer;
    border: none;
    outline: none;
    -webkit-appearance: none;
    appearance: none;
    width: 100%;
    height: 100%;
    border-radius: 4px;
    position: relative;
  }
`;
