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

    console.log(res?.data);
    setResult(res?.data);
  }

  useEffect(() => {
    getResult();
    console.log(id);
  },[id])
  return (
    <Container className='bg-white'>
      <div className='flex px-[70px]'>
          <div className='mt-[90px]'>
              <p className='text-46px font-semibold text-secondary-600 mt-6'>
              Result Time ! 
              </p>
              <p className='text-32px text-primary-600'>
              Check Your Dog’s BCS Result
              </p>
          </div>
          <img src={ASSETS.q6} alt='dog' className='ml-[50px]' />
        </div>
        <div className='flex flex-col items-center justify-center px-[70px] mb-[42px]'>
          <div className='text-primary-600 w-[208px] h-[63px] border border-primary-600 font-medium text-center text-[36px] mb-[28px]'>
            SCORE 0{result?.score}
          </div>
          <p className='text-[26px] font-medium text-center w-6/12 mb-[50px]'>
          {result?.title}
          </p>
          <div className='flex gap-[6px]'>
            <div className='flex flex-col items-center gap-5'>
              <div className={`${id === 1 ? "bg-secondary-600 text-tritary" :"bg-tritary text-[#322100]"} flex items-center justify-center h-[56.17px] w-[56.17px] text-[20px] text-center rounded-full`}>
              1
              </div>
              <div className={`${id === 1 ? "bg-secondary-600 text-[#322100]" : "bg-primary-600 text-tritary"} w-[177px] h-[141px] flex flex-col items-center justify-between pb-[43px] pt-[21px] cursor-pointer`} onClick={() => setId(1)}>
                <p className='max-w-[95%] text-center'>VERY THIN</p>
                <p>{`<`}5% Body fat</p>
              </div>
            </div>
            <div className='flex flex-col items-center gap-5'>
              <div className={`${id === 2 ? "bg-secondary-600 text-tritary" :"bg-tritary text-[#322100]"} flex items-center justify-center h-[56.17px] w-[56.17px] text-[20px] text-center rounded-full`}>
              2
              </div>
              <div className={`${id === 2 ? "bg-secondary-600 text-[#322100]" : "bg-primary-600 text-tritary"} w-[177px] h-[141px] flex flex-col items-center justify-between pb-[43px] pt-[21px] cursor-pointer`} onClick={() => setId(2)}>
                <p className='max-w-[95%] text-center'>UNDER WEIGHT </p>
                <p>5-15% Body Fat</p>
              </div>
            </div>
            <div className='flex flex-col items-center gap-5'>
              <div className={`${id === 3 ? "bg-secondary-600 text-tritary" :"bg-tritary text-[#322100]"} flex items-center justify-center h-[56.17px] w-[56.17px] text-[20px] text-center rounded-full`}>
              3
              </div>
              <div className={`${id === 3 ? "bg-secondary-600 text-[#322100]" : "bg-primary-600 text-tritary"} w-[177px] h-[141px] flex flex-col items-center justify-between pb-[43px] pt-[21px] cursor-pointer`} onClick={() => setId(3)}>
                <p className='max-w-[95%] text-center'>IDEAL BODY WEIGHT</p>
                <p>16-25% Body Fat</p>
              </div>
            </div>
            <div className='flex flex-col items-center gap-5'>
              <div className={`${id === 4 ? "bg-secondary-600 text-tritary" :"bg-tritary text-[#322100]"} flex items-center justify-center h-[56.17px] w-[56.17px] text-[20px] text-center rounded-full`}>
              4
              </div>
              <div className={`${id === 4 ? "bg-secondary-600 text-[#322100]" : "bg-primary-600 text-tritary"} w-[177px] h-[141px] flex flex-col items-center justify-between pb-[43px] pt-[21px] cursor-pointer`} onClick={() => setId(4)}>
                <p className='max-w-[95%] text-center'>OVER BODY WEIGHT</p>
                <p>26-35% Body Fat</p>
              </div>
            </div>
            <div className='flex flex-col items-center gap-5'>
              <div className={`${id === 5 ? "bg-secondary-600 text-tritary" :"bg-tritary text-[#322100]"} flex items-center justify-center h-[56.17px] w-[56.17px] text-[20px] text-center rounded-full`}>
              5
              </div>
              <div className={`${id === 5 ? "bg-secondary-600 text-[#322100]" : "bg-primary-600 text-tritary"} w-[177px] h-[141px] flex flex-col items-center justify-between pb-[43px] pt-[21px] cursor-pointer`} onClick={() => setId(5)}>
                <p className='max-w-[95%] text-center'>OBESE</p>
                <p>{`>`}35% Body Fat</p>
              </div>
            </div>
          </div>
          <div className='mt-[42px]'>
          <div className='text-[#322100]'>
            <h1 className='mb-[22px] text-[26px] font-medium'>SCORE 0{result?.score}</h1>
            <ul className='ml-[50px] w-[80%]'>
              <li>{result?.description}</li>
              {/* <li className='text-[18px]'>If your dog’s ribs and every vertebra of the spinal cord and the hip bones are jutting out and there is very little mass covering the skeletal system.</li>
              <li className='text-[18px]'>could be about 20% - 25% under ideal body condition.</li>
              <li className='text-[18px]'>Many of us would have seen this in malnourished dogs in rescue cases</li> */}
            </ul>
            <div className='bg-primary-600 text-white px-[15px] py-[25px] text-[18px] mt-6'>
              <h1>Best Course of Action for Score {result?.score < 3 ? "01 & 02" : `0${result?.score}`}</h1>
              <div className='mt-10 text-tritary text-[14px] flex gap-[37px] mx-[80px] mb-[51px]'>
                  {
                    result?.images?.map(action => {
                      return (
                        <div className='flex flex-col gap-3 items-center' key={action?._id}>
                    <img src={`${assetsBaseUrl}/${action?.image}`} alt='not feed' />
                    <p className='text-center w-[80%]'>
                        {action?.description}
                    </p>
                  </div>
                      )
                    })
                  }
                  {/* <div className='flex flex-col gap-3 items-center'>
                    <img src={ASSETS.med} alt='medical' />
                    <p className='text-center w-[80%]'>
                    Check the medical condition
                    </p>
                  </div>
                  <div className='flex flex-col gap-3 items-center'>
                    <img src={ASSETS.help} alt='help' />
                    <p className='text-center w-[80%]'>
                    Contact a holistic practitioner, and a holistic nutritionist
                    </p>
                  </div>
                  <div className='flex flex-col gap-3 items-center'>
                    <img src={ASSETS.bowel} alt='bowel' />
                    <p className='text-center w-[80%]'>
                    Bowel Inflammation or other medical conditions 
                    </p>
                  </div>
                  <div className='flex flex-col gap-3 items-center'>
                    <img src={ASSETS.env} alt='environment' />
                    <p className='text-center w-[80%]'>
                    stressful environment
                    </p>
                  </div> */}
              </div>
            </div>
          </div>
          </div>
        </div>
        <div className='bg-secondary-100 lg:px-12 md:px-[69px] px-6 flex lg:gap-14 md:gap-6 sm:gap-4 gap-[6px] '>
      <div
        className='lg:min-w-[378px] md:min-w-[300px] sm:min-w-[230px] min-w-[128px] bg-no-repeat bg-cover bg-center'
        style={{ backgroundImage: `url(${ASSETS.mansii})` }}
      ></div>
      <div className='flex-1 md:pb-12 sm:pb-6 md:pt-11 sm:pt-6 pt-2 pb-2'>
        <p className='lg:text-2xl md:text-xl sm:text-sm text-[10px] text-primary-600'>
          The way your dog's{' '}
          <span className='text-secondary-600'>
            food, supplements and treats
          </span>{' '}
          should be!
        </p>
        <p className='lg:text-4xl md:text-2xl sm:text-lg text-sm text-secondary-600 mt-3'>
          Canine nutritionist designed ....
        </p>
        <p className='text-[8px] md:text-sm sm:text-[12px] text-black-100 mt-6'>
        Get Expert’s suggestion for customized plans. Connect with our canine nutritionist & founder  Manssi
        </p>
        <Link to="/consult">
          <Button label='CONSULT NOW' className='md:mt-10 sm:mt-6 mt-2' />
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
  }

  & .wrapper {
    padding-inline: 108px;
  }

  & .section-title {
    margin-top: 60px;
  }
`;