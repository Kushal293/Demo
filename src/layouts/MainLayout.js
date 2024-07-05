import React, { useEffect } from 'react';
import Topbar from 'components/Topbar/Topbar';
import { Outlet, useLocation } from 'react-router-dom';

const MainLayout = () => {

  const { pathname } = useLocation();
  useEffect(() => {
    document.body.getElementsByTagName("main")[0].scrollTo(0,0);
  },[pathname])
  return (
    <div className='min-h-screen flex flex-col'>
      <Topbar />
      <main className='flex-grow flex flex-col h-0 overflow-auto bg-white'>
        <Outlet />
      </main>
    </div>
  );
};

export default MainLayout;
