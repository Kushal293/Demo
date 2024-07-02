import ASSETS from 'assets'
import Button from 'components/Button/Button'
import FooterLight from 'components/FooterLight/FooterLight'
import React from 'react'

const Consult = () => {
  return (
    <div>
        <div className='px-[93px] pt-[49px]'>
            <h1 className='text-primary-600 font-semibold text-46px mb-[32px]'>Consultation & Customization </h1>
            <div className=''>
                <h1 className='text-[36px] mb-[31px] text-secondary-600 font-medium'>Consultation & Customization </h1>
                <div
                    className='h-[396px] relative mb-10'
                    style={{
                    backgroundImage: `linear-gradient(#17545E91,#17545E91),url(${ASSETS.consult})`,
                    }}
                >
                    <p className='text-tritary text-[36px] font-medium absolute bottom-[27px] left-[18px]'>How to book your Email Consultation ?</p>
                </div>
                <div className='flex flex-row-reverse gap-[71px]'>
                    <img src={ASSETS.dog_comp} alt='dog' />
                    <div className='flex flex-col text-[#322100] text-[18px] justify-between'>
                        <p>If you prefer an email consultation, you can opt for it.</p>
                        <p>You have to fill in a detailed online form that you will receive in your registered email. Once that’s done, we’ll send you a customized diet plan within 2- 3 working weeks</p>
                    <div className='flex items-center gap-3'>
                        <span className='text-[#A01717] text-[26px] font-medium'>RS. 2000</span>
                        <Button label="BUY NOW" />
                    </div>
                    
                    </div>
                    
                </div>
                <div className='mt-[46px] px-[10px] py-[17px] bg-secondary-600 text-tritary text-[18px]'>
                        <p>Please allow for 2 working weeks (Monday to Friday) to receive your diet charts/appointments – as there is a very high influx of bookings. If you have medical emergencies, then please WhatsApp on 9845607021.</p>
                    </div>
                <div className='flex px-[70px] mt-10 justify-between items-center'>
                    <div className='flex flex-col gap-[30px] items-center'>
                        <h1 className='text-secondary-600 text-[18px] font-normal'>What we need from you basic medical history </h1>
                        <div className='grid grid-cols-3 border-r border-[#BABABA]'>
                            <div className='flex flex-col mb-[45px] items-center gap-[5px]'>
                                <div className='h-[65px] w-[65px] rounded-full border border-[#BABABA] flex items-center justify-center'>
                                    <img src={ASSETS.vector} alt="need" />
                                </div>
                                <p className='text-[#322100] text-center text-[14px] font-normal w-[70%]'>Family members as many as possible </p>
                            </div>
                            <div className='flex flex-col mb-[45px] items-center gap-[5px]'>
                                <div className='h-[65px] w-[65px] rounded-full border border-[#BABABA] flex items-center justify-center'>
                                    <img src={ASSETS.vector} alt="need" />
                                </div>
                                <p className='text-[#322100] text-center text-[14px] font-normal w-[70%]'>Family members as many as possible </p>
                            </div>
                            <div className='flex flex-col mb-[45px] items-center gap-[5px]'>
                                <div className='h-[65px] w-[65px] rounded-full border border-[#BABABA] flex items-center justify-center'>
                                    <img src={ASSETS.vector} alt="need" />
                                </div>
                                <p className='text-[#322100] text-center text-[14px] font-normal w-[70%]'>Family members as many as possible </p>
                            </div>
                            <div className='flex flex-col mb-[45px] items-center gap-[5px]'>
                                <div className='h-[65px] w-[65px] rounded-full border border-[#BABABA] flex items-center justify-center'>
                                    <img src={ASSETS.vector} alt="need" />
                                </div>
                                <p className='text-[#322100] text-center text-[14px] font-normal w-[70%]'>Family members as many as possible </p>
                            </div>
                            <div className='flex flex-col mb-[45px] items-center gap-[5px]'>
                                <div className='h-[65px] w-[65px] rounded-full border border-[#BABABA] flex items-center justify-center'>
                                    <img src={ASSETS.vector} alt="need" />
                                </div>
                                <p className='text-[#322100] text-center text-[14px] font-normal w-[70%]'>Family members as many as possible </p>
                            </div>
                            <div className='flex flex-col mb-[45px] items-center gap-[5px]'>
                                <div className='h-[65px] w-[65px] rounded-full border border-[#BABABA] flex items-center justify-center'>
                                    <img src={ASSETS.vector} alt="need" />
                                </div>
                                <p className='text-[#322100] text-center text-[14px] font-normal w-[70%]'>Family members as many as possible </p>
                            </div>
                            <div className='flex flex-col mb-[45px] items-center gap-[5px]'>
                                <div className='h-[65px] w-[65px] rounded-full border border-[#BABABA] flex items-center justify-center'>
                                    <img src={ASSETS.vector} alt="need" />
                                </div>
                                <p className='text-[#322100] text-center text-[14px] font-normal w-[70%]'>Family members as many as possible </p>
                            </div>
                            <div className='flex flex-col mb-[45px] items-center gap-[5px]'>
                                <div className='h-[65px] w-[65px] rounded-full border border-[#BABABA] flex items-center justify-center'>
                                    <img src={ASSETS.vector} alt="need" />
                                </div>
                                <p className='text-[#322100] text-center text-[14px] font-normal w-[70%]'>Family members as many as possible </p>
                            </div>
                            
                        </div>
                    </div>
                    <div className='flex flex-col gap-[30px] items-center'>
                        <h1 className='text-secondary-600 text-[18px] font-normal'>What you will receive from us during the consultation </h1>
                        <div className='grid grid-cols-3'>
                        <div className='flex flex-col mb-[45px] items-center gap-[5px]'>
                                <div className='h-[65px] w-[65px] rounded-full border border-[#BABABA] flex items-center justify-center'>
                                    <img src={ASSETS.vector} alt="need" />
                                </div>
                                <p className='text-[#322100] text-center text-[14px] font-normal w-[70%]'>Family members as many as possible </p>
                            </div>
                        <div className='flex flex-col mb-[45px] items-center gap-[5px]'>
                                <div className='h-[65px] w-[65px] rounded-full border border-[#BABABA] flex items-center justify-center'>
                                    <img src={ASSETS.vector} alt="need" />
                                </div>
                                <p className='text-[#322100] text-center text-[14px] font-normal w-[70%]'>Family members as many as possible </p>
                            </div>
                        <div className='flex flex-col mb-[45px] items-center gap-[5px]'>
                                <div className='h-[65px] w-[65px] rounded-full border border-[#BABABA] flex items-center justify-center'>
                                    <img src={ASSETS.vector} alt="need" />
                                </div>
                                <p className='text-[#322100] text-center text-[14px] font-normal w-[70%]'>Family members as many as possible </p>
                            </div>
                        <div className='flex flex-col mb-[45px] items-center gap-[5px]'>
                                <div className='h-[65px] w-[65px] rounded-full border border-[#BABABA] flex items-center justify-center'>
                                    <img src={ASSETS.vector} alt="need" />
                                </div>
                                <p className='text-[#322100] text-center text-[14px] font-normal w-[70%]'>Family members as many as possible </p>
                            </div>
                        <div className='flex flex-col mb-[45px] items-center gap-[5px]'>
                                <div className='h-[65px] w-[65px] rounded-full border border-[#BABABA] flex items-center justify-center'>
                                    <img src={ASSETS.vector} alt="need" />
                                </div>
                                <p className='text-[#322100] text-center text-[14px] font-normal w-[70%]'>Family members as many as possible </p>
                            </div>
                        <div className='flex flex-col mb-[45px] items-center gap-[5px]'>
                                <div className='h-[65px] w-[65px] rounded-full border border-[#BABABA] flex items-center justify-center'>
                                    <img src={ASSETS.vector} alt="need" />
                                </div>
                                <p className='text-[#322100] text-center text-[14px] font-normal w-[70%]'>Family members as many as possible </p>
                            </div>
                        <div className='flex flex-col mb-[45px] items-center gap-[5px]'>
                                <div className='h-[65px] w-[65px] rounded-full border border-[#BABABA] flex items-center justify-center'>
                                    <img src={ASSETS.vector} alt="need" />
                                </div>
                                <p className='text-[#322100] text-center text-[14px] font-normal w-[70%]'>Family members as many as possible </p>
                            </div>
                        <div className='flex flex-col mb-[45px] items-center gap-[5px]'>
                                <div className='h-[65px] w-[65px] rounded-full border border-[#BABABA] flex items-center justify-center'>
                                    <img src={ASSETS.vector} alt="need" />
                                </div>
                                <p className='text-[#322100] text-center text-[14px] font-normal w-[70%]'>Family members as many as possible </p>
                            </div>
                        </div>
                        
                    </div>
                </div>
                <ol className='text-[18px] text-[#A01717] mt-12 mb-16 px-5'>
                            <li>1. Our aim is to evaluate the whole situation to come up with the best holistic plan for wellness that will suit your lifestyle, schedules, and budgets.</li>
                            <li>2. You have to fill in a detailed online form that you will receive in your registered email.</li>
                        </ol>
            </div>
            <div className=''>
                <h1 className='text-[36px] mb-[31px] text-secondary-600 font-medium'>Consultation & Customization </h1>
                <div
                    className='h-[396px] relative mb-10'
                    style={{
                    backgroundImage: `linear-gradient(#17545E91,#17545E91),url(${ASSETS.consult})`,
                    }}
                >
                    <p className='text-tritary text-[36px] font-medium absolute bottom-[27px] left-[18px]'>Get to know about Private Consultation Manssi</p>
                </div>
                <div className='flex gap-[71px]'>
                    <img src={ASSETS.sideDog} alt='dog' />
                    <div className='flex flex-col text-[#322100] text-[18px] justify-between'>
                        <p>If you prefer a one-on-one video consultation with our founder and nutritionist Manssi, this is the option you should pick.</p>

                        <p>These consultations will give you 2 hours to discuss a holistic nutrition plan for your dog where Manssi will discuss not only your dog’s diet plan but mental, physical and overall well being as well.</p>

                        <p>You have to fill in a detailed online form that you will receive in your registered email.</p>
                        <p>In this option, you also get 6 weeks of ongoing support via  WhatsApp.</p>
                        <p><span className='text-[#A01717]'>Appointments will be made within 2 weeks of sending all information requested via email.</span> Please go through the Cancellation Policy for more details.</p>
                    <div className='flex items-center gap-3'>
                        <span className='text-[#A01717] text-[26px] font-medium'>RS. 5000</span>
                        <Button label="BUY NOW" />
                    </div>
                    </div>
                </div>
                <div className='flex px-[70px] mt-10 justify-between items-center'>
                    <div className='flex flex-col gap-[30px] items-center'>
                        <h1 className='text-secondary-600 text-[18px] font-normal'>What we need from you basic medical history </h1>
                        <div className='grid grid-cols-3 border-r border-[#BABABA]'>
                            <div className='flex flex-col mb-[45px] items-center gap-[5px]'>
                                <div className='h-[65px] w-[65px] rounded-full border border-[#BABABA] flex items-center justify-center'>
                                    <img src={ASSETS.vector} alt="need" />
                                </div>
                                <p className='text-[#322100] text-center text-[14px] font-normal w-[70%]'>Family members as many as possible </p>
                            </div>
                            <div className='flex flex-col mb-[45px] items-center gap-[5px]'>
                                <div className='h-[65px] w-[65px] rounded-full border border-[#BABABA] flex items-center justify-center'>
                                    <img src={ASSETS.vector} alt="need" />
                                </div>
                                <p className='text-[#322100] text-center text-[14px] font-normal w-[70%]'>Family members as many as possible </p>
                            </div>
                            <div className='flex flex-col mb-[45px] items-center gap-[5px]'>
                                <div className='h-[65px] w-[65px] rounded-full border border-[#BABABA] flex items-center justify-center'>
                                    <img src={ASSETS.vector} alt="need" />
                                </div>
                                <p className='text-[#322100] text-center text-[14px] font-normal w-[70%]'>Family members as many as possible </p>
                            </div>
                            <div className='flex flex-col mb-[45px] items-center gap-[5px]'>
                                <div className='h-[65px] w-[65px] rounded-full border border-[#BABABA] flex items-center justify-center'>
                                    <img src={ASSETS.vector} alt="need" />
                                </div>
                                <p className='text-[#322100] text-center text-[14px] font-normal w-[70%]'>Family members as many as possible </p>
                            </div>
                            <div className='flex flex-col mb-[45px] items-center gap-[5px]'>
                                <div className='h-[65px] w-[65px] rounded-full border border-[#BABABA] flex items-center justify-center'>
                                    <img src={ASSETS.vector} alt="need" />
                                </div>
                                <p className='text-[#322100] text-center text-[14px] font-normal w-[70%]'>Family members as many as possible </p>
                            </div>
                            <div className='flex flex-col mb-[45px] items-center gap-[5px]'>
                                <div className='h-[65px] w-[65px] rounded-full border border-[#BABABA] flex items-center justify-center'>
                                    <img src={ASSETS.vector} alt="need" />
                                </div>
                                <p className='text-[#322100] text-center text-[14px] font-normal w-[70%]'>Family members as many as possible </p>
                            </div>
                            <div className='flex flex-col mb-[45px] items-center gap-[5px]'>
                                <div className='h-[65px] w-[65px] rounded-full border border-[#BABABA] flex items-center justify-center'>
                                    <img src={ASSETS.vector} alt="need" />
                                </div>
                                <p className='text-[#322100] text-center text-[14px] font-normal w-[70%]'>Family members as many as possible </p>
                            </div>
                            <div className='flex flex-col mb-[45px] items-center gap-[5px]'>
                                <div className='h-[65px] w-[65px] rounded-full border border-[#BABABA] flex items-center justify-center'>
                                    <img src={ASSETS.vector} alt="need" />
                                </div>
                                <p className='text-[#322100] text-center text-[14px] font-normal w-[70%]'>Family members as many as possible </p>
                            </div>
                            
                        </div>
                    </div>
                    <div className='flex flex-col gap-[30px] items-center'>
                        <h1 className='text-secondary-600 text-[18px] font-normal'>What you will receive from us during the consultation </h1>
                        <div className='grid grid-cols-3'>
                        <div className='flex flex-col mb-[45px] items-center gap-[5px]'>
                                <div className='h-[65px] w-[65px] rounded-full border border-[#BABABA] flex items-center justify-center'>
                                    <img src={ASSETS.vector} alt="need" />
                                </div>
                                <p className='text-[#322100] text-center text-[14px] font-normal w-[70%]'>Family members as many as possible </p>
                            </div>
                        <div className='flex flex-col mb-[45px] items-center gap-[5px]'>
                                <div className='h-[65px] w-[65px] rounded-full border border-[#BABABA] flex items-center justify-center'>
                                    <img src={ASSETS.vector} alt="need" />
                                </div>
                                <p className='text-[#322100] text-center text-[14px] font-normal w-[70%]'>Family members as many as possible </p>
                            </div>
                        <div className='flex flex-col mb-[45px] items-center gap-[5px]'>
                                <div className='h-[65px] w-[65px] rounded-full border border-[#BABABA] flex items-center justify-center'>
                                    <img src={ASSETS.vector} alt="need" />
                                </div>
                                <p className='text-[#322100] text-center text-[14px] font-normal w-[70%]'>Family members as many as possible </p>
                            </div>
                        <div className='flex flex-col mb-[45px] items-center gap-[5px]'>
                                <div className='h-[65px] w-[65px] rounded-full border border-[#BABABA] flex items-center justify-center'>
                                    <img src={ASSETS.vector} alt="need" />
                                </div>
                                <p className='text-[#322100] text-center text-[14px] font-normal w-[70%]'>Family members as many as possible </p>
                            </div>
                        <div className='flex flex-col mb-[45px] items-center gap-[5px]'>
                                <div className='h-[65px] w-[65px] rounded-full border border-[#BABABA] flex items-center justify-center'>
                                    <img src={ASSETS.vector} alt="need" />
                                </div>
                                <p className='text-[#322100] text-center text-[14px] font-normal w-[70%]'>Family members as many as possible </p>
                            </div>
                        <div className='flex flex-col mb-[45px] items-center gap-[5px]'>
                                <div className='h-[65px] w-[65px] rounded-full border border-[#BABABA] flex items-center justify-center'>
                                    <img src={ASSETS.vector} alt="need" />
                                </div>
                                <p className='text-[#322100] text-center text-[14px] font-normal w-[70%]'>Family members as many as possible </p>
                            </div>
                        <div className='flex flex-col mb-[45px] items-center gap-[5px]'>
                                <div className='h-[65px] w-[65px] rounded-full border border-[#BABABA] flex items-center justify-center'>
                                    <img src={ASSETS.vector} alt="need" />
                                </div>
                                <p className='text-[#322100] text-center text-[14px] font-normal w-[70%]'>Family members as many as possible </p>
                            </div>
                        <div className='flex flex-col mb-[45px] items-center gap-[5px]'>
                                <div className='h-[65px] w-[65px] rounded-full border border-[#BABABA] flex items-center justify-center'>
                                    <img src={ASSETS.vector} alt="need" />
                                </div>
                                <p className='text-[#322100] text-center text-[14px] font-normal w-[70%]'>Family members as many as possible </p>
                            </div>
                        </div>
                        
                    </div>
                </div>
                <ol className='text-[18px] text-[#A01717] mt-12 mb-16 px-5'>
                            <li>1. Our aim is to evaluate the whole situation to come up with the best holistic plan for wellness that will suit your lifestyle, schedules, and budgets.</li>
                            <li>2. You have to fill in a detailed online form that you will receive in your registered email.</li>
                        </ol>
            </div>
        </div>
        <div className='px-[70px]'>
            <FooterLight />
        </div>
    </div>
  )
}

export default Consult