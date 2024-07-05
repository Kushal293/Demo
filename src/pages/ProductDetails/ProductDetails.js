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
  const[hotProducts, setHotProducs] = useState([]);
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

  const handleSizeChange = (info) => {
    setPrice(info[0]);
    setSize(info[1]);
  }

  const handleGetRelatedProducts = async () => {
    try {
      const { data } = await getRelatedProducts(id, 1);
      setRelatedProducts(data.data);
      // console.log(data?.data);
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
    // console.log(res?.data);
    setProduct(res?.data);
    setSelectedImage(res?.data?.images[0]?.url)
    setPrice(res?.data?.sizes[0]?.price)
  }

  const getHotSellingProducts = async () => {
    const url = `${baseUrl}/rooted_in_love/user/product/gethotsellingproducts`;
    const res = await getRequest(url);
    // console.log(res?.data);
    setHotProducs(res?.data)
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
    getHotSellingProducts();
    // console.log(document.body.getElementsByTagName("main")[0].scrollTo(0,0));
    
    // handleGetOtherMeatOptions();
    // eslint-disable-next-line
  }, [id]);
  return (
    <Container>
      <div className='h-4 bg-secondary-100'></div>
     <div className='px-6 md:px-[100px] grid grid-cols-2 gap-6 md:gap-[70px] items-start pt-7 md:pt-12'>
      <div className='image-gallery '>
        <div className='gap-2 md:gap-6 w-full flex justify-start'>
          <div className='pt-1 md:pt-0 w-[27px] md:min-w-[90px] md:max-h-[380px] flex flex-col gap-[2px] md:gap-[6px] overflow-hidden md:overflow-auto'>
            <p className='hidden sm:block text-[10px] text-primary-600'>Product Preview</p> 
             {product?.images?.length > 0 &&
              product?.images?.map(img => (
                <div
                  key={img?._id}
                  className={classNames(
                    'rounded w-[27px] h-[27px] md:w-full md:min-h-[90px] aspect-square overflow-auto bg-gray-100'
                  )}
                  onClick={() => setSelectedImage(img?.url)}
                >
                  <img
                    src={`${assetsBaseUrl}/${img.url}`}
                    className={classNames(
                      'w-[27px] h-[27px] md:w-[90px] md:h-full object-cover md:max-w-[90px] cursor-pointer',
                      selectedImage === img?.url &&
                        'border-[2px] border-secondary-600 rounded-md cursor-pointer'
                    )}
                    alt=''
                  />
                </div>
              ))}
          </div>
          <div className='md:flex-grow w-[131.46px] h-[131.46px] md:h-full md:max-w-[380px] rounded overflow-hidden'>
            <img
              src={`${assetsBaseUrl}/${selectedImage}`}
              className='w-[131.46px] h-[131.46px] md:h-full md:w-full aspect-square object-cover'
              alt=''
            />
          </div>
        </div>
        {product?.other_options?.length > 0 && (
          <div className='md:px-[92px]'>
            <p className='text-[10px] md:text-lg text-primary-600 mt-2 md:mt-32'>
              Other Meat options{' '}
            </p>
            <div className='flex items-start w-[174px] md:w-[700px] flex-wrap gap-1 md:gap-4 mt-[6px]'>
              {product?.other_options?.map(p => (
                <div key={p?._id} className='w-[80.52px] md:w-[110px] relative cursor-pointer' onClick={() => handleNavigate(p?._id)}>
                  <img src={ASSETS.circle} className='w-full' alt='' />
                  <div className='absolute top-0 left-0 w-full p-[8px] translate-y-[-3%]'>
                    <img
                      src={`${assetsBaseUrl}/${p?.images[0].url}`}
                      className='w-full aspect-square rounded-full'
                      alt=''
                    />
                  </div>
                  <p className='text-[10.25px] md:text-sm text-center mt-[6px] md:mt-[9px]'>{p?.name}</p>
                </div>
              ))}
            </div>
          </div>
        )}

        {relatedProducts?.length > 0 && (
          <div className='mt-2 md:mt-5'>
            <p className='text-[10px] md:text-lg text-primary-600 '>Related products</p>
            <div className='flex items-start w-[174px] md:w-[625px] flex-wrap gap-1 md:gap-5 mt-[6px]'>
              {
                relatedProducts.map(prod => {
                  return (
                    <div className='w-[80.52px] md:w-[110px] relative cursor-pointer' key={prod?._id} onClick={() => handleNavigate(prod?._id)}>
                <img src={ASSETS.circle} className='w-full' alt='' />
                <div className='absolute top-0 left-0 w-full p-[8px] translate-y-[-3%]'>
                  <img
                    src={`${assetsBaseUrl}/${prod?.image?.url}`}
                    className='w-full aspect-square rounded-full'
                    alt=''
                  />
                </div>
                <p className='text-[10.25px] md:text-sm text-center mt-[6px] md:mt-[9px]'>{prod?.name}</p>
              </div>
                  )
                })
              }
            </div>
          </div>
        )}
      </div>
      <div className='details max-w-[440px]'>
        <p className='text-[4px] md:text-[10px] text-primary-600 capitalize'>
          Home / Shop  / {product?.name}
        </p>
        <p className='text-[9px] md:text-26px text-primary-600 text-medium mt-[2px] md:mt-2 capitalize'>
          {product?.name}
        </p>
        <div className='flex flex-col gap-[2px] md:gap-[6px] mt-[8px] md:mt-[42px]'>
          <div className='bg-secondary-600 cursor-pointer' onClick={() => setIsDetail(!isDetail)}>
            <div className='h-4 md:h-11 flex items-center gap-2 md:gap-4 px-2 md:px-5 rounded-sm'>
              <div className='w-0 h-0 border-l-[3px] md:border-l-[6px] border-l-transparent border-b-[4px] md:border-b-[8px] border-b-white border-r-[3px] md:border-r-[6px] border-r-transparent'></div>
              <p className='text-[6.2px] md:text-lg text-white'>Product Description</p>
              
            </div>
            {isDetail && <p className='text-[7px] md:text-lg bg-primary-600 text-tritary p-2 md:p-4'>
              {product?.description}
                </p>}
          </div>
          <div className='bg-secondary-600 cursor-pointer' onClick={() => setIsBenifits(!isBenifits)}>
            <div className='h-4 md:h-11 flex items-center gap-2 md:gap-4 px-2 md:px-5 rounded-sm'>
              <div className='w-0 h-0 border-l-[3px] md:border-l-[6px] border-l-transparent border-b-[4px] md:border-b-[8px] border-b-white border-r-[3px] md:border-r-[6px] border-r-transparent'></div>
              <p className='text-[6.2px] md:text-lg text-white'>Benefits </p>
            </div>
            {isBenifits && <p className='text-[7px] md:text-lg bg-primary-600 text-tritary p-2 md:p-4'>
                {product?.benefits}
                </p>}
          </div>
          <div className='bg-secondary-600 cursor-pointer' onClick={() => setIsIngriedents(!isIngriedents)}>
            <div className='h-4 md:h-11 flex items-center gap-2 md:gap-4 px-2 md:px-5 rounded-sm'>
              <div className='w-0 h-0 border-l-[3px] md:border-l-[6px] border-l-transparent border-b-[4px] md:border-b-[8px] border-b-white border-r-[3px] md:border-r-[6px] border-r-transparent'></div>
              <p className='text-[6.2px] md:text-lg text-white'>Ingredients </p>
            </div>
            {isIngriedents && <p className='text-[7px] md:text-lg bg-primary-600 text-tritary p-2 md:p-4'>
              {product?.ingredients}
                </p>}
          </div>
          <div className='bg-secondary-600 cursor-pointer' onClick={() => setIsStrorage(!isStorage)}>
            <div className='h-4 md:h-11 flex items-center gap-2 md:gap-4 px-2 md:px-5 rounded-sm'>
              <div className='w-0 h-0 border-l-[3px] md:border-l-[6px] border-l-transparent border-b-[4px] md:border-b-[8px] border-b-white border-r-[3px] md:border-r-[6px] border-r-transparent'></div>
              <p className='text-[6.2px] md:text-lg text-white'>Storage </p>
            </div>
            {isStorage && <p className='text-[7px] md:text-lg bg-primary-600 text-tritary p-2 md:p-4'>
              {product?.storage}
                </p>}
          </div>
          <div className='bg-secondary-600 cursor-pointer' onClick={() => setIsFeed(!isFeed)}>
            <div className='h-4 md:h-11 flex items-center gap-2 md:gap-4 px-2 md:px-5 rounded-sm'>
              <div className='w-0 h-0 border-l-[3px] md:border-l-[6px] border-l-transparent border-b-[4px] md:border-b-[8px] border-b-white border-r-[3px] md:border-r-[6px] border-r-transparent'></div>
              <p className='text-[6.2px] md:text-lg text-white'>Feeding Instructions</p>
            </div>
            {isFeed && <p className='text-[7px] md:text-lg bg-primary-600 text-tritary p-2 md:p-4'>
              {product?.feeding_instruction}
                </p>}
          </div>
        </div>
        <div className='flex flex-col md:flex-row md:items-center gap-5 mt-[14px] md:mt-[42px]'>
          <div className='flex-grow'>
            <Select
              className='w-[160px] md:!w-[100%] h-6 md:h-11 !rounded-sm [&_select]:!text-[8px] md:[&_select]:!text-lg'
              options={product?.sizes} onSizeChange={handleSizeChange}
            />
          </div>
          <Counter
            className='h-4 md:h-11 rounded-sm w-[46px] md:w-[128px] [&_span]:!text-[10px] md:[&_span]:!text-lg !px-1 md:!px-[10px]'
            count={count}
            setCount={setCount}
          />
        </div>
        <div className='flex items-center gap-2 md:gap-6 mt-3 md:mt-6'>
          <Button
            label='ADD TO CART'
            className='!rounded-[1px] flex items-center justify-center md:!rounded-[3px] !h-[15.57px] md:!h-[45px] !py-0 !px-1 md:!px-[14px] font-semibold !text-[6.23px] md:!text-lg'
          />
          <p className='text-[7px] md:text-xl text-secondary-600'>Rs. {price} /-</p>
        </div>
      </div>
    </div>
    <div className='mt-[17px] md:mt-[73px]'>
      <p className='text-[10px] md:text-26px text-primary-600 text-medium mb-2 md:mb-8 px-[21px] md:px-[70px]'>
        You may like these Hot Selling Products
      </p>

      <div className='flex gap-3 md:gap-[67px] justify-center md:justify-between px-[35px] md:px-[115px]'>
        {
          hotProducts?.length > 0 && 
          hotProducts?.map(prod => {
            return (
              <div key={prod?._id} className='flex flex-col items-center cursor-pointer' onClick={() => navigate(`/product/${prod?._id}`)}>
          <img
            src={`${assetsBaseUrl}/${prod?.image}`}
            className='w-[64.62px] h-[61.25px] md:w-[212px] md:h-[200px] object-cover'
            alt=''
          />
          <p className='text-[5.51px] md:text-lg text-center mt-1 md:mt-3'>{prod?.name}</p>
        </div>
            )
          })
        }
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
