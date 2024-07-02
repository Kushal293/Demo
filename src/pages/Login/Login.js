import React from 'react';

import { useGoogleLogin } from '@react-oauth/google';
import axios from 'axios';

import ASSETS from 'assets';

const Login = () => {
  const login = useGoogleLogin({
    onSuccess: res => {
      axios
        .get(
          `https://www.googleapis.com/oauth2/v1/userinfo?access_token=${res.access_token}`,
          {
            headers: {
              Authorization: `Bearer ${res.access_token}`,
              Accept: 'application/json',
            },
          }
        )
        .then(data => {
          console.log(data.data);
        })
        .catch(err => console.log(err));
    },
    onError: err => {
      console.log(err);
    },
  });

  return (
    <div className='min-h-[100dvh] grid items-stretch grid-cols-10'>
      <div className='col-span-6 bg-[#EDEDED] flex flex-col justify-center'>
        <img
          src={ASSETS.loginBg}
          className='w-full max-h-[100dvh] object-contain'
          alt=''
        />
      </div>
      <div
        className='col-span-4 bg-cover bg-center bg-no-repeat'
        style={{ backgroundImage: `url(${ASSETS.slider1})` }}
      >
        <div className='h-full w-full bg-primary-600-65% flex items-center justify-center'>
          <div className='flex flex-col items-center w-full z-10 gap-[18px]'>
            <p className='text-26px text-secondary-600 font-medium mb-[3px]'>
              LOGIN WITH
            </p>

            <button className='w-full max-w-[308px] bg-[#1976D2] flex items-center justify-center gap-4 h-10 rounded shadow-md'>
              <img src={ASSETS.facebookIcon} alt='' />
              <p className='text-lg text-white'>Facebook</p>
            </button>
            <button
              onClick={login}
              className='w-full max-w-[308px] bg-white flex items-center justify-center gap-4 h-10 rounded shadow-md'
            >
              <img src={ASSETS.googleIcon} alt='' />
              <p className='text-lg '>Gmail</p>
            </button>
            <button className='w-full max-w-[308px] bg-instagram flex items-center justify-center gap-4 h-10 rounded shadow-md'>
              <img src={ASSETS.instagramIcon} alt='' />
              <p className='text-lg text-white'>Instagram</p>
            </button>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Login;
