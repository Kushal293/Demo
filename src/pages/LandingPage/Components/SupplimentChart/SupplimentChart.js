import { homeProducts } from 'http';
import React, { useEffect, useState } from 'react';

import styled from 'styled-components';

const SupplimentChart = () => {

  const [chart, setChart] = useState([]);

  const getChartData = async () => {
    const res = await homeProducts();
    console.log(res?.data?.data);
    const results = res?.data?.data;
    setChart(results);
  }

  useEffect(() => {
    getChartData();
  }, [])
  
  return (
    <div className='sm:p-24 text-center p-[25px]'>
      <p className='lg:text-32px sm:text-2xl text-primary-600 text-base'>
        Supplements chart for{' '}
        <span className='text-secondary-600'>all age range</span>
      </p>
      <Table className='mt-4'>
        <tbody>
          <tr>
            <td>
              <div className='w-full h-full bg-secondary-100 '></div>
            </td>
            <td>
              <div className='h-full w-full flex flex-col justify-end bg-secondary-100 '>
                <p className='sm:text-sm text-[10px] font-light'>Puppy</p>
                <p className='sm:text-10px text-[6px]'>(2months onwards) </p>
              </div>
            </td>
            <td>
              <div className='h-full w-full flex flex-col justify-end bg-secondary-100'>
                <p className='sm:text-sm text-[10px]  font-light'>Adult</p>
                <p className='sm:text-10px text-[6px]'>(1Year onwards)</p>
              </div>
            </td>
            <td>
              <div className='h-full w-full flex flex-col justify-end bg-secondary-100'>
                <p className='sm:text-sm text-[10px] font-light'>Senior Dogs</p>
                <p className='sm:text-10px text-[6px]'>(7Years onwards)</p>
              </div>
            </td>
          </tr>
          {
            chart.map((item) => {
              return (
                <tr key={item?.health_condition_id}>
            <td>
              <div className='w-full h-full items-center flex justify-center bg-secondary-100 '>
                <p className='sm:text-sm text-[8px] text-center font-light max-w-[15ch] '>
                  {item?.health_condition}
                </p>
              </div>
            </td>
            <td>
              <div className='flex flex-col gap-[2px]'>
                {
                  (item?.products?.puppy.length > 0) ? item?.products?.puppy?.map(product => {
                    return(
                    <div className='bg-secondary-100 cell' key={product?._id}>
                  <p className='sm:text-10px text-[6px] font-light'>
                    {product?.name}
                  </p>
                </div>
                    )
                  }) :
                    <div className='bg-secondary-100 cell'></div>
                }
              </div>
            </td>
            <td>
              <div className='flex flex-col gap-[2px]'>
                {
                  (item?.products?.adult.length > 0) ? item?.products?.adult?.map(product => {
                    return (
                    <div className='bg-secondary-100 cell' key={product?._id}>
                  <p className='sm:text-10px text-[6px] font-light'>
                    {product?.name}
                  </p>
                </div>
                ) 
                  }) :
                  <div className='bg-secondary-100 cell'></div>
                }
                
              </div>
            </td>
            <td>
              <div className='flex flex-col gap-[2px]'>
                {
                  (item?.products?.senior.length > 0) ? item?.products?.senior?.map(product => {
                    return (
                    <div className='bg-secondary-100 cell' key={product?._id}>
                  <p className='sm:text-10px text-[6px] font-light'>
                    {product?.name}
                  </p>
                </div>
                    )
                  }) :
                  <div className='bg-secondary-100 cell'></div>
                }
                
              </div>
            </td>
          </tr>
              )
            })
          }
        </tbody>
      </Table>
    </div>
  );
};

export default SupplimentChart;

const Table = styled.table`
  max-width: 841px;
  margin-inline: auto;
  table-layout: fixed;
  width: 100%;
  & td {
    /* padding-inline: 8px; */
    border: 5.5px solid white;
    height: 69px;

    & .cell {
      padding: 6px 8px;
    }
  }
`;
