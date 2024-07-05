import ASSETS from 'assets'
import React from 'react'

const P2 = () => {
  return (
    <div className='pt-[30px] md:pt-[70px] text-[#322100] flex justify-center items-center'>
        <div className='w-[90%] md:w-[70%]'>
        <div className='flex gap-[20%] mb-[26px] md:mb-8'>
        <div className='flex gap-2 md:gap-4'>
            <img src={ASSETS.cook1} alt='img1' className='w-[62px] h-[62px] md:w-fit md:h-fit' />
            <div className='flex flex-col justify-center'>
            <h2 className='text-[10px] md:text-[32px] md:mb-2'>Anantho</h2>
            <p className='text-[4.27px] md:text-sm'>
            Production Supervisor 
            </p>
            </div>
        </div>
        <div className='flex gap-2 md:gap-4'>
            <img src={ASSETS.cook2} alt='img1' className='w-[62px] h-[62px] md:w-fit md:h-fit' />
            <div className='flex flex-col justify-center'>
            <h2 className='text-[10px] md:text-[32px] md:mb-2'>Bankim</h2>
            <p className='text-[4.27px] md:text-sm'>
            Cooking & Packing
            </p>
            </div>
        </div>
        </div>
        <div className='flex gap-[20%] mb-[26px] md:mb-8'>
        <div className='flex gap-2 md:gap-4'>
            <img src={ASSETS.cook3} alt='img1' className='w-[62px] h-[62px] md:w-fit md:h-fit' />
            <div className='flex flex-col justify-center'>
            <h2 className='text-[10px] md:text-[32px] md:mb-2'>Baatasi</h2>
            <p className='text-[4.27px] md:text-sm'>
            Cooking & Supplements
            </p>
            </div>
        </div>
        <div className='flex gap-2 md:gap-4'>
            <img src={ASSETS.cook4} alt='img1' className='w-[62px] h-[62px] md:w-fit md:h-fit' />
            <div className='flex flex-col justify-center'>
            <h2 className='text-[10px] md:text-[32px] md:mb-2'>Dipankar </h2>
            <p className='text-[4.27px] md:text-sm'>
            Cooking & Packing 
            </p>
            </div>
        </div>
        </div>
        <div className='flex gap-[29%] mb-[26px] md:mb-8'>
        <div className='flex gap-2 md:gap-4'>
            <img src={ASSETS.cook5} alt='img1' className='w-[62px] h-[62px] md:w-fit md:h-fit' />
            <div className='flex flex-col justify-center'>
            <h2 className='text-[10px] md:text-[32px] md:mb-2'>Naresh</h2>
            <p className='text-[4.27px] md:text-sm'>
            Cooking & Packing
            </p>
            </div>
        </div>
        <div className='flex gap-2 md:gap-4'>
            <img src={ASSETS.cook6} alt='img1' className='w-[62px] h-[62px] md:w-fit md:h-fit' />
            <div className='flex flex-col justify-center'>
            <h2 className='text-[10px] md:text-[32px] md:mb-2'>Rajesh</h2>
            <p className='text-[4.27px] md:text-sm'>
            Cooking & Single ingredients
            </p>
            </div>
        </div>
        </div>
        <div className='flex gap-[23%] mb-[26px] md:mb-8'>
        <div className='flex gap-2 md:gap-4'>
            <img src={ASSETS.cook7} alt='img1' className='w-[62px] h-[62px] md:w-fit md:h-fit' />
            <div className='flex flex-col justify-center'>
            <h2 className='text-[10px] md:text-[32px] md:mb-2'>Sumitra</h2>
            <p className='text-[4.27px] md:text-sm'>
            Cooking & Packing
            </p>
            </div>
        </div>
        <div className='flex gap-2 md:gap-4'>
            <img src={ASSETS.cook8} alt='img1' className='w-[62px] h-[62px] md:w-fit md:h-fit' />
            <div className='flex flex-col justify-center'>
            <h2 className='text-[10px] md:text-[32px] md:mb-2'>Shankar</h2>
            <p className='text-[4.27px] md:text-sm'>
            Cooking & Single <br /> ingredients
            </p>
            </div>
        </div>
        </div>
        </div>
    </div>
  )
}

export default P2