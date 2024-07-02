import React from 'react';
import Topbar from 'components/Topbar/Topbar';
import { Outlet } from 'react-router-dom';
import ScrollToTop from 'helper/ScrollToTop';

const MainLayout = () => {
  return (
    <div className='min-h-screen flex flex-col'>
      <Topbar />
      <main className='flex-grow flex flex-col h-0 overflow-auto bg-white'>
      <ScrollToTop />
        <Outlet />
      </main>
    </div>
  );
};

export default MainLayout;
