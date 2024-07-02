import React from 'react';

import HomeSlider from 'pages/LandingPage/Components/HomeSlider/HomeSlider';
import MealTopper from './Components/MealToppers/MealTopper';
import Perks from './Components/Perks/Perks';
import SupplimentChart from './Components/SupplimentChart/SupplimentChart';
import OurStory from './Components/OurStory/OurStory';
import IdealWeight from './Components/IdealWeight/IdealWeight';
import Consult from './Components/Consult/Consult';
import VideoSection from './Components/VideoSection/VideoSection';
import Footer from './Components/Footer/Footer';

const LandingPage = () => {
  return (
    <div className='flex flex-col'>
      <HomeSlider />
      <MealTopper />
      <Perks />
      <SupplimentChart />
      <OurStory />
      <IdealWeight />
      <Consult />
      <VideoSection />
      <Footer />
    </div>
  );
};

export default LandingPage;
