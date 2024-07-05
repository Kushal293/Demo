import ASSETS from 'assets'
import Button from 'components/Button/Button'
import React from 'react'

const P0 = () => {
  return (
    <div className='self-center pt-[30px] md:pt-[70px] text-[#322100]'>
        <div className='flex gap-2 md:gap-4 mb-[26px] md:mb-[60px]'>
            <img src={ASSETS.main1} alt='img1' className='w-[62px] h-[62px] md:w-fit md:h-fit' />
            <div className=''>
            <h2 className='text-[10px] md:text-[32px] md:mb-2'>Manssi V. Karambelkar</h2>
            <p className='text-[4.27px] md:text-lg mb-1 md:mb-14'>
            (BCCS.Dip.HltNut.UK) <br/>Canine Nutritionist & Holistic wellness Practitioner
            </p>
            <Button 
                label="KNOW MORE" 
                className="!text-[6.5px] md:!text-[14px] !w-[58px] rounded-sm !h-[10px] md:!w-[106px] md:!h-[29px] !px-0 !py-0"
            />
            </div>
        </div>
        <div className='flex justify-between gap-2 mb-4 md:mb-8'>
        <div className='flex gap-2 md:gap-4'>
            <img src={ASSETS.main2} alt='img1' className='w-[62px] h-[62px] md:w-fit md:h-fit' />
            <div className='flex flex-col justify-center'>
            <h2 className='text-[10px] md:text-[32px] md:mb-2'>Burfi</h2>
            <p className='text-[4.27px] md:text-sm'>
            Temporarily Rescued Ultra <br/> Picky Taste Tester; Now Here to <br /> Stay - August 3, 2018
            </p>
            </div>
        </div>
        <div className='flex gap-2 md:gap-4 mr-[-4px] md:mr-0'>
            <img src={ASSETS.main4} alt='img1' className='w-[62px] h-[62px] md:w-fit md:h-fit' />
            <div className='flex flex-col justify-center'>
            <h2 className='text-[10px] md:text-[32px] md:mb-2'>Mimi</h2>
            <p className='text-[4.27px] md:text-sm'>
            Barfi's birth mother appeared,<br /> entered, and established a permanent<br/> presence - December 18, 2019
            </p>
            </div>
        </div>
        </div>
        <div className='flex gap-2 md:gap-4'>
            <img src={ASSETS.main3} alt='img1' className='w-[62px] h-[62px] md:w-fit md:h-fit' />
            <div className='flex flex-col justify-center'>
            <h2 className='text-[10px] md:text-[32px] md:mb-2'>Kira</h2>
            <p className='text-[6px] md:text-sm'>
            Origin and Inspirational Spark <br />February 2014 - June 2018
            </p>
            </div>
        </div>
    </div>
  )
}

export default P0