import React from 'react';

import { Splide, SplideSlide, SplideTrack } from '@splidejs/react-splide';
import '@splidejs/splide/dist/css/splide.min.css';
import { useNavigate } from 'react-router-dom';
import { useSelector } from 'react-redux';

import '@splidejs/react-splide/css';
import Button from 'components/Button/Button';

import styled from 'styled-components';
import { assetsBaseUrl } from 'app.config';
import ASSETS from 'assets';

const HomeSlider = () => {
  const navigate = useNavigate();

  const { sliders } = useSelector(state => state.data);

  const handleClick = (type) => {
    if(type === "BUY SUPPLEMENTS") {
      navigate('/shop');
    }
    else if(type === "EXPLORE NOW") {
      navigate('/choice');
    }
    else if(type === "CONSULT NOW") {
      navigate('/consult');
    }
  };

  return (
    <Container className='relative'>
      {sliders?.length > 0 && (
        <Splide
          className='slider'
          hasTrack={false}
          options={{
            perPage: 1,
            perMove: 1,
            rewind: true,
            autoplay: true,
            speed: 1000,
            interval: 3000,
            pagination: true,
          }}
        >
          <SplideTrack className="Splide__track">
            {sliders.map(slide => (
              <SplideSlide
                className='slide md:h-[calc(100vh_-_80px)] sm:h-[460px]  h-[229px] sm:mt-0 mt-[50px]'
                key={slide._id}
              >
                <div
                  className='w-full h-full flex bg-cover bg-center bg-no-repeat'
                  style={{
                    backgroundImage: `url(${assetsBaseUrl}/${slide?.image})`,
                  }}
                >
                  <div className='flex-grow  max-w-[60%] bg-primary-600-65% flex flex-col justify-center md:p-16 sm:p-8 p-6'>
                    <h1 className='lg:text-main-title md:text-4xl sm:text-3xl text-sm md:leading-main-title font-semibold text-white'>
                      {slide.title}
                    </h1>
                    <h2 className='lg:text-32px sm:text-2xl text-[12px] mt-3 text-white'>
                      {slide.description}
                    </h2>
                    <div className='md:mt-25 sm:mt-14 mt-10'>
                      <Button
                        label={slide.button_title}
                        onClick={() => handleClick(slide.button_title)}
                        className="text-[7px] md:text-lg px-2 py-1"
                      />
                    </div>
                  </div>
                </div>
              </SplideSlide>
            ))}
           </SplideTrack>
          <div className="splide__pagination splide__pagination--custom w-fit h-32 z-50"></div>
        </Splide>
      )}
    </Container>
     );
    };

export default HomeSlider;

const Container = styled.div`
  & .splide__arrows {
    display: none;
  }
  & .splide__pagination {
    position: absolute;
    left: 50%;
    transform: translateX(-50%);

    @media (max-width: 480px) {
       top: 140px;
    }
 }
  `;
