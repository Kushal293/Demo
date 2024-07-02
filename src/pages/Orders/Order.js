import Textfield from 'components/Textfield/Textfield'
import ASSETS from 'assets'
import React from 'react'

const Order = () => {
  return (
    <div>
        <div className='px-[26px] py-[19px] flex justify-between'>
            <h1 className='font-medium text-[14px] text-primary-600'>Your Orders</h1>
            <div className='search flex-1 max-w-[140.5px] sm:max-w-[349px] bg-tritary h-6 sm:h-[38px] rounded sm:rounded-[10px] px-[10px] flex items-center gap-3'>
          <input
            type='text'
            className='h-full flex-1 outline-none border-none bg-transparent text-primary-600 sm:text-sm text-[10px]'
            placeholder='Search for products....'
            name=''
            id=''
          />
          <img src={ASSETS.search} className='h-3 w-3 sm:h-4 sm:w-4' alt='' />
        </div>
        </div>
    </div>
  )
}

export default Order