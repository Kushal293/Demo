import React from 'react'
import FooterLight from 'components/FooterLight/FooterLight'
import styled from 'styled-components';
import ASSETS from 'assets';
import Button from 'components/Button/Button';
import { Link } from 'react-router-dom';

const Quiz = () => {
  return (
    <Container className='bg-white'>
      <div className='w-full h-[156px] md:h-[calc(100dvh_-_80px)]'>
        <div
        className='w-full h-full banner bg-no-repeat bg-contain md:bg-cover md:bg-center'
        style={{
          backgroundImage: `linear-gradient(#17545EA6,#17545EA6),url(${ASSETS.bcsbg})`,
        }}
      >
        <p className='text-[14px] md:text-[46px] font-semibold text-white md:mt-6 max-w-[60%] md:max-w-[50%]'>
        Calculate your dog’s{' '}
          <span className='text-secondary-600'>
          Body Condition Score (BCS)    
          </span>
        </p>
        <p className='text-[10px] md:text-32px text-tritary'>Know about BCS below before starting !</p>
      </div>
      </div>
      <div className='px-[21px] md:mx-[70px] pt-3 md:pt-[28px] flex flex-col gap-2 md:gap-4 text-[8px] md:text-lg relative'>
          <p>The BCS system allows you to score your dog's body to find out if your dog is <span className='text-secondary-600'>Underweight or Overweight?</span>Obese? or in <span className='text-secondary-600'>perfect shape!</span></p>

          <p>This system is very Individual to your dog and takes into consideration <span className='text-secondary-600'>YOUR dog's height, YOUR dog's build, YOUR dog's muscle mass, and bone density,</span> whereas breed-based weight charts just don't!</p>
          <p><span className='text-secondary-600'>THIS is a Look & Feel test.</span><br/>
              You will need your dog with you to be able to perform this scoring system and enter your findings
          </p>
          <Link to="/questions">
              <Button
                label='START'
                className='!py-3 !rounded-sm !font-medium w-[43.63px] h-[13.73px] md:w-[143px] md:h-[45px] flex items-center justify-center absolute bottom-[-45px] right-[30px] md:right-0'
              />
            </Link>
      </div>
      <div className="px-[70px]">
        <FooterLight />
      </div>
    </Container>
  )
}

export default Quiz

const Container = styled.div`
  & .banner {
    /* height: calc(100dvh - 80px); */
    padding-inline: 70px;
    padding-block: 92px;
    @media (max-width: 760px) {
      padding-inline: 21px;
    padding-block: 28px;
    }
  }

  & .wrapper {
    padding-inline: 108px;
    @media (max-width: 760px) {
      padding-inline: 21px; 
    }
  }

  & .section-title {
    margin-top: 60px;
  }
`;