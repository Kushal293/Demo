import FooterLight from 'components/FooterLight/FooterLight'
import React, { useEffect, useState } from 'react'
import styled from 'styled-components';
import ASSETS from 'assets';
import Button from 'components/Button/Button';
import Consult from 'pages/LandingPage/Components/Consult/Consult';
import { Link } from 'react-router-dom';
import { getRequest } from 'http';
import { assetsBaseUrl, baseUrl } from 'app.config';
import { data } from 'store/models/data';

const Result = () => {
  console.log(JSON.parse(localStorage.getItem("quiz")));

  const [id, setId] = useState(1);
  const [result, setResult] = useState({});

  const getResult = async () => {
    const url = `${baseUrl}/rooted_in_love/user/bsc/result/get?option=${id}`;
    const res = await getRequest(url);

    // console.log(res?.data);
    setResult(res?.data);
  }

  useEffect(() => {
    getResult();
    // console.log(id);
  },[id])
  return (
    <Container className='bg-white'>
      <div className='flex px-[21px] md:px-[70px]'>
          <div className='mt-[60px] md:mt-[90px]'>
              <p className='text-[14px] md:text-46px font-semibold text-secondary-600 mt-6'>
              Result Time ! 
              </p>
              <p className='text-[10px] md:text-32px text-primary-600'>
              Check Your Dog’s BCS Result
              </p>
          </div>
          <img src={ASSETS.q6} alt='dog' className='w-[204px] h-[180px] md:w-fit md:h-fit md:ml-[50px]' />
        </div>
        <div className='flex flex-col items-center justify-center px-[70px] mb-[42px]'>
          <div className='text-primary-600 w-[63.42px] md:w-[208px] h-[19.5px] md:h-[63px] border border-primary-600 font-medium text-center text-[11px] md:text-[36px] mb-[9px] md:mb-[28px]'>
            SCORE 0{result?.score}
          </div>
          <p className='text-[8px] md:text-[26px] font-medium text-center w-8/12 md:w-6/12 mb-4 md:mb-[50px]'>
          {result?.title}
          </p>
          <div className='flex gap-[6px]'>
            <div className='flex flex-col items-center gap-2 md:gap-5'>
              <div className={`${id === 1 ? "bg-secondary-600 text-tritary" :"bg-tritary text-[#322100]"} flex items-center justify-center h-[17.13px] w-[17.13px] md:h-[56.17px] md:w-[56.17px] text-[6px] md:text-[20px] text-center rounded-full`}>
              1
              </div>
              <div className={`${id === 1 ? "bg-secondary-600 text-[#322100]" : "bg-primary-600 text-tritary"} text-[6px] md:text-lg w-[54px] h-[43px] md:w-[177px] md:h-[141px] flex flex-col items-center justify-between pb-[11px] md:pb-[43px] pt-[6px] md:pt-[21px] cursor-pointer`} onClick={() => setId(1)}>
                <p className='max-w-[95%] text-center'>VERY THIN</p>
                <p>{`<`}5% Body fat</p>
              </div>
            </div>
            <div className='flex flex-col items-center gap-2 md:gap-5'>
              <div className={`${id === 2 ? "bg-secondary-600 text-tritary" :"bg-tritary text-[#322100]"} flex items-center justify-center h-[17.13px] w-[17.13px] md:h-[56.17px] md:w-[56.17px] text-[6px] md:text-[20px] text-center rounded-full`}>
              2
              </div>
              <div className={`${id === 2 ? "bg-secondary-600 text-[#322100]" : "bg-primary-600 text-tritary"} text-[6px] md:text-lg w-[54px] h-[43px] md:w-[177px] md:h-[141px] flex flex-col items-center justify-between pb-[11px] md:pb-[43px] pt-[6px] md:pt-[21px] cursor-pointer`} onClick={() => setId(2)}>
                <p className='max-w-[95%] text-center'>UNDER WEIGHT </p>
                <p>5-15% Body Fat</p>
              </div>
            </div>
            <div className='flex flex-col items-center gap-2 md:gap-5'>
              <div className={`${id === 3 ? "bg-secondary-600 text-tritary" :"bg-tritary text-[#322100]"} flex items-center justify-center h-[17.13px] w-[17.13px] md:h-[56.17px] md:w-[56.17px] text-[6px] md:text-[20px] text-center rounded-full`}>
              3
              </div>
              <div className={`${id === 3 ? "bg-secondary-600 text-[#322100]" : "bg-primary-600 text-tritary"} text-[6px] md:text-lg w-[54px] h-[43px] md:w-[177px] md:h-[141px] flex flex-col items-center justify-between pb-[11px] md:pb-[43px] pt-[6px] md:pt-[21px] cursor-pointer`} onClick={() => setId(3)}>
                <p className='max-w-[95%] text-center'>IDEAL BODY WEIGHT</p>
                <p>16-25% Body Fat</p>
              </div>
            </div>
            <div className='flex flex-col items-center gap-2 md:gap-5'>
              <div className={`${id === 4 ? "bg-secondary-600 text-tritary" :"bg-tritary text-[#322100]"} flex items-center justify-center h-[17.13px] w-[17.13px] md:h-[56.17px] md:w-[56.17px] text-[6px] md:text-[20px] text-center rounded-full`}>
              4
              </div>
              <div className={`${id === 4 ? "bg-secondary-600 text-[#322100]" : "bg-primary-600 text-tritary"} text-[6px] md:text-lg w-[54px] h-[43px] md:w-[177px] md:h-[141px] flex flex-col items-center justify-between pb-[11px] md:pb-[43px] pt-[6px] md:pt-[21px] cursor-pointer`} onClick={() => setId(4)}>
                <p className='max-w-[95%] text-center'>OVER BODY WEIGHT</p>
                <p>26-35% Body Fat</p>
              </div>
            </div>
            <div className='flex flex-col items-center gap-2 md:gap-5'>
              <div className={`${id === 5 ? "bg-secondary-600 text-tritary" :"bg-tritary text-[#322100]"} flex items-center justify-center h-[17.13px] w-[17.13px] md:h-[56.17px] md:w-[56.17px] text-[6px] md:text-[20px] text-center rounded-full`}>
              5
              </div>
              <div className={`${id === 5 ? "bg-secondary-600 text-[#322100]" : "bg-primary-600 text-tritary"} text-[6px] md:text-lg w-[54px] h-[43px] md:w-[177px] md:h-[141px] flex flex-col items-center justify-between pb-[11px] md:pb-[43px] pt-[6px] md:pt-[21px] cursor-pointer`} onClick={() => setId(5)}>
                <p className='max-w-[95%] text-center'>OBESE</p>
                <p>{`>`}35% Body Fat</p>
              </div>
            </div>
          </div>
          <div className='-mx-8 md:mx-0 mt-[18px] md:mt-[42px]'>
          <div className='text-[#322100]'>
            <h1 className='mb-[6px] md:mb-[22px] text-[8px] md:text-[26px] font-medium'>SCORE 0{result?.score}</h1>
            <ul className='ml-[10px] md:ml-[50px] w-full md:w-[80%]'>
              <li className='text-[6px] md:text-lg'>{result?.description}</li>
            </ul>
            <div className='bg-primary-600 text-white px-1 md:px-[15px] py-2 md:py-[25px] text-[6px] md:text-[18px] mt-2 md:mt-6'>
              <h1>Best Course of Action for Score {result?.score < 3 ? "01 & 02" : `0${result?.score}`}</h1>
              <div className='mt-3 md:mt-10 text-tritary text-[5.2px] md:text-[14px] flex gap-[11px] md:gap-[37px] mx-[14px] md:mx-[80px] mb-3 md:mb-[51px]'>
                  {
                    result?.images?.map(action => {
                      return (
                        <div className='flex flex-col gap-1 md:gap-3 items-center' key={action?._id}>
                    <img src={`${assetsBaseUrl}/${action?.image}`} alt='not feed' className='w-[12.2px] h-[12.2px] md:w-fit md:h-fit' />
                    <p className='text-center text-[5.2px] md:text-[14px] w-[90%] md:w-[80%]'>
                        {action?.description}
                    </p>
                  </div>
                      )
                    })
                  }
             </div>
            </div>
          </div>
          </div>
        </div>
        <div className='bg-secondary-100 lg:px-12 md:px-[69px] px-6 flex lg:gap-14 md:gap-6 sm:gap-4 gap-[6px] '>
      <div
        className='lg:min-w-[378px] md:min-w-[300px] sm:min-w-[230px] min-w-[128px] bg-no-repeat bg-contain md:bg-cover bg-center'
        style={{ backgroundImage: `url(${ASSETS.mansii})` }}
      ></div>
      <div className='flex-1 md:pb-12 sm:pb-6 md:pt-11 sm:pt-6 py-3'>
        <p className='lg:text-2xl md:text-xl sm:text-sm text-[7px] text-primary-600'>
          The way your dog's{' '}
          <span className='text-secondary-600'>
            food, supplements and treats
          </span>{' '}
          should be!
        </p>
        <p className='lg:text-4xl md:text-2xl sm:text-lg text-[11px] text-secondary-600 mt-1 md:mt-3'>
          Canine nutritionist designed ....
        </p>
        <p className='text-[5px] md:text-sm sm:text-[12px] text-black-100 mt-2 md:mt-6'>
        Get Expert’s suggestion for customized plans. Connect with our canine nutritionist & founder  Manssi
        </p>
        <Link to="/consult">
          <Button label='CONSULT NOW' className='md:mt-10 sm:mt-6 mt-2 text-[7px] md:text-lg px-2 py-2' />
        </Link>
      </div>
    </div>
        <div className='px-[70px]'> 
      <FooterLight />

        </div>
    </Container>
  )
}

export default Result

const Container = styled.div`
  & .banner {
    height: calc(100dvh - 80px);
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