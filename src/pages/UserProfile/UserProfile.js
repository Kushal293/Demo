import ASSETS from 'assets'
import Button from 'components/Button/Button'
import React from 'react'

const UserProfile = () => {
  return (
    <div className='w-full px-[36%] pt-[65px] pb-[135px] bg-primary-600 flex flex-col gap-8'>
        <div className='px-[10px]'>
            <h1 className='text-[26px] text-secondary-600 font-medium'>Hi</h1>
            <h1 className='text-[20px] text-tritary'>Shobana Purushothaman !</h1>
        </div>
        <hr className='mt-[-18px]'/>      
        <div className='px-[10px]'>
            <div className='flex gap-3 items-center text-[14px] text-tritary mb-[15px]'>
                <img src={ASSETS.mail} alt='mail' />
                <p>shobanapurushothaman@xyz.com</p>
            </div>
            <div className='flex gap-3 items-center text-[14px] text-tritary '>
                <img src={ASSETS.call} alt='call' />
                <p>+91 9876543210</p>
            </div>
        </div>  
        <div className='flex items-center justify-between text-tritary px-[10px]'>
            <Button label="Refer a friend" className="!text-[14px] h-[30px] flex items-center justify-center w-[110px] bg-transparent border border-tritary !p-0"/>
            <Button label="My orders" className="!text-[14px] h-[30px] flex items-center justify-center w-[110px] !p-0" />
            <Button label="Write a review" className="!text-[14px] h-[30px] flex items-center justify-center w-[110px] bg-transparent border border-tritary !p-0" />
        </div>
        <div>
        <h1 className='text-[20px] text-tritary mt-5'>Your Cuties</h1>
        <hr className='mt-[10px]'/> 
        <div className='flex items-center justify-between text-tritary px-[10px] mt-3'>
            <div className='flex items-center w-[110px]'>
            <img src={ASSETS.sound_detect} alt='sound-detect' />
            <p className='text-[12px] text-tritary font-medium ml-2'>Alex</p>
            </div>
            <Button label="Show Profile" className="!text-[14px] h-[30px] flex items-center justify-center w-[110px] bg-transparent border border-tritary !p-0"/>
            
            <Button label="Recreate Profile" className="!text-[14px] h-[30px] flex items-center justify-center w-[114px] mr-[-4px] bg-transparent border border-tritary !p-0" />
        </div>
        <div className='flex justify-center items-center mt-3'>
        <Button label="Delete Profile" className="!text-[14px] h-[30px] flex items-center justify-center w-[110px] !p-0" />
        </div>
        <hr className='mt-[21px]'/>
            <div className='flex gap-3 items-center text-[14px] text-tritary mt-[15px] mb-[24px] cursor-pointer'>
                <img src={ASSETS.add_profile} alt='add_profile' />
                <p>Add New Profile</p>
            </div>
        </div>
        <div className='flex items-center justify-between'>
        <Button label="Refer a friend" className="!text-[14px] h-[30px] flex items-center justify-center w-[200px] bg-transparent border border-tritary !p-0"/>
            <Button label="Write a review" className="!text-[14px] h-[30px] flex items-center justify-center w-[200px] bg-transparent border border-tritary !p-0" />
        </div>
    </div>
  )
}

export default UserProfile