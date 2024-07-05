import React, { useEffect, useState } from 'react';

import styled from 'styled-components';
import classNames from 'classnames';
import { useSelector } from 'react-redux';
import { useDispatch } from 'react-redux';

import Product from './Product/Product';
import Button from 'components/Button/Button';
import FooterLight from 'components/FooterLight/FooterLight';

import ASSETS from 'assets';
import { Link, useNavigate } from 'react-router-dom';

const Shop = () => {
  const dispatch = useDispatch();
  const { categories, products } = useSelector(state => state.shop);
  const [tab, setTab] = useState(0);
  const navigate = useNavigate();

  const handleTab = tab => {
    setTab(tab);
    // navigate(`/shop/#${tab}`)
  };

  useEffect(() => {
    dispatch.shop.handleGetCategories();
    // eslint-disable-next-line
  }, []);

  useEffect(() => {
    if (categories.length) {
      setTab(categories[0].name);
    }
    // eslint-disable-next-line
  }, [categories]);

  return (
    <Container className='bg-white' id='top'>
      <div className='w-full h-[155px] md:h-[calc(100dvh_-_80px)]'>
      <div
        className='h-full banner bg-no-repeat bg-contain md:bg-cover md:bg-center'
        style={{
          backgroundImage: `linear-gradient(#17545EA6,#17545EA6),url(${ASSETS.shopbanner})`,
        }}
      >
      
        <p className='text-sm md:text-46px text-white font-semibold'>Our Products !</p>
        <p className='text-[10px] md:text-32px text-white mt-2 md:mt-6'>
          Purchase the{' '}
          <span className='text-secondary-600 '>
            best for your loved ones !
          </span>
        </p>
      </div>
      </div>
      <div className='tabs flex mt-5 md:mt-16 border-b border-[#F2F2F2] mx-6 justify-around'>
        {categories.map(category => (
          <a href={`#${category?.name}`}>
            <Tab
            key={category._id}
            className={classNames(tab === category.name && 'active')}
            onClick={() => handleTab(category.name)}
          >
            <p className='text-[6px] md:text-lg text-primary-600'>{category.name}</p>
          </Tab>
          </a>
        ))}
      </div>
      <div className='wrapper'>
        {categories.map(category => (
          <div key={category._id} id={`${category.name}`}>
            <div className='section-title mt-2 md:mt-6 flex flex-col justify-center items-center'>
              <p className='text-[14px] md:text-32px'>{category.name}</p>
              <img src={ASSETS.stroke} alt='' className='' />
            </div>
            <Grid className='mt-3 md:mt-10 gap-9 xl:gap-20 md:gap-16'>
              {products[category.name]?.map(product => (
                <Product
                  key={product?._id}
                  product={product}
                  category={category}
                  shop={true}
                />
              ))}
            </Grid>
          </div>
        ))}
        <div className='flex justify-center gap-3 mt-[56px]'>
          <Link to="/">
            <Button
              label='Home'
              className='!text-[7px] md:!text-lg !px-3 md:!px-10 !py-1 md:!py-3 !rounded-[1/17px] md:!rounded-sm bg-transparent !text-primary-600 !font-medium border border-primary-600'
            />
          </Link>
          <a href='#top'>
          <Button
            label='Top of the page '
            className='!py-[7px] md:!py-3 px-4 md:px-10 !text-[5.47px] md:!text-lg !rounded-sm !font-medium'
          />
          </a>
        </div>
      </div>
      <div className='px-[67px] mt-20'>
        <FooterLight />
      </div>
    </Container>
  );
};

export default Shop;

const Container = styled.div`
  & .banner {
    /* height: calc(100dvh - 80px); */
    padding-inline: 70px;
    padding-block: 92px;
    @media (max-width: 760px) {
      padding-inline: 23px;
      padding-block: 27px;
      /* height: 40dvh; */
      
    }
  }

  & .wrapper {
    padding-inline: 108px;

    @media (max-width: 760px) {
      padding-inline: 23px;
    }
  }

  & .section-title {
    margin-top: 60px;
    @media (max-width: 760px) {
      margin-top: 16px;
    }
  }
`;

const Grid = styled.div`
  display: grid;
  grid-template-columns: repeat(auto-fill, minmax(200px, 1fr));

  @media (max-width: 760px) {
    grid-template-columns: repeat(auto-fill, minmax(86.25px, 1fr));
    }
`;

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
