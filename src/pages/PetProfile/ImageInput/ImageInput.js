import React, { useId } from 'react';

import styled from 'styled-components';

const ImageInput = ({...other}) => {
  const imagePicker = useId();
  return (
    <label
      className='bg-tritary rounded-lg cursor-pointer h-[200px] w-[120px] md:h-[184px] md:w-[184px]'
      htmlFor={imagePicker}
    >
      <div className='h-full w-full flex justify-center items-center'>
        <p className='text-[10px] md:text-lg text-primary-600'>
          Upload Image <br />
          of your doggo
        </p>
      </div>
      <input type='file' name='' id={imagePicker} accept=".jpeg, .png, .jpg" className='hidden' {...other} />
    </label>
  );
};

export default ImageInput;

// const Container = styled.label`
//   width: 184px;
//   height: 184px;

  
// `;
