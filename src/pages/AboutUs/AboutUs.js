import ASSETS from 'assets'
import FooterLight from 'components/FooterLight/FooterLight'
import styled from 'styled-components';
import classNames from 'classnames';
import React, { useEffect, useState } from 'react'
import P1 from './People/P1';
import P0 from './People/P0';
import P2 from './People/P2';
import P3 from './People/P3';
import P4 from './People/P4';


const steps = {
    0: P0,
    1: P1,
    2: P2,
    3: P3,
    4: P4,
};


const AboutUs = () => {

    const [tab, setTab] = useState(0);
    const Step = steps[tab]

    const categories = ["Mains", "Office Staffs", "Kitchen Staffs", "CFO", "Maketing"];

    const handleTab = tab => {
        setTab(tab);
      };



  return (
    <div>
        <h1 className='ml-[28.39px] md:ml-[93px] mt-[12.53px] md:mt-[35px] mb-[3px] text-primary-600 text-[14.04px] md:text-46px font-semibold'>
            Hi !
        </h1>
        <div className='w-full relative'>
            <img src={ASSETS.about} alt='about' className='w-full h-[141px] md:h-[463px]' />
            <h1 className='absolute text-[11px] md:text-[36px] font-medium text-secondary-600 top-0 left-[28.39px] md:left-[93px]'>About Us</h1>
        </div>
        <div className='mt-[9px] md:mt-[30px]'>
            <div>
                <h1 className='px-[28px] md:px-[93px] text-secondary-600 font-medium text-[12px] md:text-[36px] mb-[3px] md:mb-3'>Our Values</h1>
                <div className='mb-[21px]'>
                    <h2 className='px-[28px] md:px-[93px] text-[10px] md:text-[32px] text-primary-600 mb-1 md:mb-4'>Steadfast Focus On Dogs</h2>
                    <p className='px-[28px] md:px-[93px] mb-3 md:mb-6 text-[6px] md:text-[18px] text-[#322100]'>We will work with the humans and handhold them for as long as needed, to try and achieve the best course of action for the dog. We are going to set the standard on what the dog’s nutritional & health needs are. We will help their human families with the challenges they may face. We will also factor in the needs, desires and personalities of the dogs while working out their health plans</p>
                    <img src={ASSETS.v1} alt='img' className='w-full h-[157px] md:h-[512px]' />
                </div>
                <div className='mb-[21px]'>
                    <h2 className='px-[28px] md:px-[93px] text-[10px] md:text-[32px] text-primary-600 mb-1 md:mb-4'>Reliability and Commitment</h2>
                    <p className='px-[28px] md:px-[93px] mb-3 md:mb-6 text-[6px] md:text-[18px] text-[#322100]'>We take our commitments very seriously and do not compromise on ingredients. This is the very backbone of our value system. It is of paramount importance to us that we are able to hold up to our commitment. We will stay true to our methods of natural healing with the best ingredients, in the most holistic way possible for our clients and their dogs.</p>
                    <div className='w-full bg-primary-600'>
                    <img src={ASSETS.v2} alt='img' className='md:w-[917px] h-[157px] md:h-[512px]' />
                    </div>
                </div>
                <div className='mb-[21px]'>
                    <h2 className='px-[28px] md:px-[93px] text-[10px] md:text-[32px] text-primary-600 mb-1 md:mb-4'>Maximum Nutrition</h2>
                    <p className='px-[28px] md:px-[93px] mb-3 md:mb-6 text-[6px] md:text-[18px] text-[#322100]'>We will pack as much good quality, bioavailable form of nutrition into the client’s budget range without compromising on the quality of nutritional value. We do not use preservatives, colors, fillers, binders, chemicals, or any processes that may alter the nutritional value or of the product.</p>
                    <div className='w-full flex items-center justify-center bg-primary-600'>
                    <img src={ASSETS.v3} alt='img' className='object-cover h-[157px] md:h-[512px]' />
                    </div>
                </div>
                <div className='mb-[21px]'>
                    <h2 className='px-[28px] md:px-[93px] text-[10px] md:text-[32px] text-primary-600 mb-1 md:mb-4'>Respect, Consideration, Compassion</h2>
                    <p className='px-[28px] md:px-[93px] mb-3 md:mb-6 text-[6px] md:text-[18px] text-[#322100]'>We emphasize on mutual respect within the working environment, with our clients and with dogs. We will be considerate towards everyone that works with us. We will aim to understand their hardships and struggles. We will show compassion in our hearts for everyone around us.</p>
                    <div className='w-full bg-primary-600'>
                    <img src={ASSETS.v4} alt='img' className='md:w-full h-[157px] md:h-[512px]' />
                    </div>
                </div>
                <div className='mb-[21px]'>
                    <h2 className='px-[28px] md:px-[93px] text-[10px] md:text-[32px] text-primary-600 mb-1 md:mb-4'>Environmentally Aware</h2>
                    <p className='px-[28px] md:px-[93px] mb-3 md:mb-6 text-[6px] md:text-[18px] text-[#322100]'>We will always prefer to work with sustainable packaging, recycled materials, reuse packaging, alternative sources of materials, clean earth-friendly ingredients and design processes to make our products kinder to our planet. We will educate and encourage our clients to reuse and recycle their packaging with us, by actively providing them with these options.</p>
                    <div className='w-full bg-primary-600'>
                    <img src={ASSETS.v5} alt='img' className='md:w-[917px] h-[157px] md:h-[512px]' />
                    </div>
                </div>
            </div>
            <div>
                <h1 className='px-[28px] md:px-[93px] text-secondary-600 font-medium text-[12px] md:text-[36px] mb-[3px] md:mb-3'>Lifestyle</h1>
                <div className='mb-[21px]'>
                    <h2 className='px-[28px] md:px-[93px] text-[10px] md:text-[32px] text-primary-600 mb-1 md:mb-4'>My Approach                    </h2>
                    <p className='px-[28px] md:px-[93px] mb-3 md:mb-6 text-[6px] md:text-[18px] text-[#322100]'>Modifications to lifestyle can have enormous benefits on dogs and their well-being. Simple changes in walking routines, exercise, activities and sleep monitoring can make a world of difference! I firmly believe in science and research and take the latest to help dogs live their best lives – holistically and naturally.</p>
                    <div className='w-full bg-primary-600 flex items-center justify-center'>
                    <img src={ASSETS.l1} alt='img' className='md:w-[917px] h-[157px] md:h-[512px]' />
                    </div>
                </div>
                <div className='mb-[21px]'>
                    <p className='px-[28px] md:px-[93px] mb-3 md:mb-6 text-[6px] md:text-[18px] text-[#322100]'>Making small but significant changes to the environment of a dog can change their world! It’s important to remember that our urban world is not the dog’s world. I guide my clients to support their mental and physiological well-being – because I know that it goes a long way to support their health and wellness. I provide a practical and systematic guide to make things simple, impactful and easy to follow.</p>
                    <div className='w-full bg-primary-600'>
                    <img src={ASSETS.l2} alt='img' className='md:w-full h-[157px] md:h-[512px]' />
                    </div>
                </div>
                <div className='mb-[21px]'>
                    <h2 className='px-[28px] md:px-[93px] text-[10px] md:text-[32px] text-primary-600 mb-1 md:mb-4'>Nutrition                    </h2>
                    <p className='px-[28px] md:px-[93px] mb-3 md:mb-6 text-[6px] md:text-[18px] text-[#322100]'>You are what you eat, and this is true for our dogs. What we put into the dog’s body is of such paramount importance, that every single dog family should give it plenty of thought. In my consultations, I guide you and provide you with a starting point and materials to get a better understanding of dog nutrition. The bottom line always is – feed fresh, feed clean and feed species-appropriate diets.</p>
                    <div className='w-full bg-primary-600 flex justify-between'>
                    <img src={ASSETS.lr3} alt='img' className='md:w-[452px] h-[157px] md:h-[512px]' />
                    <img src={ASSETS.ll3} alt='img' className='md:w-[452px] h-[157px] md:h-[512px]' />
                    </div>
                </div>
            </div>
            <div>
            <h1 className='px-[28px] md:px-[93px] text-secondary-600 font-medium text-[12px] md:text-[36px] mb-[3px] md:mb-3'>Our Ingredients</h1>
            <p className='px-[28px] md:px-[93px] text-[#322100] text-[5.49px] md:text-[18px]'>Made with real ingredients and real love</p>
            <div className='mb-[21px]'>
                    <h2 className='px-[28px] md:px-[93px] text-[10px] md:text-[32px] text-primary-600 mb-1 md:mb-4'>Grass-fed, hormone-free meat                    </h2>
                    <p className='px-[28px] md:px-[93px] mb-3 md:mb-6 text-[6px] md:text-[18px] text-[#322100]'>We genuinely care about what goes into your dog’s bowl and take our meat sourcing seriously. As the primary ingredient and source of protein for your dog, our hormone-free chicken, high-quality beef, lamb and pork come from human-grade farms and are grass fed. We use real lean meat, not leftovers!</p>
                    <div className='w-full bg-primary-600'>
                    <img src={ASSETS.in1} alt='img' className='md:w-full h-[157px] md:h-[512px]' />
                    </div>
                </div>
                <div className='mb-[21px]'>
                    <h2 className='px-[28px] md:px-[93px] text-[10px] md:text-[32px] text-primary-600 mb-1 md:mb-4'>Free-range, pasture-raised, certified humane eggs                    </h2>
                    <p className='px-[28px] md:px-[93px] mb-3 md:mb-6 text-[6px] md:text-[18px] text-[#322100]'>We source our eggs from Happy Hens Farms, a pioneer in free-range eggs in India. They take the best care of their hens and meet RSPCA standards. The hens are fed a natural diet of nutritious greens, seeds, bugs, grains, cereals, legumes and herbs. When you crack open these eggs, you can see the beautiful bright orange yolk!</p>
                    <div className='w-full bg-primary-600'>
                    <img src={ASSETS.in2} alt='img' className='md:w-full h-[157px] md:h-[512px]' />
                    </div>
                </div>
                <div className='mb-[21px]'>
                    <h2 className='px-[28px] md:px-[93px] text-[10px] md:text-[32px] text-primary-600 mb-1 md:mb-4'>Organic veggies, fresh herbs and superfoods                    </h2>
                    <p className='px-[28px] md:px-[93px] mb-3 md:mb-6 text-[6px] md:text-[18px] text-[#322100]'>Our food is packed with freshly chopped carrots, spinach, herbs and other veggies. We are mindful about where we source them. We use superfoods like Flax seeds, Moringa and Spirulina to ensure our recipes are full of the essential vitamins and minerals.</p>
                    <div className='w-full bg-primary-600'>
                    <img src={ASSETS.in3} alt='img' className='md:w-full h-[157px] md:h-[512px]' />
                    </div>
                </div>
                <div className='mb-[21px]'>
                    <h2 className='px-[28px] md:px-[93px] text-[10px] md:text-[32px] text-primary-600 mb-1 md:mb-4'>Organic, fair-trade, home-dried spices                    </h2>
                    <p className='px-[28px] md:px-[93px] mb-3 md:mb-6 text-[6px] md:text-[18px] text-[#322100]'>Our spices are home dried and ground using traditional Indian methods by Mom’s Kitchen. All raw spices are carefully chosen and purchased directly from ethical natural farmers in accordance with “Fair Trade”. They are pesticide free, chemical and fertilizer free. It’s our way of supporting the small framers and small businesses while getting top notch spices that lend heavy duty healing properties to our food.</p>
                    <div className='w-full bg-primary-600'>
                    <img src={ASSETS.in4} alt='img' className='md:w-full h-[157px] md:h-[512px]' />
                    </div>
                </div>
        </div>
        </div>
        <div className='h-[157px] md:h-[508px] w-full flex items-center justify-center bg-primary-600'>
            <h1 className='text-center text-[14px] md:text-46px font-semibold text-secondary-600'>Meet Our Teem</h1>
        </div>
        <div>
        <div className='tabs flex mt-5 md:mt-16 border-b border-[#F2F2F2] mx-6 justify-around'>
            {
                categories.map((category, ind) => {
                    return (
                        <Tab
            key={ind}
            className={classNames(tab === ind && 'active')}
            onClick={() => handleTab(ind)}
          >
            <p className='text-[6px] md:text-lg text-primary-600'>{category}</p>
          </Tab>
                    )
                })
            }
        </div>
        <div className='flex flex-col justify-center items-center py-8'>
        <div>
        <p className='text-[14px] md:text-32px'>{categories[tab]}</p>
        <img src={ASSETS.stroke} alt='' className='' />
        </div>
        <div className='px-[46px] md:px-[137px] w-full'>
            <Step />
        </div>
        </div>  
        </div>
        <div className='px-[70px]'>
            <FooterLight />
        </div>
    </div>
  )
}

export default AboutUs



const Tab = styled.div`
  padding-block: 3px;
  opacity: 0.5;
  position: relative;
  cursor: pointer;
  transition: 0.4s ease;
  &::before {
    content: '';
    position: absolute;
    bottom: -4px;
    width: 0%;
    height: 4px;
    background-color: #f3a31a;
    transition: 0.4s ease;
    transform: translateX(-50%);
    left: 50%;
  }

  &.active {
    opacity: 1;
    &::before {
      width: 100%;
    }
  }
`;
