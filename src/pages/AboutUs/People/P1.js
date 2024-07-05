import ASSETS from 'assets'
import React from 'react'

const P1 = () => {
  return (
    <div className='pt-[30px] md:pt-[70px] text-[#322100]'>
        <div className='flex gap-2 md:gap-4 mb-[26px]'>
            <img src={ASSETS.staff1} alt='img1' className='w-[62px] h-[62px] md:w-fit md:h-fit' />
            <div className='flex flex-col justify-center'>
            <h2 className='text-[10px] md:text-[32px] md:mb-2'>Diksha Goel</h2>
            <p className='text-[4.27px] md:text-sm'>
            Head - Operations & <br /> Customer Relationships 
            </p>
            </div>
        </div>
        <div className='flex gap-[20%] md:mb-8'>
        <div className='flex gap-2 md:gap-4'>
            <img src={ASSETS.staff2} alt='img1' className='w-[62px] h-[62px] md:w-fit md:h-fit' />
            <div className='flex flex-col justify-center'>
            <h2 className='text-[10px] md:text-[32px] md:mb-2'>Harshith</h2>
            <p className='text-[4.27px] md:text-sm'>
            Ops Executive 
            </p>
            </div>
        </div>
        <div className='flex gap-2 md:gap-4'>
            <img src={ASSETS.staff3} alt='img1' className='w-[62px] h-[62px] md:w-fit md:h-fit' />
            <div className='flex flex-col justify-center'>
            <h2 className='text-[10px] md:text-[32px] md:mb-2'>Prashanth</h2>
            <p className='text-[4.27px] md:text-sm'>
            Ops Executive 
            </p>
            </div>
        </div>
        </div>
    </div>
  )
}

export default P1