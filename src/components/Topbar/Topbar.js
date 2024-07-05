import ASSETS from 'assets';
import { searchProducts } from 'http';
import React, { useEffect, useRef, useState } from 'react';
import { Link } from 'react-router-dom';

const Topbar = () => {

  const [search, setSearch] = useState("");
  const [res, setRes] = useState([]);
  const [open, setOpen] = useState(false);

  
  const btnRef = useRef();

  useEffect(() => {
    const closeDropdown = e => {
        if (!btnRef.current.contains(e.target)) {
            setOpen(false);
        }
    }
    document.body.addEventListener('click', closeDropdown)
    return () => document.body.removeEventListener('click', closeDropdown)
}, [])


  const handleSearch = async (e) => {
    // const res = await 
    e.preventDefault();
    console.log(search);
    
    const searchData = await searchProducts(search);
    console.log(searchData?.data?.data);
    const results = searchData?.data?.data;
    setRes(results);
  }
  
  return (
    <header
      className='w-screen flex justify-between items-center xl:px-[70px] bg-primary-600 sticky h-[50px] sm:h-20  px-6 md:px-[35px] gap-2'
      style={{ boxShadow: '1px 1px 12px black', zIndex: '10' }}
    >
      <div className='logo'>
        <img src={ASSETS.logo} className='h-[27px] sm:h-10' alt='' />
      </div>
      <div className='flex flex-1 items-center gap-3 sm:gap-9 justify-end'>
        <form className='search flex-1 max-w-[163px] sm:max-w-[349px] bg-tritary h-6 sm:h-[38px] rounded sm:rounded-[10px] px-[10px] flex items-center gap-3' onSubmit={(e) => handleSearch(e)}>
          <input
            type='text'
            className='h-full flex-1 outline-none border-none bg-transparent text-primary-600 sm:text-sm text-[10px]'
            placeholder='Search for products....'
            name='search'
            id='search'
            value={search}
            onChange={(e) => setSearch(e.target.value)}
          />
          <img src={ASSETS.search} className='h-3 w-3 sm:h-4 sm:w-4 mr-2' alt='' />
        </form>
        <div className='gap-3 hidden lg:flex'>
          <Link to="/"><p className='text-lg text-white'>Home</p></Link>
          <Link to="/about-us"><p className='text-lg text-white'>About</p></Link>
          <Link to="/shop"><p className='text-lg text-white'>Shop</p></Link>
          <Link to="/profile"><p className='text-lg text-white'>My Account</p></Link>
          <Link to="/contact"><p className='text-lg text-white'>Contact Us</p></Link>
          <Link to="/cart"><img src={ASSETS.cart} alt='' /></Link>
        </div>
        <div className='flex items-center gap-3 lg:hidden'>
        <Link to="/cart"><img src={ASSETS.cart} alt='' /></Link>
          <div className='relative'>
          <img src={ASSETS.burgerMenu} alt='menu' ref={btnRef} onClick={() => setOpen(!open)} />
          <div className={` ${open ? "flex flex-col gap-2 bg-primary-600 absolute top-7 -left-[70px] w-[100px] px-2 py-2" : "hidden"}`}>
            <Link to="/"><p className='text-[10px] md:text-lg text-white'>Home</p></Link>
            <Link to="/about-us"><p className='text-[10px] md:text-lg text-white'>About</p></Link>
            <Link to="/shop"><p className='text-[10px] md:text-lg text-white'>Shop</p></Link>
            <Link to="/profile"><p className='text-[10px] md:text-lg text-white'>My Account</p></Link>
            <Link to="/contact"><p className='text-[10px] md:text-lg text-white'>Contact Us</p></Link>
          </div>
          </div>
        </div>
      </div>
    </header>
  );
};

export default Topbar;
