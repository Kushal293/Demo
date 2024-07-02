import React, { useState } from 'react';

import Button from 'components/Button/Button';
import Suppliment from './Suppliment/Suppliment';
import AddOns from './AddOns/AddOns';
import { Link } from 'react-router-dom';

import ASSETS from 'assets';
import styled from 'styled-components';
import FooterLight from 'components/FooterLight/FooterLight';
import CustomBundle from './CustomBundle/CustomBundle';
import { useEffect } from 'react';
import { getPetProfileById } from 'http';
import { assetsBaseUrl } from 'app.config';

const PetSupplimentDetails = () => {

  const [details, setDetails] = useState({});

  const pet_Id = JSON.parse(localStorage.getItem("pet_id"));

  const getPetData = async() => {
    const pet = await getPetProfileById(pet_Id);

    // console.log(pet?.data?.data);
    setDetails(pet?.data?.data);
  }
  
  useEffect(() => {
     getPetData();
  },[])
  return (
    <div className='px-6 md:px-[70px] py-6'>
      <p className='text-[18px] text-center md:text-left md:text-46px font-semibold'>
        Doggo’s <span className='text-secondary-600'>Supplement</span> Details
      </p>
      <fieldset className='border border-primary-600 rounded-md pl-[14px] pr-[16px] md:py-4 md:px-6 mt-4'>
        <legend className='text-[10px] md:text-lg bg-white border border-primary-600 rounded md:rounded-md px-[10px] py-[5px] md:py-3 md:px-4 text-primary ml-5'>
          Pet Profile
        </legend>
        <fieldset className='border border-primary-600 rounded-md p-5 md:py-5 md:px-6'>
          <legend className='text-[10px] md:text-lg bg-white border border-primary-600 rounded-md px-[10px] py-[5px] md:py-3 text-primary md:px-4 ml-auto mr-5'>
            General
          </legend>
          <div className='flex md:gap-5 relative h-full md:h-auto w-full md:w-auto md:items-stretch'>
            <div className='h-[200px] w-[120px] md:h-[184px] md:w-[184px] rounded-lg overflow-hidden aspect-[1/1]'> 
              <img
                src={`${assetsBaseUrl}/${details?.image}` || ASSETS.petProfile}
                alt=''
                className='w-full h-full object-cover '
              />
            </div>
            <div className='flex-grow flex flex-1 flex-col md:flex-row items-center md:gap-12 md:justify-between '>
              <div className='md:flex-grow flex flex-col gap-2 md:gap-2 w-full md:w-auto pl-[15px] md:pl-0'>
                <div className='w-full max-w-[600px] border-b border-dashed border-primary-600 md:border-solid md:border-b-primary-600 py-1 md:py-[10px]'>
                  <p className='text-[8px] md:text-lg text-primary-600'>{details?.name}</p>
                </div>
                <div className='w-full max-w-[600px] border-b border-dashed border-primary-600 md:border-solid md:border-b-primary-600 py-1 md:py-[10px]'>
                  <p className='text-[8px] md:text-lg text-primary-600'>{details?.dob}</p>
                </div>
                <div className='w-full max-w-[600px] border-b border-dashed border-primary-600 md:border-solid md:border-b-primary-600 py-1 md:py-[10px]'>
                  <p className='text-[8px] md:text-lg text-primary-600'>
                  {details?.sex}
                  </p>
                </div>
              </div>
              <div className='md:flex-grow flex flex-col gap-2 md:gap-2 w-full md:w-auto pl-[15px] md:pl-0'>
                <div className='w-full max-w-[600px] border-b border-dashed border-primary-600 md:border-solid md:border-b-primary-600 py-1 md:py-[10px]'>
                  <p className='text-[8px] md:text-lg text-primary-600'>{details?.breed_type} </p>
                </div>
                <div className='w-full max-w-[600px] border-b border-dashed border-primary-600 md:border-solid md:border-b-primary-600 py-1 md:py-[10px]'>
                  <p className='text-[8px] md:text-lg text-primary-600'>{details?.weight} </p>
                </div>
                <div className='w-full max-w-[600px] border-b border-dashed border-primary-600 md:border-solid md:border-b-primary-600 py-1 md:py-[10px]'>
                  <p className='text-[8px] md:text-lg text-primary-600'>
                  {details?.is_neutered ? "Neutered" : "Un neutered"} {' '}
                  </p>
                </div>
              </div>
            </div>
            <div className='md:flex md:flex-col md:justify-end md:pl-4'>
              <Button
                label='EDIT'
                className='text-[8px] md:text-[18px] !px-3 !py-1 md:px-6 md:py-[9px] rounded-sm font-medium absolute md:static bottom-0 right-0'
              />
            </div>
          </div>
        </fieldset>
        <fieldset className='border border-primary-600 py-5 mt-[14px] md:mt-10 rounded-md pt-1 pb-3 px-6 mb-3'>
          <legend className='text-[10px] md:text-lg bg-white rounded-md border border-primary-600 py-[5px] md:py-3 text-primary px-[7px] md:px-4 ml-auto mr-5'>
            Pick Health Condition
          </legend>
          <div className='flex flex-col gap-4 md:grid md:grid-cols-1 max-w-[800px] md:gap-[28px]'>
            {
              details.health_conditions.map((condition) => {
                return (
                  <p key={condition?.health_condition_id} className='text-lg text-primary-600'>{condition?.name} </p>
                )
              })
            }
          </div>
          <div className='flex justify-end'>
            <Button
              label='EDIT'
              className='px-6 py-[9px] rounded-sm !font-medium'
            />
          </div>
        </fieldset>
      </fieldset>
      {/* Selection */}

      <p className='text-[24px] text-center md:text-left md:text-26px text-primary font-medium my-7'>
        <span className='text-secondary-600'>Customize</span> your selection
      </p>
      <fieldset className='border border-primary-600 rounded-md py-6 px-6 mt-4'>
        <legend className='text-lg bg-white border border-primary-600 rounded-md py-3 text-primary px-4 ml-5'>
          Choose Supplements
        </legend>
        <div className='grid grid-cols-1 md:grid-cols-2 gap-20'>
          <Suppliment />
          <Suppliment />
          <Suppliment />
          <Suppliment />
          <Suppliment />
        </div>
      </fieldset>
      <fieldset className='border border-primary-600 rounded-md py-6 px-6 mt-12'>
        <legend className='text-lg bg-white border border-primary-600 rounded-md py-3 text-primary px-4 ml-5'>
          Add Ons
        </legend>
        <div className='grid grid-cols-1 md:grid-cols-3' style={{ gap: '52px 8px' }}>
          <AddOns />
          <AddOns />
          <AddOns />
          <AddOns />
          <AddOns />
        </div>
      </fieldset>
      <div className='flex justify-end mt-7 gap-6'>
        <Link to='/pet-profile'>
          <Button
            label='BACK'
            className='!py-3 !rounded-sm bg-transparent !text-primary-600 !font-medium border border-primary-600'
          />
        </Link>
        <Link to='/cart'>
          <Button
            label='ADD TO CART'
            className='!py-3 !rounded-sm !font-medium'
          />
        </Link>
      </div>
      <p className='text-26px text-primary-600 font-medium mt-2'>
        Customize <span className='text-secondary-600'>Bundle</span>
      </p>
      <p className='text-sm text-primary mt-3'>
        Pack your own bundle now at{' '}
        <span className='text-secondary-600'>unbelievable Price !</span>
      </p>
      <Grid>
        <CustomBundle />
        <CustomBundle />
      </Grid>
      <FooterLight />
    </div>
  );
};

export default PetSupplimentDetails;

const Grid = styled.div`
  display: grid;
  grid-template-columns: repeat(auto-fill, minmax(303px, 1fr));
  gap: 45px;
  margin-block: 32px 62px;
`;
