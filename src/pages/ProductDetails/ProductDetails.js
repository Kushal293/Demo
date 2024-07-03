import React, { useEffect, useState } from 'react';

import styled from 'styled-components';
import { useLocation, useNavigate, useParams } from 'react-router-dom';
import { useSelector } from 'react-redux';

import FooterLight from 'components/FooterLight/FooterLight';

import ASSETS from 'assets';
import Select from 'components/Select/Select';
import Counter from 'components/Counter/Counter';
import Button from 'components/Button/Button';
import { assetsBaseUrl, baseUrl } from 'app.config';
import classNames from 'classnames';
import { getRelatedProducts } from 'http';
import { getRequest } from 'http';
import { postRequest } from 'http';

const ProductDetails = () => {
  // const { product, category, shop } = useLocation().state;
  const navigate = useNavigate();
  const[product, setProduct] = useState({});
  const [count, setCount] = useState(1);
  const [selectedImage, setSelectedImage] = useState(0);
  const [size, setSize] = useState("");
  const [price, setPrice] = useState("");
  const [relatedProducts, setRelatedProducts] = useState([]);
  const [other, setOther] = useState([]);
  const { id } = useParams();
  const [isDetail, setIsDetail] = useState(false);
  const [isBenifits, setIsBenifits] = useState(false);
  const [isIngriedents, setIsIngriedents] = useState(false);
  const [isStorage, setIsStrorage] = useState(false);
  const [isFeed, setIsFeed] = useState(false);

  // const { products } = useSelector(state => state.shop);

  const handleSizeChange = (newPrice) => {
    setPrice(newPrice);
  }

  const handleGetRelatedProducts = async () => {
    try {
      const { data } = await getRelatedProducts(id, 1);
      setRelatedProducts(data.data);
      console.log(data?.data);
    } catch (err) {
      console.log(err.message);
    }
  };

  // const handleGetOtherMeatOptions = () => {
  //   if (category.name.toLowerCase() !== 'treats') {
  //     return null;
  //   }
  //   const options = products['Treats'];
  //   let otherOptions = [];

  //   while (otherOptions.length !== 4) {
  //     let index = Math.floor(Math.random() * options.length);
  //     const item = options[index];
  //     const exist =
  //       otherOptions.find(i => i._id === item._id) || product._id === item._id;
  //     if (!exist) {
  //       otherOptions.push(item);
  //     }
  //   }
  //   setOther(otherOptions);
  // };

  const getProduct = async () => {
    const url = `${baseUrl}/rooted_in_love/user/product/getproductdetails`
    const prod_id = {
      "product_id":id
  }
    const res = await postRequest(url, prod_id);
    console.log(res?.data);
    setProduct(res?.data);
    setSelectedImage(res?.data?.images[0]?.url)
    setPrice(res?.data?.sizes[0]?.price)
  }

  const handleNavigate = (id) => {
    navigate(`/product/${id}`);
  }

  useEffect(() => {
    // if (product.images.length) {
    //   setSelectedImage(product.images[0].url);
    // }
    // if (product.sizes.length) {
    //   setSize(product.sizes[0]);
    // }
    getProduct();
    handleGetRelatedProducts();
    // handleGetOtherMeatOptions();
    // eslint-disable-next-line
  }, [id]);
  return (
    <Container>
      <div className='h-4 bg-secondary-100'></div>
     <div className='px-10 grid grid-cols-2 gap-[70px] items-start pt-12'>
      <div className='image-gallery '>
        <div className='gap-6 w-full flex justify-end'>
          <div className='min-w-[90px] max-h-[380px]  flex flex-col gap-[6px] overflow-auto'>
            <p className='text-[10px] text-primary-600'>Product Preview</p> 
             {product?.images?.length > 0 &&
              product?.images?.map(img => (
                <div
                  key={img?._id}
                  className={classNames(
                    'rounded w-full min-h-[90px] aspect-square overflow-auto bg-gray-100'
                  )}
                  onClick={() => setSelectedImage(img?.url)}
                >
                  <img
                    src={`${assetsBaseUrl}/${img.url}`}
                    className={classNames(
                      'w-[90px] h-full object-cover max-w-[90px]',
                      selectedImage === img?.url &&
                        'border-[2px] border-secondary-600 rounded-md'
                    )}
                    alt=''
                  />
                </div>
              ))}
          </div>
          <div className='flex-grow max-w-[380px] rounded overflow-hidden'>
            <img
              src={`${assetsBaseUrl}/${selectedImage}`}
              className='w-full aspect-square object-cover'
              alt=''
            />
          </div>
        </div>
        {product?.other_options?.length > 0 && (
          <>
            <p className='text-lg text-primary-600  mt-32'>
              Other Meat options{' '}
            </p>
            <div className='flex items-start w-[850px] flex-wrap gap-4 mt-[6px]'>
              {product?.other_options?.map(p => (
                <div key={p?._id} className='w-[110px] relative cursor-pointer' onClick={() => handleNavigate(p?._id)}>
                  <img src={ASSETS.circle} className='w-full' alt='' />
                  <div className='absolute top-0 left-0 w-full p-[13px] translate-y-[-3%]'>
                    <img
                      src={`${assetsBaseUrl}/${p?.images[0].url}`}
                      className='w-full aspect-square rounded-full'
                      alt=''
                    />
                  </div>
                  <p className='text-sm text-center mt-[9px]'>{p?.name}</p>
                </div>
              ))}
            </div>
          </>
        )}

        {relatedProducts?.length > 0 && (
          <>
            <p className='text-lg text-primary-600 mt-32'>Related products</p>
            <div className='flex items-start w-[850px] flex-wrap gap-4 mt-[6px]'>
              {
                relatedProducts.map(prod => {
                  return (
                    <div className='w-[110px] relative cursor-pointer' key={prod?._id} onClick={() => handleNavigate(prod?._id)}>
                <img src={ASSETS.circle} className='w-full' alt='' />
                <div className='absolute top-0 left-0 w-full p-[13px] translate-y-[-3%]'>
                  <img
                    src={`${assetsBaseUrl}/${prod?.image?.url}`}
                    className='w-full aspect-square rounded-full'
                    alt=''
                  />
                </div>
                <p className='text-sm text-center mt-[9px]'>{prod?.name}</p>
              </div>
                  )
                })
              }
            </div>
          </>
        )}
      </div>
      <div className='details max-w-[440px]'>
        <p className='text-[10px] text-primary-600 capitalize'>
          Home / Shop  / {product?.name}
        </p>
        <p className='text-26px text-primary-600 text-medium mt-2 capitalize'>
          {product?.name}
        </p>
        <div className='flex flex-col gap-[6px] mt-[42px]'>
          <div className='bg-secondary-600 cursor-pointer' onClick={() => setIsDetail(!isDetail)}>
            <div className='h-11 flex items-center gap-4 px-5 rounded-sm'>
              <div className='w-0 h-0 border-l-[6px] border-l-transparent border-b-[8px] border-b-white border-r-[6px] border-r-transparent'></div>
              <p className='text-lg text-white'>Product Description</p>
              
            </div>
            {isDetail && <p className='bg-primary-600 text-tritary p-4'>
              {product?.description}
                </p>}
          </div>
          <div className='bg-secondary-600 cursor-pointer' onClick={() => setIsBenifits(!isBenifits)}>
            <div className='h-11 flex items-center gap-4 px-5 rounded-sm'>
              <div className='w-0 h-0 border-l-[6px] border-l-transparent border-b-[8px] border-b-white border-r-[6px] border-r-transparent'></div>
              <p className='text-lg text-white'>Benefits </p>
            </div>
            {isBenifits && <p className='bg-primary-600 text-tritary p-4'>
                {product?.description}
                </p>}
          </div>
          <div className='bg-secondary-600 cursor-pointer' onClick={() => setIsIngriedents(!isIngriedents)}>
            <div className='h-11 flex items-center gap-4 px-5 rounded-sm'>
              <div className='w-0 h-0 border-l-[6px] border-l-transparent border-b-[8px] border-b-white border-r-[6px] border-r-transparent'></div>
              <p className='text-lg text-white'>Ingredients </p>
            </div>
            {isIngriedents && <p className='bg-primary-600 text-tritary p-4'>
              {product?.benefits}
                </p>}
          </div>
          <div className='bg-secondary-600 cursor-pointer' onClick={() => setIsStrorage(!isStorage)}>
            <div className='h-11 flex items-center gap-4 px-5 rounded-sm'>
              <div className='w-0 h-0 border-l-[6px] border-l-transparent border-b-[8px] border-b-white border-r-[6px] border-r-transparent'></div>
              <p className='text-lg text-white'>Storage </p>
            </div>
            {isStorage && <p className='bg-primary-600 text-tritary p-4'>
              {product?.storage}
                </p>}
          </div>
          <div className='bg-secondary-600 cursor-pointer' onClick={() => setIsFeed(!isFeed)}>
            <div className='h-11 flex items-center gap-4 px-5 rounded-sm'>
              <div className='w-0 h-0 border-l-[6px] border-l-transparent border-b-[8px] border-b-white border-r-[6px] border-r-transparent'></div>
              <p className='text-lg text-white'>Feeding Instructions</p>
            </div>
            {isFeed && <p className='bg-primary-600 text-tritary p-4'>
              {product?.feeding_instruction}
                </p>}
          </div>
        </div>
        <div className='flex items-center gap-5 mt-[42px]'>
          <div className='flex-grow'>
            <Select
              className='!w-[100%] h-11 !rounded-sm [&_select]:!text-lg'
              options={product?.sizes} onSizeChange={handleSizeChange}
            />
          </div>
          <Counter
            className='h-11 rounded-sm w-[128px] [&_span]:text-lg !px-[10px]'
            count={count}
            setCount={setCount}
          />
        </div>
        <div className='flex items-center gap-6 mt-6'>
          <Button
            label='ADD TO CART'
            className='!rounded-[3px] !h-[45px] !py-0 !px-[14px] font-semibold'
          />
          <p className='text-xl text-secondary-600'>Rs. {price}</p>
        </div>
      </div>
    </div>
    <div className='mt-[73px]'>
      <p className='text-26px text-primary-600 text-medium mb-8 px-[70px]'>
        You may like these Hot Selling Products
      </p>

      <div className='flex gap-2 justify-between px-[70px]'>
        <div>
          <img
            src={ASSETS.suppliment}
            className='w-[212px] h-[200px] object-cover'
            alt=''
          />
          <p className='text-lg text-center mt-3'>Quick Heal Balm</p>
        </div>
        <div>
          <img
            src={ASSETS.suppliment}
            className='w-[212px] h-[200px] object-cover'
            alt=''
          />
          <p className='text-lg text-center mt-3 w-[212px]'>
            Organic Paw & Snout Butter
          </p>
        </div>
        <div>
          <img
            src={ASSETS.suppliment}
            className='w-[212px] h-[200px] object-cover'
            alt=''
          />
          <p className='text-lg text-center mt-3 w-[212px]'>
            Chicken Bits (Single ingredient)
          </p>
        </div>
        <div>
          <img
            src={ASSETS.suppliment}
            className='w-[212px] h-[200px] object-cover'
            alt=''
          />
          <p className='text-lg text-center mt-3 w-[212px]'>
            Chicken neck (Single ingredient)
          </p>
        </div>
      </div>
    </div>
    <div className='shadow'></div> 
    <div className='px-[70px]'>
      <FooterLight />
    </div>
  </Container>
);
};

export default ProductDetails;

const Container = styled.div`
& td {
  padding-block: 26px 35px;
  border-bottom: 1px solid #bababa;
  }

  & .shadow {
    box-shadow: 0px 4px 4px 0px #00000040;
    margin-block: 39px;
    height: 4px;
  }
`;
