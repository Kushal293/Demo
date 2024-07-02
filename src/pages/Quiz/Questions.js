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
    <Container className='bg-white px-[70px]'>
      <div>
        <div className='flex'>
          <div className='mt-[90px]'>
            <div>
              <p className={`text-46px font-semibold text-primary-600 mt-6 w-[630px] mr-40`}>
              Calculate your dog’s{' '}
              <span className='text-secondary-600'>
                  Body Condition Score (BCS)    
              </span>
              </p>
              <p className='text-32px text-primary-600'>{data[Step-1]?.title}</p>
            </div>
            <div className='mt-[110px]'>
              <h1>Step {Step} / 5</h1>
              <div className='flex items-center gap-[6px] mt-[11px] mb-[12px]'>
                  <div className={`w-[125px] h-[6px] ${Step == 1 ? "bg-secondary-600" : "bg-CTA"} `}></div>
                  <div className={`w-[125px] h-[6px] ${Step == 2 ? "bg-secondary-600" : "bg-CTA"} `}></div>
                  <div className={`w-[125px] h-[6px] ${Step == 3 ? "bg-secondary-600" : "bg-CTA"} `}></div>
                  <div className={`w-[125px] h-[6px] ${Step == 4 ? "bg-secondary-600" : "bg-CTA"} `}></div>
                  <div className={`w-[125px] h-[6px] ${Step == 5 ? "bg-secondary-600" : "bg-CTA"} `}></div>
              </div>
              <p className='text-primary-600 text-[18px]'>{data[Step-1]?.question}</p>
            </div>
          </div>
          <img src={`${assetsBaseUrl}/${data[Step-1]?.image}`} alt='dog' className='mr-[120px]' />
        </div>
        
        <div className='flex mt-11 justify-evenly'>
          {
            data[Step-1]?.options.map((item) => {
              return (
                <div 
                key={item?._id} 
                className='flex flex-col items-center w-[222px] cursor-pointer hover:shadow-[0px_4px_5px_0px_#00000080] hover:px-1 transition-all ease-in duration-150'
                onClick={() => setCurr(item?._id)}
                >
                  <div className='relative'>
                  <img src={ASSETS.circle} alt='option' />
                  <img src={`${assetsBaseUrl}/${item?.image}`} alt='option' className={`absolute ${Step === 2 ? "top-[35%] right-[12%]" : "top-[19%] right-[19%]"} `}/>
                  </div>
                  <p className='text-[18px] text-[#322100] text-center'>
                   {item?.option_text}
                  </p>
                </div>
              )
            })
          }
            </div>
            <div className='flex gap-[50px] justify-end mt-[110px]'>
              <Button
                    label='BACK'
                    className='!py-3 !rounded-sm bg-transparent !text-primary-600 !font-medium border border-primary-600'
                    onClick = {() => {
                      Step > 1 && setStep(Step-1);
                    }}
                  />
              {
                Step <= 4 ? 
                <Button
                    label='NEXT'
                    className='!py-3 !rounded-sm !font-medium flex items-center justify-center'
                    onClick = {handleNext}
                  /> :
                  <Link to="/result">
                    <Button
                    label='SUBMIT'
                    className='!py-3 !rounded-sm !font-medium flex items-center justify-center'
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