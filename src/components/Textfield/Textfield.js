import React from 'react';

import styled from 'styled-components';

const Textfield = ({ placeholder, ...other }) => {
  return (
    <Container>
      <div className='input-container'>
        <input
          placeholder= {placeholder}
          className='text-[8px] md:text-lg border-b border-dashed md:border-solid md:border-b-white bg-transparent pb-1 md:py-[10px] text-white placeholder:text-tritary'
          {...other}
          
        />
      </div>
    </Container>
  );
};

export default Textfield;

const Container = styled.div`
  width: 100%;
  max-width: 600px;
  flex: 1;
  & .input-container {
    width: 100%;
    & input {
      outline: none;
      width: 100%;
    }
  }
`;
