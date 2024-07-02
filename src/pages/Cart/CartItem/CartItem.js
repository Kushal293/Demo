import React, { useEffect, useState } from 'react'
import { useCart } from 'context/CartContext'
import { getProductById } from 'http';
import ASSETS from 'assets';
import Select from 'components/Select/Select';

const CartItem = ({id, quantity}) => {

    const [product, setProduct] = useState({});
    const { getItemQuantity,
        increaseCartQuantity,
        decreaseCartQuantity,
        removeFromCart,
      } = useCart();

      const getProduct = async () => {
        let prod = await getProductById(id);
        prod = prod?.json();
        setProduct(prod?.data);
      }

      useEffect(() => {
        getProduct();
      },[])

  return (
            <tr>
                <td className='w-[40%]'>
                <div className='flex items-stretch gap-4'>
                  <div className='w-[90px] h-[90px] rounded-sm overflow-hidden'>
                    <img
                      src={product?.images[0]?.url}
                      className='w-full h-full object-cover'
                      alt=''
                    />
                  </div>
                  <div className='flex flex-col justify-between '>
                    <p className='text-lg'>
                      {product?.name}
                    </p>
                    <Select />
                  </div>
                </div>
              </td>
              <td className='text-lg text-secondary-600'>Rs. 175/-</td>
              <td className='text-lg text-secondary-600'>quantity</td>
              <td className='text-lg text-secondary-600'>Rs. 350/-</td>
              <td>
                <div className='w-6 h-6 rounded-md grid place-items-center bg-red-700 cursor-pointer' onClick={() => removeFromCart(id)}>
                  <img src={ASSETS.crossWhite} alt='' />
                </div>
              </td>
            </tr>
  )
}

export default CartItem