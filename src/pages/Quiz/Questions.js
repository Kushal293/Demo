import React, { useEffect, useState } from 'react'
import FooterLight from 'components/FooterLight/FooterLight'
import styled from 'styled-components';
import ASSETS from 'assets';
import Button from 'components/Button/Button';
import { Link } from 'react-router-dom';
import { getQuestion } from 'http';
import { getRequest } from 'http';
import { assetsBaseUrl, baseUrl } from 'app.config';

const Questions = () => {

  const [Step, setStep] = useState(1);
  const [data, setData] = useState({});
  const [curr, setCurr] = useState(1);
  const [ans, setAns] = useState([]);

  const getData = async() => {
    const url = `${baseUrl}/rooted_in_love/user/bsc/getall`;
    const res = await getRequest(url);

    // console.log(res.data[Step-1]);

    setData(res.data);
  }
  
  useEffect(() => {
     getData();
  },[])

  const handleNext = () => {
    ans.push(curr);
    console.log(ans);
    setStep(Step+1);
  }

  const handleSubmit = () => {
    ans.push(curr);
    // console.log(ans);
    localStorage.setItem("quiz", JSON.stringify(ans));
  }

  return (
    <Container className='bg-white px-5 md:px-[70px]'>
      <div>
        <div className='flex'>
          <div className='md:mt-[90px] relative md:static'>
            <div className='absolute md:static z-20 bg-transparent'>
              <p className={`text-[16px] md:text-46px font-semibold text-primary-600 mt-6 w-[217px] md:w-[630px] md:mr-40`}>
              Calculate your dog’s{' '}
              <span className='text-secondary-600'>
                  Body Condition Score (BCS)    
              </span>
              </p>
              <p className='text-[11px] md:text-32px text-primary-600'>{data[Step-1]?.title}</p>
            </div>
            <div className='mt-[210px]'>
              <h1 className='text-[9px] md:text-lg'>Step {Step} / 5</h1>
              <div className='flex items-center gap-[6px] mt-[11px] mb-[12px]'>
                  <div className={`w-[43px] h-[2px] md:w-[125px] md:h-[6px] ${Step == 1 ? "bg-secondary-600" : "bg-CTA"} `}></div>
                  <div className={`w-[43px] h-[2px] md:w-[125px] md:h-[6px] ${Step == 2 ? "bg-secondary-600" : "bg-CTA"} `}></div>
                  <div className={`w-[43px] h-[2px] md:w-[125px] md:h-[6px] ${Step == 3 ? "bg-secondary-600" : "bg-CTA"} `}></div>
                  <div className={`w-[43px] h-[2px] md:w-[125px] md:h-[6px] ${Step == 4 ? "bg-secondary-600" : "bg-CTA"} `}></div>
                  <div className={`w-[43px] h-[2px] md:w-[125px] md:h-[6px] ${Step == 5 ? "bg-secondary-600" : "bg-CTA"} `}></div>
              </div>
              <p className='text-primary-600 text-[10px] md:text-[18px]'>{data[Step-1]?.question}</p>
            </div>
          </div>
          <img src={`${assetsBaseUrl}/${data[Step-1]?.image}`} alt='dog' className='md:mr-[120px] ml-[-110px] z-10 md:ml-0 mt-10 md:mt-6 w-[210px] h-[158px] md:h-fit md:w-fit' />
        </div>
        
        <div className='flex flex-wrap mt-11 gap-1 md:gap-0 md:justify-evenly'>
          {
            data[Step-1]?.options.map((item) => {
              return (
                <div 
                key={item?._id} 
                className='flex flex-col items-center w-[112px] md:w-[222px] cursor-pointer hover:shadow-[0px_4px_5px_0px_#00000080] hover:px-1 transition-all ease-in duration-150'
                onClick={() => setCurr(item?._id)}
                >
                  <div className='relative'>
                  <img src={ASSETS.circle} alt='option' className='w-[82.27px] md:w-fit' />
                  <img src={`${assetsBaseUrl}/${item?.image}`} alt='option' className={`absolute w-[62px] md:w-fit  ${Step === 2 ? "top-[35%] right-[12%]" : "top-[19%] right-[19%]"} `}/>
                  </div>
                  <p className='text-[9.27px] md:text-[18px] text-[#322100] text-center'>
                   {item?.option_text}
                  </p>
                </div>
              )
            })
          }
            </div>
            <div className='flex gap-4 md:gap-[50px] justify-end mt-[50px] md:mt-[110px]'>
              <Button
                    label='BACK'
                    className='w-[35px] h-[15px] md:w-auto md:h-auto md:!py-3 text-[6px] md:text-lg rounded-[1px] md:!rounded-sm bg-transparent !text-primary-600 !font-medium border border-primary-600'
                    onClick = {() => {
                      Step > 1 && setStep(Step-1);
                    }}
                  />
              {
                Step <= 4 ? 
                <Button
                    label='NEXT'
                    className='w-[47px] h-[15px] md:w-auto md:h-auto md:!py-3 text-[6px] md:text-lg rounded-[1px] md:!rounded-sm !font-medium flex items-center justify-center'
                    onClick = {handleNext}
                  /> :
                  <Link to="/result">
                    <Button
                    label='SUBMIT'
                    className='w-[47px] h-[15px] md:w-auto md:h-auto md:!py-3 text-[6px] md:text-lg rounded-[1px] md:!rounded-sm !font-medium flex items-center justify-center'
                    onClick = {handleSubmit}
                  /> 
                  </Link>
              }
            </div>
        </div>
        <FooterLight />
    </Container>
  )
}

export default Questions

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