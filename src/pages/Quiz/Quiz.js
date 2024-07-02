import React from 'react'
import FooterLight from 'components/FooterLight/FooterLight'
import styled from 'styled-components';
import ASSETS from 'assets';
import Button from 'components/Button/Button';
import { Link } from 'react-router-dom';

const Quiz = () => {
  return (
    <Container className='bg-white'>
        <div
        className='banner bg-no-repeat bg-cover bg-center'
        style={{
          backgroundImage: `linear-gradient(#17545EA6,#17545EA6),url(${ASSETS.bcsbg})`,
        }}
      >
        <p className='text-46px font-semibold text-white mt-6 max-w-[50%]'>
        Calculate your dog’s{' '}
          <span className='text-secondary-600'>
          Body Condition Score (BCS)    
          </span>
        </p>
        <p className='text-32px text-tritary'>Know about BCS below before starting !</p>
      </div>
      <div className='mx-[70px] pt-[28px] flex flex-col gap-4 text-[18px] relative'>
          <p>The BCS system allows you to score your dog's body to find out if your dog is <span className='text-secondary-600'>Underweight or Overweight?</span>Obese? or in <span className='text-secondary-600'>perfect shape!</span></p>

          <p>This system is very Individual to your dog and takes into consideration <span className='text-secondary-600'>YOUR dog's height, YOUR dog's build, YOUR dog's muscle mass, and bone density,</span> whereas breed-based weight charts just don't!</p>
          <p><span className='text-secondary-600'>THIS is a Look & Feel test.</span><br/>
              You will need your dog with you to be able to perform this scoring system and enter your findings
          </p>
          <Link to="/questions">
              <Button
                label='START'
                className='!py-3 !rounded-sm !font-medium w-[143px] h-[45px] flex items-center justify-center absolute bottom-[-45px] right-0'
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
    height: calc(100dvh - 80px);
    padding-inline: 70px;
    padding-block: 92px;
  }

  & .wrapper {
    padding-inline: 108px;
  }

  & .section-title {
    margin-top: 60px;
  }
`;