import Button from 'components/Button/Button'
import React from 'react'

const ContactUs = () => {
  return (
    <div className='w-full px-[25%] pt-[46px] pb-[135px] bg-primary-600 flex flex-col gap-8'>
        <h1 className='text-[26px] text-secondary-600 font-medium'>Send us a message</h1>
        <div className='flex flex-col gap-[22px] w-full'>
            <div className='flex items-center gap-[18px] w-full'>
                <label htmlFor='firstname' className='w-[157px] text-[14px] text-tritary'>First Name</label>
                <input className='border border-[#F1F1F1] rounded-[3px] w-full h-[50px] outline-none bg-transparent text-tritary px-3' type='text' id='firstname' name='firstname'/>
            </div>
            <div className='flex items-center gap-[18px] w-full'>
                <label htmlFor='lastname' className='w-[157px] text-[14px] text-tritary'>Last Name</label>
                <input className='border border-[#F1F1F1] rounded-[3px] w-full h-[50px] outline-none bg-transparent text-tritary px-3' type='text' id='lastname' name='lastname'/>
            </div>
            <div className='flex items-center gap-[18px] w-full'>
                <label htmlFor='email' className='w-[157px] text-[14px] text-tritary' >Email</label>
                <input className='border border-[#F1F1F1] rounded-[3px] w-full h-[50px] outline-none bg-transparent text-tritary px-3' type='email' id='email' name='email'/>
            </div>
            <div className='flex items-center gap-[18px] w-full'>
                <label htmlFor='message' className='w-[157px] text-[14px] text-tritary'>Message</label>
                <textarea className='border border-[#F1F1F1] rounded-[3px] w-full h-[150px] outline-none bg-transparent text-tritary px-3' id='message' name='message' rows="5" />
            </div>
            <div className='flex justify-end mt-[22px]'>
                <Button 
                    label="SEND"
                    className={"w-[143px] h-[45px] flex items-center justify-center"}
                />
            </div>    
        </div>
        <div>
        <h1 className='text-[26px] text-secondary-600 font-medium'>Get in Touch</h1>
        <div className='text-[14px] text-[#F1F1F1] font-normal flex flex-col gap-5 mt-4'>
        <p>we have answered most commonly asked questions here.<br/>
        need help? have a question about an order, or about getting in touch? we're always happy to hear from you.</p>
        <p>call us at: +919980018461 from Monday to Saturday (10 am to 6 pm)</p>
        <p>mail to  woof@doggiliciouus.com<br/>
        we love being in touch with our customers and will get back to you within 24 hours.</p>
        </div>
        </div>
    </div>
  )
}

export default ContactUs