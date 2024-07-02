import ASSETS from 'assets'
import FooterLight from 'components/FooterLight/FooterLight'
import React, { useEffect } from 'react'

const AboutUs = () => {
    useEffect(() => {
        window.scrollTo(0,0);
    },[])
  return (
    <div>
        <h1 className='ml-[93px] mt-[35px] mb-[3px] text-primary-600 text-46px font-semibold'>
            Hi !
        </h1>
        <div className='w-full relative'>
            <img src={ASSETS.about} alt='about' className='w-full h-[463px]' />
            <h1 className='absolute text-[36px] font-medium text-secondary-600 top-0 left-[93px]'>About Us</h1>
        </div>
        <div className='mt-[30px]'>
            <div>
                <h1 className=' px-[93px] text-secondary-600 font-medium text-[36px] mb-3'>Our Values</h1>
                <div className='mb-[21px]'>
                    <h2 className=' px-[93px] text-[32px] text-primary-600 mb-4'>Steadfast Focus On Dogs</h2>
                    <p className=' px-[93px] mb-6 text-[18px] text-[#322100]'>We will work with the humans and handhold them for as long as needed, to try and achieve the best course of action for the dog. We are going to set the standard on what the dog’s nutritional & health needs are. We will help their human families with the challenges they may face. We will also factor in the needs, desires and personalities of the dogs while working out their health plans</p>
                    <img src={ASSETS.v1} alt='img' className='w-full h-[512px]' />
                </div>
                <div className='mb-[21px]'>
                    <h2 className=' px-[93px] text-[32px] text-primary-600 mb-4'>Reliability and Commitment</h2>
                    <p className=' px-[93px] mb-6 text-[18px] text-[#322100]'>We take our commitments very seriously and do not compromise on ingredients. This is the very backbone of our value system. It is of paramount importance to us that we are able to hold up to our commitment. We will stay true to our methods of natural healing with the best ingredients, in the most holistic way possible for our clients and their dogs.</p>
                    <div className='w-full bg-primary-600'>
                    <img src={ASSETS.v2} alt='img' className='w-[917px] h-[512px]' />
                    </div>
                </div>
            </div>
        </div>
        <div className='h-[508px] w-full flex items-center justify-center bg-primary-600'>
            <h1 className='text-center text-46px font-semibold text-secondary-600'>Meet Our Teem</h1>
        </div>

        <div className='px-[70px]'>
            <FooterLight />
        </div>
    </div>
  )
}

export default AboutUs