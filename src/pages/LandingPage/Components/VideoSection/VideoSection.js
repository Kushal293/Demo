import React from 'react';

import styled from 'styled-components';
import { useSelector } from 'react-redux';

import ASSETS from 'assets';

const VideoSection = () => {
  const { videos } = useSelector(state => state.data);
  return (
    <div className='md:px-12 md:py-24 sm:px-8 px-6 sm:py-12 py-8'>
      <div className='grid grid-cols-4 sm:gap-5 gap-2'>
        {videos.map(video => (
          <div
            key={video._id}
            className='rounded-md overflow-hidden relative'
            style={{ aspectRatio: '1/0.75' }}
          >
            <iframe
              style={{ width: '100%', height: '100%' }}
              src={video.url}
              title='YouTube video player'
              frameborder='0'
              allow='accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share'
              referrerPolicy='strict-origin-when-cross-origin'
              allowFullScreen
            ></iframe>
          </div>
        ))}
      </div>

      <div className='flex justify-end mt-4 mb-8'>
        <img
          src={ASSETS.watchInsta}
          className='md:w-[265px] sm:w-[165px] w-[120px]'
          alt=''
        />
      </div>
      <FlexBox className='flex md:gap-12 sm:gap-6 gap-4 relative'>
        <div className='flex-1 sm:px-4 px-2'>
          <p className='md:text-2xl text-[10px] flex items-center text-primary-600'>
            <img src={ASSETS.quote} className='self-start mr-3' alt='' />
            Fresh food can often mean unbalanced and incomplete nutrition. To
            help your dog combat that and still give your dog the best food
            there is, every Doggiliciouus meal is carefully balanced
            <img src={ASSETS.quote} className='self-end' alt='' />
          </p>
          <div className='flex justify-end mt-4'>
            <p className='md:text-2xl text-lg text-secondary-600'>
              Kate & Buffy
            </p>
          </div>
        </div>
        <div className='lg:pr-16 md:pr-12 sm:pr-6 pr-4'>
          <img src={ASSETS.dogAndGril} className='md:w-[155px] w-20' alt='' />
        </div>
      </FlexBox>
    </div>
  );
};

export default VideoSection;

const FlexBox = styled.div`
  &::before {
    content: '';
    position: absolute;
    width: 3px;
    height: 79px;
    background-color: #17545e;
    left: 0;
    top: 0;
  }
  &::after {
    content: '';
    position: absolute;
    width: 3px;
    height: 79px;
    background-color: #17545e;
    right: 0;
    bottom: 0;
  }
`;
