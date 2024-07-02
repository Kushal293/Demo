import React from 'react';
import classNames from 'classnames';

import styled from 'styled-components';

const Select = ({ options = [], onChange, value, className }) => {
  return (
    <Container>
      <div className={classNames('wrapper-select', className)}>
        <select
          value={value}
          className='text-primary bg-CTA h-full'
          id=''
          onChange={onChange}
        >
          {options.map(option => (
            <option value={option.value}>{option.label}</option>
          ))}
        </select>
        <div className='arrow border-t-primary-600'></div>
      </div>
    </Container>
  );
};

export default Select;

const Container = styled.div`
  & .wrapper-select {
    width: 123px;
    position: relative;
    cursor: pointer;
    & .arrow {
      position: absolute;
      right: 11px;
      top: 50%;
      transform: translateY(-50%);
      border-left: 5px solid transparent;
      border-right: 5px solid transparent;
      border-top: 5px solid;
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
    font-size: 14px;
    padding: 6px 8px;
    border-radius: 4px;
    position: relative;
  }
`;
